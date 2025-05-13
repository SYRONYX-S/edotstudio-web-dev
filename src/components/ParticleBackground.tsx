'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Keep particle count balanced for performance
  const dustParticleCount = isMobile ? 30 : 60;
  
  // Get distributed positions instead of random
  const getDistributedPositions = (count: number) => {
    const positions = [];
    const cols = Math.floor(Math.sqrt(count));
    const rows = Math.ceil(count / cols);
    
    for (let i = 0; i < count; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols) % rows;
      
      const baseX = (col / cols) * 100;
      const baseY = (row / rows) * 100;
      
      const randX = (Math.random() * 15 - 7.5);
      const randY = (Math.random() * 15 - 7.5);
      
      positions.push({
        x: Math.max(0, Math.min(100, baseX + randX)),
        y: Math.max(0, Math.min(100, baseY + randY)),
      });
    }
    return positions;
  };
  
  useEffect(() => {
    // Handle mounting state
    setMounted(true);
    
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Generate stars/particles
  const dustPositions = React.useMemo(() => getDistributedPositions(dustParticleCount), [dustParticleCount]);
  
  const stars = React.useMemo(() => {
    return Array.from({ length: dustParticleCount }).map((_, i) => ({
      x: dustPositions[i].x,
      y: dustPositions[i].y,
      size: Math.random() * 2 + 1, // Star sizes 1-3px
      opacity: Math.random() * 0.4 + 0.3, // Star opacity 0.3-0.7
      duration: Math.random() * 5 + 3, // Twinkle animation duration
      delay: Math.random() * 5, // Random delay for twinkling
    }));
  }, [dustPositions, dustParticleCount]);

  // Generate subtle gradient blobs (very Framer-like)
  const gradientBlobs = React.useMemo(() => {
    return Array.from({ length: 3 }).map((_, i) => ({
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 400 + 300, // Large gradient areas
      opacity: Math.random() * 0.05 + 0.02, // Very subtle opacity
      color: i === 0 
        ? 'rgba(255, 122, 0, 0.3)' // Brand orange
        : i === 1 
          ? 'rgba(64, 96, 255, 0.2)' // Blue accent
          : 'rgba(255, 255, 255, 0.1)', // White/neutral
    }));
  }, []);
  
  // Determine the current theme for rendering
  const currentTheme = mounted ? (resolvedTheme || theme) : 'system';
  const isDarkTheme = currentTheme === 'dark';
  
  // Return null or placeholder on server/initial render
  if (!mounted) {
    // Use a similar div structure but with neutral styling
    return (
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none bg-[#050505]" />
    );
  }
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none transition-colors duration-300"
    >
      {/* Base background with smoother gradient */}
      <div 
        className="absolute inset-0 transition-colors duration-500"
        style={{ 
          backgroundColor: isDarkTheme ? '#080808' : '#fafafa',
          background: isDarkTheme
            ? 'radial-gradient(ellipse at top, #0a0a0a 0%, #080808 70%, #050505 100%)'
            : 'radial-gradient(ellipse at top, #ffffff 0%, #fafafa 70%, #f5f5f5 100%)',
        }}
      />

      {/* Modern grid pattern with finer lines - Framer style */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{ 
          opacity: isDarkTheme ? 0.07 : 0.04,
          backgroundImage: `
            linear-gradient(to right, ${isDarkTheme ? '#333' : '#ddd'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDarkTheme ? '#333' : '#ddd'} 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: 'center center',
        }}
      />

      {/* Finer grid for more elegant design - more visible */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{ 
          opacity: isDarkTheme ? 0.05 : 0.03,
          backgroundImage: `
            linear-gradient(to right, ${isDarkTheme ? '#444' : '#ccc'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDarkTheme ? '#444' : '#ccc'} 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: 'center center',
        }}
      />

      {/* Subtle gradient blobs - very Framer-like */}
      {gradientBlobs.map((blob, i) => (
        <div
          key={`blob-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            opacity: isDarkTheme ? blob.opacity * 2 : blob.opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Small particles/stars */}
      {stars.map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: i % 10 === 0 
              ? '#FF7A00' // Brand orange for some stars
              : i % 12 === 0
                ? '#4060FF' // Blue accent for some stars
                : isDarkTheme ? '#ffffff' : '#888888',
            boxShadow: i % 10 === 0
              ? `0 0 ${star.size * 2}px rgba(255, 122, 0, 0.6)` // Glow for orange stars
              : i % 12 === 0
                ? `0 0 ${star.size * 2}px rgba(64, 96, 255, 0.6)` // Glow for blue stars
                : `0 0 ${star.size}px ${isDarkTheme ? 'rgba(255, 255, 255, 0.4)' : 'rgba(100, 100, 100, 0.3)'}`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.4, star.opacity],
            scale: [1, i % 7 === 0 ? 1.2 : 1, 1], // Subtle pulse for some
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
      
      {/* Framer-style gradient overlay */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{ 
          opacity: isDarkTheme ? 0.4 : 0.2,
          background: isDarkTheme
            ? 'linear-gradient(135deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%)'
            : 'linear-gradient(135deg, transparent 0%, rgba(240, 240, 240, 0.6) 100%)',
        }}
      />
      
      {/* Subtle vignette effect */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{ 
          opacity: isDarkTheme ? 0.5 : 0.3,
          background: isDarkTheme
            ? 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%)'
            : 'radial-gradient(circle at center, transparent 30%, rgba(245, 245, 245, 0.7) 100%)',
        }}
      />
    </div>
  );
}