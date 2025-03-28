'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Initial check
    checkDevice();

    // Update on resize
    window.addEventListener('resize', checkDevice);

    // Track mouse position
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Track hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Add event listeners
    if (!isMobile) {
      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('mouseover', handleMouseOver);
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <motion.div
      className="custom-cursor pointer-events-none fixed z-[9999] rounded-full mix-blend-difference"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovering ? 1.5 : 1,
        opacity: 1,
      }}
      transition={{
        x: { type: 'spring', stiffness: 500, damping: 28 },
        y: { type: 'spring', stiffness: 500, damping: 28 },
        scale: { type: 'spring', stiffness: 500, damping: 28 },
      }}
      style={{
        backgroundColor: isHovering ? 'var(--primary)' : 'transparent',
        border: isHovering ? 'none' : '2px solid var(--primary)',
      }}
    />
  );
};

export default CursorFollower; 