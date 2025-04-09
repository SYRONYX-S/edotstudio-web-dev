'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let loadTimeout: NodeJS.Timeout;

    // Simulate progress for better UX
    progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev;
        return prev + 10;
      });
    }, 200);

    // Preload all images and assets
    const preloadAssets = async () => {
      const images = [
        '/logo-dark.svg',
        '/logo-light.svg',
        '/images/hero/hero-graphic.svg',
        // Only include images that are confirmed to exist
        '/images/clients/Al-Khuloud.png',
        '/images/clients/carbon.png',
        '/images/clients/Celecca.png',
        '/images/clients/Dplus.png',
        '/images/clients/DU-website.png',
        '/images/clients/Greenvior.png',
        '/images/clients/Hikeins.png',
        '/images/clients/Indigo-tmt.png',
        '/images/clients/Minar-TMT.png',
        '/images/clients/Shazzam.png',
      ];

      try {
        // Preload all images
        await Promise.all(
          images.map(src => {
            return new Promise((resolve) => {
              const img = new window.Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve; // Resolve even if image fails to load
            });
          })
        );

        // Wait for fonts to load
        await document.fonts.ready;

        // Set progress to 100% and hide preloader after a short delay
        setProgress(100);
        loadTimeout = setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error preloading assets:', error);
        // Still hide preloader even if some assets fail to load
        setLoading(false);
      }
    };

    preloadAssets();

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadTimeout);
    };
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
          <div className="relative flex flex-col items-center justify-center">
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
              style={{
                transform: 'translateZ(0)'
              }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-primary"
                  initial={{ opacity: 0.2, scale: 0.8 }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.8, 1.2, 0.8],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  style={{
                    transform: 'translateZ(0)',
                    width: `${(i + 1) * 100}px`,
                    height: `${(i + 1) * 100}px`,
                    left: `-${((i + 1) * 100) / 2}px`,
                    top: `-${((i + 1) * 100) / 2}px`,
                    borderWidth: '1.5px',
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
              style={{
                transform: 'translateZ(0)'
              }}
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