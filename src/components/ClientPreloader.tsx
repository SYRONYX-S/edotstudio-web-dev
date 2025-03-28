'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ClientPreloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum display time for the preloader
    const minDisplayTime = 2000;
    const startTime = Date.now();

    // Function to handle page fully loaded
    const handlePageLoaded = () => {
      const timeElapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - timeElapsed);

      // Ensure preloader shows for at least minDisplayTime
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handlePageLoaded();
    } else {
      window.addEventListener('load', handlePageLoaded);
      // Cleanup
      return () => window.removeEventListener('load', handlePageLoaded);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1B1B1B]"
        >
          <div className="relative">
            {/* Animated circle background */}
            <motion.div
              className="absolute w-[200px] h-[200px] rounded-full bg-primary-500/20 blur-[50px] -z-10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center justify-center"
            >
              <Image
                src="/logo-light.svg"
                alt="EdotStudio Logo"
                width={120}
                height={40}
                className="h-12 w-auto"
              />
            </motion.div>
            
            {/* Loading bar */}
            <div className="w-[200px] h-[2px] bg-gray-700 overflow-hidden rounded-full">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: 1.8,
                  ease: "easeInOut",
                }}
              />
            </div>
            
            {/* Loading text */}
            <motion.p 
              className="mt-4 text-sm text-gray-400 font-supreme"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-primary">Loading</span> Experience
            </motion.p>
            
            {/* Dust particles for aesthetic */}
            <div className="dust-particles absolute inset-0 z-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="particle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{ 
                    x: [0, (Math.random() * 30) - 15],
                    y: [0, (Math.random() * 30) - 15],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 