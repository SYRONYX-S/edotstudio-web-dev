'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import ThemeToggle from './ThemeToggle';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full flex items-center h-18 z-50 py-3 glass-dark shadow-lg backdrop-blur-md"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo and Links Container */}
          <div className="flex items-center">
            {/* Logo with fixed width and proper centering */}
            <Link href="/" className="flex items-center justify-center relative z-50" style={{ marginRight: '25px' }}>
              <div className="h-10 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="EdotStudio Logo"
                  width={120}
                  height={32}
                  className="nav-logo dark:opacity-0 h-8 w-auto object-contain transition-opacity duration-300"
                />
                <Image
                  src="/logo-light.svg"
                  alt="EdotStudio Logo"
                  width={120}
                  height={32}
                  className="nav-logo absolute top-1/2 left-0 -translate-y-1/2 opacity-0 dark:opacity-100 h-8 w-auto object-contain transition-opacity duration-300"
                />
              </div>
            </Link>
            
            {/* Vertical Divider */}
            <div className="hidden md:block h-6 w-px bg-gray-600" style={{ marginRight: '12px' }}></div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center nav-links-container" style={{ marginLeft: '13px' }}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link 
                    href={link.href}
                    className="font-supreme text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side Elements - CTA and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle className="glass dark:glass-dark" />

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-6 py-2 rounded-full font-technor hover:bg-primary-dark transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle - Mobile */}
            <ThemeToggle className="glass dark:glass-dark" />
            
            <button 
              onClick={toggleMobileMenu}
              className="text-foreground p-2 focus:outline-none z-50 relative glass dark:glass-dark rounded-full"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="w-6 h-6" />
              ) : (
                <RiMenu3Line className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 bg-secondary/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col items-center space-y-6 w-full">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full text-center"
                >
                  <Link 
                    href={link.href}
                    className="font-technor text-white text-2xl hover:text-primary block py-2 w-full glass-dark rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-6 py-3 rounded-full font-technor mt-4 w-full"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 