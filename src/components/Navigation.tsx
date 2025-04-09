"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { RiMenuLine, RiCloseLine, RiSunLine, RiMoonLine, RiSmartphoneLine } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { Settings2, VolumeX, Volume1, Volume2 } from 'lucide-react';

// Components
import Button from './Button';
import { hapticFeedback, isHapticsSupported, setHapticsIntensity, getHapticsIntensity } from '@/utils/haptics';

// Updated toast styling component for site-wide use
const NotificationToast = (message: string) => {
  return toast.success(message, {
    position: "bottom-center",
    duration: 2000,
    style: {
      background: 'rgba(var(--card), 0.9)',
      color: 'rgb(var(--foreground))',
      fontFamily: 'var(--font-pilcrow)',
      fontSize: '14px',
      padding: '12px 16px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(var(--border), 0.2)',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '300px',
    },
    iconTheme: {
      primary: '#FF4D00',
      secondary: '#FFFFFF',
    },
  });
};

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'PORTFOLIO', href: '/portfolio' },
  { name: 'CAREERS', href: '/careers' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hapticsEnabled, setHapticsEnabled] = useState(true);
  const [showHapticSettings, setShowHapticSettings] = useState(false);
  const [hapticIntensity, setHapticIntensity] = useState<'off' | 'light' | 'medium' | 'heavy'>('medium');
  const [hapticsSupported, setHapticsSupported] = useState<boolean | null>(null);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    // Load haptics enabled preference
    const savedHapticPref = localStorage.getItem('hapticsEnabled');
    if (savedHapticPref !== null) {
      setHapticsEnabled(savedHapticPref === 'true');
    }
    
    // Check if haptics are supported
    const checkSupport = async () => {
      // Test with navigator.vibrate directly first
      const hasVibrate = 'vibrate' in navigator;
      
      // Also check with our utility function that has additional checks
      const utilityCheck = isHapticsSupported();
      
      // Device supports haptics only if both checks pass
      const supported = hasVibrate && utilityCheck;
      
      setHapticsSupported(supported);
      
      // If supported, get saved intensity
      if (supported) {
        setHapticIntensity(getHapticsIntensity());
      }
    };
    
    checkSupport();
  }, []);

  useEffect(() => {
    if (mounted) {
        localStorage.setItem('hapticsEnabled', String(hapticsEnabled));
    }
  }, [hapticsEnabled, mounted]);

  const toggleHaptics = () => {
    const newState = !hapticsEnabled;
    setHapticsEnabled(newState);
    if (newState) hapticFeedback.impactMedium();
    // Use the new toast styling
    NotificationToast(`Haptics ${newState ? 'Enabled' : 'Disabled'}`);
  };
  
  const handleIntensityChange = (newIntensity: 'off' | 'light' | 'medium' | 'heavy') => {
    setHapticIntensity(newIntensity);
    setHapticsIntensity(newIntensity);
    if (hapticsEnabled && newIntensity !== 'off') {
      // Provide feedback at the new intensity level
      switch (newIntensity) {
        case 'light':
          hapticFeedback.impactLight();
          break;
        case 'medium':
          hapticFeedback.impactMedium();
          break;
        case 'heavy':
          hapticFeedback.impactHeavy();
          break;
      }
    }
    setShowHapticSettings(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 h-20 flex items-center right-0 z-50 bg-background/90 dark:bg-background-dark/90 backdrop-blur-lg shadow-lg"
      >
        <div className="container mx-auto px-0 md:px-4 py-3 flex items-center justify-between nav-logo-parent">
          <Link href="/" className="flex-shrink-0 pl-2 md:pl-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-36 h-10 flex items-center"
            >
              <Image
                src="/logo-dark.svg"
                alt="EdotStudio Logo"
                width={120}
                height={32}
                className="block dark:hidden"
                priority
              />
              <Image
                src="/logo-light.svg"
                alt="EdotStudio Logo"
                width={120}
                height={32}
                className="hidden dark:block"
                priority
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = mounted && (
                link.href === '/' 
                  ? pathname === '/'
                  : pathname?.startsWith(link.href)
              );
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-md font-medium !font-pilcrow transition-colors duration-200 ${
                    isActive 
                      ? 'text-primary-light' 
                      : 'hover:text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavItem"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary-light opacity-80 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const newTheme = theme === 'dark' ? 'light' : 'dark';
                setTheme(newTheme);
                document.documentElement.classList.toggle('dark', newTheme === 'dark');
                if (hapticsEnabled) hapticFeedback.impactLight();
              }}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RiSunLine className="w-5 h-5 text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RiMoonLine className="w-5 h-5 text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            
            {/* Haptics Settings Button - Only show on mobile */}
            {/* Removed from navbar for screens above 991px as requested */}

            <Button
              href="partner"
              className={`font-pilcrow hidden md:inline-flex hover:bg-primary-light dark:hover:bg-primary-light text-black dark:text-white border-primary-light dark:border-primary-light shadow-primary-light dark:shadow-primary-light ${
                pathname === 'partner' ? 'bg-primary-light dark:bg-primary-light text-white dark:text-white' : ''
              }`}
              variant="outline"
            >
              Partner With Us
            </Button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                if (hapticsEnabled) hapticFeedback.impactLight();
              }}
              className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="w-6 h-6 text-primary" />
              ) : (
                <RiMenuLine className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 right-0 bg-background/95 dark:bg-background-dark/95 backdrop-blur-md shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto z-40 border-b border-white/10 dark:border-black/20"
            >
              <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col space-y-5">
                  {navLinks.map((link) => {
                    const isActive = mounted && (
                      link.href === '/' 
                        ? pathname === '/'
                        : pathname?.startsWith(link.href)
                    );
                    
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`relative block text-lg font-semibold transition-colors duration-200 py-2 ${
                          isActive 
                            ? 'text-primary-light' 
                            : 'text-foreground/80 hover:text-primary'
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          if (hapticsEnabled) hapticFeedback.selection();
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.name}</span>
                          {isActive && (
                            <motion.div
                              layoutId="activeMobileNavItem"
                              className="w-1.5 h-1.5 bg-primary-light rounded-full"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </div>
                      </Link>
                    );
                  })}

                  <div className="pt-4 mt-4 border-t border-white/10 dark:border-black/20">
                    {hapticsSupported && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <button
                            onClick={toggleHaptics}
                            className="flex items-center gap-2 text-sm p-2 rounded-md hover:bg-primary/10 text-foreground/80 hover:text-primary transition-colors duration-200"
                            aria-label={hapticsEnabled ? "Disable haptic feedback" : "Enable haptic feedback"}
                          >
                            <RiSmartphoneLine className={`w-4 h-4 ${hapticsEnabled ? 'text-primary' : 'text-foreground/40'}`} />
                            <span>Haptics {hapticsEnabled ? 'On' : 'Off'}</span>
                          </button>
                        </div>
                        
                        {hapticsEnabled && (
                          <div className="space-y-1 pl-4">
                            <div 
                              className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${hapticIntensity === 'light' ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                              onClick={() => handleIntensityChange('light')}
                            >
                              <Volume1 className="w-3 h-3 mr-2 text-[#1F1F1F] dark:text-[#DCDCDC]" />
                              <span className="text-xs">Light</span>
                            </div>
                            
                            <div 
                              className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${hapticIntensity === 'medium' ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                              onClick={() => handleIntensityChange('medium')}
                            >
                              <Volume2 className="w-3 h-3 mr-2 text-[#1F1F1F] dark:text-[#DCDCDC]" />
                              <span className="text-xs">Medium</span>
                            </div>
                            
                            <div 
                              className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${hapticIntensity === 'heavy' ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                              onClick={() => handleIntensityChange('heavy')}
                            >
                              <Volume2 className="w-3 h-3 mr-2 text-[#1F1F1F] dark:text-[#DCDCDC]" />
                              <span className="text-xs">Strong</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <Toaster />
    </>
  );
}