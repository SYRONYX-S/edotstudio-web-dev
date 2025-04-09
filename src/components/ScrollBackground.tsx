'use client';

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

// Number of gradient spots to create
const GRADIENT_SPOTS = 8;

// Define the type for a gradient spot
interface Spot {
  id: number;
  size: string;
  left: string;
  top: string;
  color: string;
  blur: string;
  parallaxAmount: number;
  opacity: number;
}

// Sub-component for rendering a single gradient spot
interface GradientSpotProps {
  spot: Spot;
  smoothScrollY: MotionValue<number>;
  smoothScrollProgress: MotionValue<number>;
}

function GradientSpot({ spot, smoothScrollY, smoothScrollProgress }: GradientSpotProps) {
  // Create scroll-linked transform values inside the component
  const y = useTransform(smoothScrollY, [0, 2000], [0, spot.parallaxAmount]);
  const scale = useTransform(
    smoothScrollProgress,
    [0, 1],
    [1, spot.parallaxAmount > 0 ? 1.1 : 0.9]
  );

  return (
    <motion.div
      key={spot.id}
      className="absolute rounded-full"
      style={{
        width: spot.size,
        height: spot.size,
        left: spot.left,
        top: spot.top,
        y, // Use the transform value directly
        scale, // Use the transform value directly
        opacity: spot.opacity,
        background: `radial-gradient(circle at center, ${spot.color}, transparent 70%)`,
        filter: `blur(${spot.blur})`,
        willChange: 'transform',
        transform: 'translateZ(0)', // Ensure GPU acceleration
        backfaceVisibility: 'hidden'
      }}
    />
  );
}


export default function ScrollBackground() {
  const [spots, setSpots] = useState<Spot[]>([]);
  const { scrollY, scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  
  // Smoothed scroll values for better performance
  const smoothScrollY = useSpring(scrollY, { damping: 30, stiffness: 200 });
  const smoothScrollProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 200 });
  
  // Track viewport dimensions
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  
  // Update viewport dimensions and check if mobile
  useEffect(() => {
    const updateViewportSize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
      setIsMobile(window.innerWidth < 991);
    };
    
    updateViewportSize();
    window.addEventListener('resize', updateViewportSize);
    return () => window.removeEventListener('resize', updateViewportSize);
  }, []);
  
  // Generate gradient spots (only once on mount)
  useEffect(() => {
    // BRAND COLORS ONLY
    const colorsLight = [
      'rgba(255, 77, 0, 0.3)',    // Primary (Opacity: 0.3)
      'rgba(255, 115, 64, 0.35)', // Primary light (Opacity: 0.35)
      'rgba(232, 96, 0, 0.3)',    // Primary variant (Opacity: 0.3)
      'rgba(255, 177, 0, 0.25)', // Orange-yellow (Opacity: 0.25)
    ];
    // Dark mode - Use same brand colors, just reduce alpha slightly
    const colorsDark = [
      'rgba(255, 77, 0, 0.2)',    // Primary (Opacity: 0.2)
      'rgba(255, 115, 64, 0.25)', // Primary light (Opacity: 0.25)
      'rgba(232, 96, 0, 0.2)',    // Primary variant (Opacity: 0.2)
      'rgba(255, 177, 0, 0.15)', // Orange-yellow (Opacity: 0.15)
    ];
    
    const isDark = document.documentElement.classList.contains('dark');
    const currentColors = isDark ? colorsDark : colorsLight;

    const newSpots: Spot[] = [];
    for (let i = 0; i < GRADIENT_SPOTS; i++) {
      const size = Math.floor(Math.random() * 400) + 300; // 300-700px
      const xPos = (i % 4) * 25 + Math.random() * 15; 
      const yPosRow = Math.floor(i / 4);
      const yPos = yPosRow * 50 + Math.random() * 30;
      const color = currentColors[Math.floor(Math.random() * currentColors.length)];
      const parallaxAmount = Math.random() * 250 + 100; // 100-350px parallax
      const parallaxDirection = Math.random() > 0.5 ? 1 : -1;
      const parallaxValue = parallaxAmount * parallaxDirection;
      
      newSpots.push({
        id: i,
        size: `${size}px`,
        left: `${xPos}%`,
        top: `${yPos}%`,
        color, // Use theme-appropriate brand color
        blur: `${Math.floor(Math.random() * 40) + 70}px`, // 70-110px blur
        parallaxAmount: parallaxValue,
        opacity: Math.random() * 0.4 + 0.4 // Increased base opacity: 0.4-0.8
      });
    }
    
    setSpots(newSpots);
  }, []); // Run only once
  
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Base background gradient (Theme Aware) - Adjusted dark colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-[#0a0a0a] transition-colors duration-300"></div>
      
      {/* Grid overlay (Theme Aware) - Slightly reduced opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:20px_20px] opacity-50 dark:opacity-30"></div>
      
      {/* Gradient spots using brand colors */}
      {spots.map((spot) => (
        <GradientSpot 
          key={spot.id} 
          spot={spot} 
          smoothScrollY={smoothScrollY} 
          smoothScrollProgress={smoothScrollProgress} 
        />
      ))}
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-noise"></div>
    </div>
  );
}