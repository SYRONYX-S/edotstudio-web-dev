'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowUpLine, RiWhatsappLine } from 'react-icons/ri';
import { useTheme } from 'next-themes';

export default function FloatingButtons() {
  const [showButtons, setShowButtons] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Hero section is typically 100vh
      setShowButtons(window.scrollY > (heroHeight * 0.05)); // Show when scrolled past half of hero
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {showButtons && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-3 right-3 z-50 flex flex-col gap-3"
        >
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/1234567890" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-primary-light/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <RiWhatsappLine className="w-5 h-5 text-primary-light dark:text-primary-light relative z-10" />
          </motion.a>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-primary-light/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <RiArrowUpLine className="w-5 h-5 text-primary-light dark:text-primary-light relative z-10" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 