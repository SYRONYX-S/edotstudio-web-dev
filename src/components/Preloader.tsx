'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface PreloaderProps {
  onLoadingComplete: () => void;
  images: string[];
}

export default function Preloader({ onLoadingComplete, images }: PreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = images.length;

    const updateProgress = () => {
      loadedImages++;
      const newProgress = (loadedImages / totalImages) * 100;
      setProgress(newProgress);

      if (loadedImages === totalImages) {
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }
    };

    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = document.createElement('img') as HTMLImageElement;
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
      });
    };

    const preloadImages = async () => {
      try {
        const imagePromises = images.map(src => loadImage(src));
        await Promise.all(imagePromises);
      } catch (error) {
        console.error('Error preloading images:', error);
        onLoadingComplete(); // Continue even if some images fail to load
      }
    };

    preloadImages();
  }, [images, onLoadingComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background dark:bg-background-dark"
        >
          <div className="relative w-full max-w-md">
            <div className="mx-auto mb-8 w-32 h-32">
              <Image
                src="/logo-dark.svg"
                alt="Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain block dark:hidden"
                priority
              />
              <Image
                src="/logo-light.svg"
                alt="Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain hidden dark:block"
                priority
              />
            </div>
            <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary-light"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
              Loading... {Math.round(progress)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 