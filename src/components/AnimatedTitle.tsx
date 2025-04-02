'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  className?: string;
}

export default function AnimatedTitle({ title, className = '' }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const words = title.split(' ');

  // Simpler animation for mobile
  if (isMobile) {
    return (
      <h1 className={className}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          style={{ 
            display: 'inline-block',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            transform: 'translate3d(0,0,0)',
            WebkitTransform: 'translate3d(0,0,0)',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {title}
        </motion.span>
      </h1>
    );
  }

  return (
    <h1 className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          style={{
            display: 'inline-block',
            marginRight: '0.25em',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            transform: 'translate3d(0,0,0)',
            WebkitTransform: 'translate3d(0,0,0)',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
} 