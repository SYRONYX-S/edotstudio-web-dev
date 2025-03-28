'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowUpLine, RiWhatsappLine } from 'react-icons/ri';

export default function FloatingButtons() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Assuming hero section is 100vh
      setShowButtons(window.scrollY > heroHeight);
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
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
        >
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/1234567890" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <RiWhatsappLine className="w-6 h-6" />
          </motion.a>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <RiArrowUpLine className="w-6 h-6" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 