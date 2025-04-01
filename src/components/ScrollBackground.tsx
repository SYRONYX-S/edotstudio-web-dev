'use client';

import React, { useEffect, useState, useMemo } from "react";
import { motion, useScroll, MotionValue } from "framer-motion";

interface Shape {
  id: number;
  x: string;
  y: string;
  size: string;
  rotate: number;
  opacity: number;
  blur: string;
  type: 'circle' | 'square' | 'triangle' | 'donut';
  color: string;
}

// Create a fixed number of transform values - this is key to avoiding the hooks error
// We're pre-creating these hooks with fixed indices
const MAX_SHAPES = 24;

export default function ScrollBackground() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const { scrollY } = useScroll();
  
  // Generate all the transform values upfront, not inside the render method
  // These hooks must be called at the top level, not inside conditional statements or loops
  const yMovements = useMemo(() => {
    const movements: MotionValue<number>[] = [];
    for (let i = 0; i < MAX_SHAPES; i++) {
      const isEven = i % 2 === 0;
      // Create separate hooks for each shape with fixed parameters
      const transform = scrollY.get(); // Just to have a value, will be updated in useEffect
      movements.push({ get: () => {
        const scrollValue = scrollY.get();
        return scrollValue <= 0 ? 0 : (scrollValue / 1000) * (isEven ? -100 : 100);
      } } as MotionValue<number>);
    }
    return movements;
  }, [scrollY]);
  
  const xMovements = useMemo(() => {
    const movements: MotionValue<number>[] = [];
    for (let i = 0; i < MAX_SHAPES; i++) {
      const isDivisibleByThree = i % 3 === 0;
      const transform = scrollY.get(); // Just to have a value, will be updated in useEffect
      movements.push({ get: () => {
        const scrollValue = scrollY.get();
        return scrollValue <= 0 ? 0 : (scrollValue / 2000) * (isDivisibleByThree ? 50 : -50);
      } } as MotionValue<number>);
    }
    return movements;
  }, [scrollY]);
  
  const rotations = useMemo(() => {
    const rotations: MotionValue<number>[] = [];
    for (let i = 0; i < MAX_SHAPES; i++) {
      const isEven = i % 2 === 0;
      const transform = scrollY.get(); // Just to have a value, will be updated in useEffect
      rotations.push({ get: () => {
        const scrollValue = scrollY.get();
        return scrollValue <= 0 ? 0 : (scrollValue / 3000) * (isEven ? 180 : -180);
      } } as MotionValue<number>);
    }
    return rotations;
  }, [scrollY]);
  
  const opacityValues = useMemo(() => {
    const opacities: MotionValue<number>[] = [];
    for (let i = 0; i < MAX_SHAPES; i++) {
      const transform = scrollY.get(); // Just to have a value, will be updated in useEffect
      opacities.push({ get: () => {
        const scrollValue = scrollY.get();
        const baseOpacity = 0.2 + (i % 5) * 0.1; // Varied base opacity
        if (scrollValue <= 0) return baseOpacity;
        if (scrollValue < 500) return baseOpacity + (scrollValue / 500) * 0.5 * baseOpacity;
        if (scrollValue < 1500) return baseOpacity * 1.5;
        return baseOpacity * 1.5 - ((scrollValue - 1500) / 1500) * 0.5 * baseOpacity;
      } } as MotionValue<number>);
    }
    return opacities;
  }, [scrollY]);
  
  useEffect(() => {
    // Generate shapes only once on component mount
    const types: Array<'circle' | 'square' | 'triangle' | 'donut'> = ['circle', 'square', 'triangle', 'donut'];
    const colors = [
      'rgba(255, 77, 0, 0.3)', // primary
      'rgba(232, 96, 0, 0.25)', // primary-light
      'rgba(255, 77, 0, 0.1)', // primary lighter
      'rgba(255, 255, 255, 0.1)', // white
      'rgba(0, 0, 0, 0.05)', // black
    ];
    
    // Create fixed number of shapes
    const newShapes: Shape[] = [];
    for (let i = 0; i < MAX_SHAPES; i++) {
      newShapes.push({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: `${Math.random() * 200 + 50}px`,
        rotate: Math.random() * 360,
        opacity: Math.random() * 0.5 + 0.1,
        blur: `${Math.random() * 20 + 5}px`,
        type: types[Math.floor(Math.random() * types.length)],
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    setShapes(newShapes);
  }, []);
  
  // Update all motion values when scroll changes
  useEffect(() => {
    const unsubscribe = scrollY.on("change", () => {
      // Force a re-render when scroll changes
      setShapes(prev => [...prev]);
    });
    
    return () => unsubscribe();
  }, [scrollY]);
  
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>
      
      {/* Floating shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.type === 'circle' || shape.type === 'square' ? shape.color : 'transparent',
            borderRadius: shape.type === 'circle' || shape.type === 'donut' ? '50%' : shape.type === 'square' ? '15%' : '0',
            border: shape.type === 'donut' ? `5px solid ${shape.color}` : 'none',
            filter: `blur(${shape.blur})`,
            opacity: opacityValues[index]?.get() || shape.opacity,
            y: yMovements[index]?.get() || 0,
            x: xMovements[index]?.get() || 0,
            rotate: rotations[index]?.get() || 0,
            transformOrigin: 'center',
          }}
        >
          {shape.type === 'triangle' && (
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                borderLeft: `${parseInt(shape.size) / 2}px solid transparent`,
                borderRight: `${parseInt(shape.size) / 2}px solid transparent`,
                borderBottom: `${parseInt(shape.size)}px solid ${shape.color}`,
              }}
            />
          )}
        </motion.div>
      ))}
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-30 dark:from-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-30 dark:from-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-20 dark:from-black"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent opacity-20 dark:from-black"></div>
      
      {/* Noise texture overlay for subtle grain effect */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-noise"></div>
    </div>
  );
} 