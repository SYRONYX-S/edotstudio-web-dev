'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate loading time (you can remove this in production)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background dark:bg-background-dark"
        >
          <div className="relative flex items-center justify-center">
            {/* Animated Circles */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-primary"
                  initial={{ opacity: 0.3, scale: 0.8 }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                    rotate: [0, 120, 240, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                  style={{
                    width: `${(i + 1) * 80}px`,
                    height: `${(i + 1) * 80}px`,
                    left: `-${((i + 1) * 80) / 2}px`,
                    top: `-${((i + 1) * 80) / 2}px`,
                    borderWidth: '1px',
                  }}
                />
              ))}
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
              }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
              className="relative w-32 h-8"
            >
              <Image
                src="/logo-dark.svg"
                alt="EdotStudio Logo"
                fill
                className="block dark:hidden"
                priority
              />
              <Image
                src="/logo-light.svg"
                alt="EdotStudio Logo"
                fill
                className="hidden dark:block"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 