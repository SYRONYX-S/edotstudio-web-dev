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

  // No animations at all on mobile for better performance
  if (isMobile) {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#FF4D0015,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_70%_50%,#FF4D0010,transparent)]" />
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#FF4D0015,transparent)]"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ willChange: 'opacity' }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_600px_at_70%_50%,#FF4D0010,transparent)]"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ willChange: 'opacity' }}
        />
      </div>
    </div>
  );
} 