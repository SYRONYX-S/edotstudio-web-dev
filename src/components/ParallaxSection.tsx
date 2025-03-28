'use client';

import React, { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  overlayColor?: string;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  backgroundImage,
  overlayColor = 'rgba(0, 0, 0, 0.4)',
  speed = 0.5,
  className = '',
  reverse = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate parallax effect based on scroll position
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ['0%', `${speed * 100}%`] : [`${speed * 100}%`, '0%']
  );

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Parallax effect container */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Only render if background image is provided */}
        {backgroundImage && (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div 
              className="absolute inset-0"
              style={{ backgroundColor: overlayColor }}
            />
          </>
        )}
      </motion.div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxSection; 