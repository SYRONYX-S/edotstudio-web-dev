'use client';

import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface Shape {
  id: number;
  x: string;
  y: string;
  size: string;
  rotate: number;
  opacity: number;
  blur: string;
  depth: number;
  type: 'circle' | 'square' | 'triangle' | 'donut' | 'cube' | 'pyramid';
  color: string;
  gradient?: boolean;
  initialDelay?: number;
  animationDuration?: number;
  moveDistance?: number;
  direction: {
    x: number;
    y: number;
    rotate: number;
  };
}

// Create a fixed number of transform values - keep user's custom value
const MAX_SHAPES = 24;

// Scroll animation speed multiplier - controls how much scroll affects animation speed
const SCROLL_SPEED_MULTIPLIER = 120;

export default function ScrollBackground() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const { scrollY, scrollYProgress } = useScroll();
  
  // Use a spring for smooth scrolling effect
  const smoothScrollY = useSpring(scrollY, { damping: 50, stiffness: 400 });
  
  // Track scroll velocity for animation speed modulation
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const prevScrollY = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Track viewport dimensions
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  
  // Animation speed factor (1 = normal, >1 = faster)
  const [speedFactor, setSpeedFactor] = useState(1);
  
  // Update viewport dimensions
  useEffect(() => {
    const updateViewportSize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Initialize
    updateViewportSize();
    
    // Listen for resize
    window.addEventListener('resize', updateViewportSize);
    
    return () => {
      window.removeEventListener('resize', updateViewportSize);
    };
  }, []);
  
  const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Adjust MAX_SHAPES based on viewport width
  const MAX_SHAPES = viewport.width < 991 ? 12 : 24;

  // Debounce the scroll event listener
  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - prevScrollY.current);
      const newVelocity = Math.min(delta * 0.25, 2);
      setScrollVelocity(newVelocity);
      const newSpeedFactor = Math.min(1 + (newVelocity * SCROLL_SPEED_MULTIPLIER * 0.01), 12);
      setSpeedFactor(newSpeedFactor);
      prevScrollY.current = currentScrollY;
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setSpeedFactor(1);
        setScrollVelocity(0);
      }, 150);
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    // Generate shapes only once on component mount
    const types: Array<'circle' | 'square' | 'triangle' | 'donut' | 'cube' | 'pyramid'> = 
      ['circle', 'square', 'triangle', 'donut', 'cube', 'pyramid'];
    
    // Brighter colors within brand palette
    const colors = [
      'rgba(255, 77, 0, 0.5)',         // primary - brighter
      'rgba(255, 115, 64, 0.45)',      // primary-light - brighter
      'rgba(232, 96, 0, 0.6)',         // primary variant - brighter
      'rgba(255, 177, 0, 0.4)',        // orange-yellow - brighter
      'rgba(255, 255, 255, 0.15)',     // white
      'rgba(0, 0, 0, 0.1)',            // black
    ];
    
    // Create shapes with better distribution from center
    const newShapes: Shape[] = [];
    for (let i = 0; i < MAX_SHAPES; i++) {
      const sizeValue = Math.random() * 180 + 80; // Slightly larger shapes
      const shapeType = types[Math.floor(Math.random() * types.length)];
      
      // Determine if we should use a gradient
      const useGradient = Math.random() > 0.5;
      
      // Improved positioning - center weighted with spread
      // Generate positions around the center of the screen with some variation
      const angle = Math.random() * Math.PI * 2; // Random angle around center
      const distance = Math.random() * 40 + 10;  // Random distance from center (10-50%)
      
      // Convert polar coordinates to cartesian (centered at 50%, 50%)
      const x = 50 + Math.cos(angle) * distance;
      const y = 50 + Math.sin(angle) * distance;
      
      // Animation parameters - keep user's custom values
      const initialDelay = Math.random() * 1; // Random delay between 0-1s
      const animationDuration = Math.random() * 8 + 6; // Random duration between 7-15s
      const moveDistance = Math.random() * 80 + 80; // Random movement distance between 80-160px
      
      // Random movement directions for consistent animation
      const direction = {
        x: Math.random() > 0.5 ? 1 : -1,
        y: Math.random() > 0.5 ? 1 : -1,
        rotate: Math.random() > 0.5 ? 1 : -1
      };
      
      newShapes.push({
        id: i,
        x: `${x}%`,
        y: `${y}%`,
        size: `${sizeValue}px`,
        rotate: Math.random() * 360,
        opacity: Math.random() * 0.4 + 0.2, // Slightly higher base opacity
        blur: `${Math.random() * 15 + 5}px`,
        depth: Math.random() * 5 + 2, // For 3D effects
        type: shapeType,
        color: colors[Math.floor(Math.random() * colors.length)],
        gradient: useGradient,
        initialDelay,
        animationDuration,
        moveDistance,
        direction
      });
    }
    setShapes(newShapes);
  }, []);
  
  // Apply hardware acceleration to animated elements
  const shapeStyle = {
    transform: 'translate3d(0,0,0)',
    backfaceVisibility: 'hidden' as 'hidden',
  };
  
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>
      
      {/* Floating shapes */}
      {shapes.map((shape) => {
        // Determine if this is a 3D shape
        const is3DShape = shape.type === 'cube' || shape.type === 'pyramid';
        
        // For 3D shapes, we need to add perspective and transform-style properties
        const perspective = is3DShape ? '800px' : 'none';
        const transformStyle = is3DShape ? 'preserve-3d' : 'flat';
        
        // Create gradient background for shapes with gradient flag
        const gradientBg = shape.gradient 
          ? `linear-gradient(135deg, ${shape.color}, rgba(255, 77, 0, 0.3))` 
          : undefined;
        
        // Calculate transition duration - speeds up during scroll
        const duration = (shape.animationDuration || 10) / speedFactor;
        
        // Movement values based on shape.direction
        const xMovement = (shape.moveDistance || 80) * shape.direction.x;
        const yMovement = (shape.moveDistance || 80) * shape.direction.y;
        const rotateMovement = 25 * shape.direction.rotate;
        
        return (
          <motion.div
            key={shape.id}
            style={{
              ...shapeStyle,
              position: 'absolute',
              top: shape.y,
              left: shape.x,
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
              filter: `blur(${shape.blur})`,
              transform: `translate3d(0,0,0) rotate(${shape.rotate}deg)`,
              opacity: shape.opacity,
              transition: `transform ${duration}s linear`,
            }}
          />
        );
      })}
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-30 dark:from-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-30 dark:from-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-20 dark:from-black"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent opacity-20 dark:from-black"></div>
      
      {/* Noise texture overlay for subtle grain effect */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-noise"></div>
      
      {/* Add some CSS classes for 3D transforms */}
      <style jsx global>{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
} 