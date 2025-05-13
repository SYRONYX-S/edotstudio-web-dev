'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  
  // Reduce particle count, especially for mobile
  const dustParticleCount = isMobile ? 80 : 150;
  
  // More varied shapes for particles
  const getRandomShape = () => {
    const shapes = [
      'rounded-full', // Circle
      'rounded-sm', // Small rounded
      'rounded-none rotate-45', // Diamond
      'rounded-md', // Medium rounded
      'rounded-full', // More circles for balance
      'rounded-xl', // Extra rounded
    ];
    return shapes[Math.floor(Math.random() * shapes.length)];
  };
  
  // Get distributed positions instead of random
  const getDistributedPositions = (count: number) => {
    const positions = [];
    // Create a grid effect but with some randomness
    const cols = Math.floor(Math.sqrt(count));
    const rows = Math.ceil(count / cols);
    
    for (let i = 0; i < count; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols) % rows;
      
      // Calculate base position with good distribution
      const baseX = (col / cols) * 100;
      const baseY = (row / rows) * 100;
      
      // Add randomness within the cell
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
  
  // Generate particles only once
  const dustPositions = React.useMemo(() => getDistributedPositions(dustParticleCount), [dustParticleCount]);
  
  const dustParticles = React.useMemo(() => {
    return Array.from({ length: dustParticleCount }).map((_, i) => ({
      x: dustPositions[i].x,
      y: dustPositions[i].y,
      size: Math.random() * 3 + 1.5, // Larger (1.5-4.5px)
      opacity: Math.random() * 0.6 + 0.3, // Higher opacity (0.3-0.9)
      duration: Math.random() * 60 + 60, // Slower animation for subtlety
      shape: getRandomShape(),
      rotate: Math.random() * 360,
    }));
  }, [dustPositions, dustParticleCount]);
  
  // Remove the scroll and mouse movement animations completely
  // These were causing the continuous refreshing and performance issues

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none transition-colors duration-300"
    >
      {/* Dust particles - better distributed */}
      {dustParticles.map((particle, i) => (
        <motion.div
          key={`dust-${i}`}
          className={`dust-particle absolute ${particle.shape}`}
          data-rotate={particle.rotate}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: i % 8 === 0 ? '#DCDCDC' : '#FF7A00',
            opacity: theme === 'dark' ? particle.opacity * 0.8 : particle.opacity * 0.6,
            boxShadow: i % 8 === 0 
              ? `0 0 ${particle.size}px rgba(220, 220, 220, ${theme === 'dark' ? 0.4 : 0.7})` 
              : `0 0 ${particle.size}px rgba(255, 122, 0, ${theme === 'dark' ? 0.4 : 0.7})`,
            transform: `rotate(${particle.rotate}deg)`,
            willChange: 'opacity',
            transition: 'opacity 0.5s ease-in-out, background-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
          }}
          animate={{
            opacity: [
              theme === 'dark' ? particle.opacity * 0.8 : particle.opacity * 0.6,
              theme === 'dark' ? particle.opacity * 0.3 : particle.opacity * 0.3,
              theme === 'dark' ? particle.opacity * 0.8 : particle.opacity * 0.6,
            ],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Very subtle vignette - static, not animated */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{ 
          opacity: theme === 'dark' ? 0.4 : 0.1,
          background: theme === 'dark'
            ? 'radial-gradient(circle at center, transparent 30%, rgba(31, 31, 31, 0.8) 100%)'
            : 'radial-gradient(circle at center, transparent 30%, rgba(220, 220, 220, 0.8) 100%)',
          transition: 'opacity 0.5s ease-in-out, background 0.5s ease-in-out',
        }}
      />
    </div>
  );
}