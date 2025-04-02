'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AbstractBackgroundProps {
  className?: string;
}

export function AbstractBackground({ className = '' }: AbstractBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Reduce number of elements and simplify animations on mobile */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#FF4D0015,transparent)]"
          animate={isMobile ? {} : {
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_600px_at_70%_50%,#FF4D0010,transparent)]"
          animate={isMobile ? {} : {
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
} 