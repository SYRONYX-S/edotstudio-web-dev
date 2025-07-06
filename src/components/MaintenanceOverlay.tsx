'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RiToolsLine, RiTimeLine, RiMailLine, RiWhatsappLine } from 'react-icons/ri';
import Image from 'next/image';

const MaintenanceOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100000] bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl">
      {/* Restore default cursor & hide custom cursor with maximum priority */}
      <style jsx global>{`
        html, body, *, 
        *::before, *::after,
        a, button, input, select, textarea,
        [role="button"], [tabindex],
        div, span, p, h1, h2, h3, h4, h5, h6 {
          cursor: auto !important;
          -webkit-cursor: auto !important;
          -moz-cursor: auto !important;
          -ms-cursor: auto !important;
        }
        
        /* Hide all custom cursor elements */
        .fixed.z-\[99999\], 
        .fixed.z-\[99998\], 
        .fixed.z-\[999999\], 
        .fixed.z-\[999998\],
        .custom-cursor,
        [class*="cursor-dot"],
        [class*="cursor-ring"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }
        
        /* Force cursor styles for all interactive elements */
        a:hover, button:hover, 
        [role="button"]:hover, 
        input:hover, select:hover, 
        textarea:hover, [tabindex]:hover {
          cursor: pointer !important;
        }
        
        /* Ensure the maintenance overlay itself has proper cursor */
        .z-\[100000\] * {
          cursor: auto !important;
        }
        
        .z-\[100000\] a,
        .z-\[100000\] button,
        .z-\[100000\] [role="button"] {
          cursor: pointer !important;
        }
      `}</style>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Image
              src="/logo-light.svg"
              alt="EdotStudio Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
          </motion.div>

          {/* Maintenance Icon */}
          <motion.div
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FF4D00]/20 rounded-full backdrop-blur-sm border border-[#FF4D00]/30">
              <RiToolsLine className="w-10 h-10 text-[#FF4D00]" />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl md:text-5xl font-technor text-white mb-4"
          >
            Website Under Maintenance
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl text-gray-300 mb-8 font-pilcrow"
          >
            We're revamping our website to bring you an even better experience
          </motion.p>

          {/* Status card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-700/50 mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <RiTimeLine className="w-6 h-6 text-[#FF4D00]" />
              <span className="text-white font-medium">Expected Completion</span>
            </div>
            <p className="text-gray-300 font-pilcrow">
              We're working hard to complete the revamp. Please check back soon or contact us directly for immediate assistance.
            </p>
          </motion.div>

          {/* Contact options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="space-y-4"
          >
            <p className="text-gray-400 font-pilcrow mb-6">
              Need to get in touch? We're still available for your projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:contact.edotstudio@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-[#FF4D00]/20 hover:bg-[#FF4D00]/30 text-white px-6 py-3 rounded-lg backdrop-blur-sm border border-[#FF4D00]/30 transition-all duration-300 font-pilcrow"
              >
                <RiMailLine className="w-5 h-5" />
                Email Us
              </motion.a>
              
              <motion.a
                href="https://wa.me/918304081013"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-green-600/80 hover:bg-green-600 text-white px-6 py-3 rounded-lg backdrop-blur-sm border border-green-500/30 transition-all duration-300 font-pilcrow"
              >
                <RiWhatsappLine className="w-5 h-5" />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-8"
          >
            <div className="w-full bg-gray-700/50 rounded-full h-2 mb-2">
              <motion.div
                className="bg-[#FF4D00] h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, delay: 1.6 }}
              />
            </div>
            <p className="text-gray-400 text-sm font-pilcrow">75% Complete</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MaintenanceOverlay; 