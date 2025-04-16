"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { RiMenuLine, RiCloseLine, RiSunLine, RiMoonLine } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

// Components
import Button from './Button';
import { hapticFeedback } from '@/utils/haptics';

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
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 h-20 flex items-center right-0 z-50 bg-background/90 dark:bg-black/80 backdrop-blur shadow-lg"
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
                      ? 'text-primary-light dark:text-primary-light' 
                      : 'text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary'
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

            <Button
              href="partner"
              className={`font-pilcrow hidden md:inline-flex bg-primary-light hover:bg-primary-light dark:hover:bg-primary-light text-white dark:text-white border-primary-light dark:border-primary-light shadow-primary-light dark:shadow-primary-light ${
                pathname === 'partner' ? 'bg-primary-light dark:bg-primary-light text-white dark:text-white' : ''
              }`}
            >
              Partner With Us
            </Button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
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
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-background/95 dark:bg-background-dark/95 backdrop-blur-md z-40 pt-20 overflow-y-auto"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-4 py-8">
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
                      className={`relative text-lg font-medium !font-pilcrow py-2 px-3 rounded-lg transition-colors duration-200 ${
                        isActive 
                          ? 'text-primary-light dark:text-primary-light bg-primary/5 dark:bg-primary/10' 
                          : 'text-gray-800 dark:text-gray-200 hover:text-primary hover:bg-gray-100/50 dark:hover:bg-gray-800/50 dark:hover:text-primary'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{link.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeMobileNavItem"
                            className="ml-2 w-1.5 h-1.5 bg-primary-light rounded-full"
                          />
                        )}
                      </div>
                    </Link>
                  );
                })}
                
                <div className="pt-6 mt-2 border-t border-gray-200 dark:border-gray-800">
                  <Button
                    href="partner"
                    className="w-full justify-center font-pilcrow bg-primary-light text-white hover:bg-primary mt-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Partner With Us
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Toaster />
    </>
  );
}