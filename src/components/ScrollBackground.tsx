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
  depth: number;
  type: 'circle' | 'square' | 'triangle' | 'donut' | 'cube' | 'pyramid';
  color: string;
  gradient?: boolean;
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
    
    // Create fixed number of shapes
    const newShapes: Shape[] = [];
    for (let i = 0; i < MAX_SHAPES; i++) {
      const sizeValue = Math.random() * 200 + 80; // Slightly larger shapes
      const shapeType = types[Math.floor(Math.random() * types.length)];
      
      // Determine if we should use a gradient
      const useGradient = Math.random() > 0.5;
      
      newShapes.push({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: `${sizeValue}px`,
        rotate: Math.random() * 360,
        opacity: Math.random() * 0.4 + 0.2, // Slightly higher base opacity
        blur: `${Math.random() * 15 + 5}px`,
        depth: Math.random() * 5 + 2, // For 3D effects
        type: shapeType,
        color: colors[Math.floor(Math.random() * colors.length)],
        gradient: useGradient
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
      {shapes.map((shape, index) => {
        // Determine if this is a 3D shape
        const is3DShape = shape.type === 'cube' || shape.type === 'pyramid';
        
        // For 3D shapes, we need to add perspective and transform-style properties
        const perspective = is3DShape ? '800px' : 'none';
        const transformStyle = is3DShape ? 'preserve-3d' : 'flat';
        
        // Create gradient background for shapes with gradient flag
        const gradientBg = shape.gradient 
          ? `linear-gradient(135deg, ${shape.color}, rgba(255, 77, 0, 0.3))` 
          : undefined;
        
        return (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{
              left: shape.x,
              top: shape.y,
              width: shape.size,
              height: shape.size,
              filter: `blur(${shape.blur})`,
              opacity: opacityValues[index]?.get() || shape.opacity,
              y: yMovements[index]?.get() || 0,
              x: xMovements[index]?.get() || 0,
              rotate: rotations[index]?.get() || 0,
              transformOrigin: 'center',
              perspective: perspective,
              transformStyle: transformStyle as any,
            }}
          >
            {/* Render appropriate shape based on type */}
            {shape.type === 'circle' && (
              <div 
                className="w-full h-full rounded-full"
                style={{
                  background: gradientBg || shape.color,
                  boxShadow: `0 ${shape.depth}px ${shape.depth * 2}px rgba(0,0,0,0.1)`,
                }}
              />
            )}
            
            {shape.type === 'square' && (
              <div 
                className="w-full h-full rounded-lg"
                style={{
                  background: gradientBg || shape.color,
                  boxShadow: `0 ${shape.depth}px ${shape.depth * 2}px rgba(0,0,0,0.1)`,
                }}
              />
            )}
            
            {shape.type === 'triangle' && (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'transparent',
                  borderLeft: `${parseInt(shape.size) / 2}px solid transparent`,
                  borderRight: `${parseInt(shape.size) / 2}px solid transparent`,
                  borderBottom: `${parseInt(shape.size)}px solid ${shape.color}`,
                  filter: `drop-shadow(0 ${shape.depth}px ${shape.depth}px rgba(0,0,0,0.15))`,
                }}
              />
            )}
            
            {shape.type === 'donut' && (
              <div 
                className="w-full h-full rounded-full" 
                style={{
                  border: `${parseInt(shape.size) / 12}px solid ${shape.color}`,
                  boxShadow: `0 ${shape.depth}px ${shape.depth * 2}px rgba(0,0,0,0.1)`,
                }}
              />
            )}
            
            {/* 3D Cube */}
            {shape.type === 'cube' && (
              <div className="relative w-full h-full transform-style-3d">
                {/* Front face */}
                <div 
                  className="absolute inset-0 bg-opacity-80" 
                  style={{
                    background: gradientBg || shape.color,
                    transform: `translateZ(${parseInt(shape.size) / 4}px)`,
                    boxShadow: `0 ${shape.depth}px ${shape.depth * 2}px rgba(0,0,0,0.1)`,
                  }}
                />
                {/* Back face */}
                <div 
                  className="absolute inset-0 bg-opacity-80" 
                  style={{
                    background: gradientBg || shape.color,
                    transform: `translateZ(-${parseInt(shape.size) / 4}px)`,
                  }}
                />
                {/* Left face */}
                <div 
                  className="absolute inset-0 bg-opacity-80" 
                  style={{
                    background: gradientBg || shape.color,
                    transform: `translateX(-${parseInt(shape.size) / 4}px) rotateY(90deg)`,
                  }}
                />
                {/* Right face */}
                <div 
                  className="absolute inset-0 bg-opacity-80" 
                  style={{
                    background: gradientBg || shape.color,
                    transform: `translateX(${parseInt(shape.size) / 4}px) rotateY(-90deg)`,
                  }}
                />
                {/* Top face */}
                <div 
                  className="absolute inset-0 bg-opacity-80" 
                  style={{
                    background: gradientBg || shape.color,
                    transform: `translateY(-${parseInt(shape.size) / 4}px) rotateX(90deg)`,
                  }}
                />
                {/* Bottom face */}
                <div 
                  className="absolute inset-0 bg-opacity-80" 
                  style={{
                    background: gradientBg || shape.color,
                    transform: `translateY(${parseInt(shape.size) / 4}px) rotateX(-90deg)`,
                  }}
                />
              </div>
            )}
            
            {/* 3D Pyramid */}
            {shape.type === 'pyramid' && (
              <div className="relative w-full h-full transform-style-3d">
                {/* Base */}
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-opacity-80" 
                  style={{
                    background: gradientBg || shape.color,
                    height: '4px',
                    width: '100%',
                    transform: `translateY(${parseInt(shape.size) / 2}px) rotateX(-90deg)`,
                  }}
                />
                {/* Front face */}
                <div 
                  className="absolute left-0 right-0 bottom-0 bg-opacity-80" 
                  style={{
                    background: gradientBg || shape.color,
                    height: `${parseInt(shape.size) / 2}px`,
                    width: '100%',
                    transform: 'rotateX(30deg)',
                    transformOrigin: 'bottom',
                  }}
                />
                {/* Left face */}
                <div 
                  className="absolute left-0 bottom-0 bg-opacity-80" 
                  style={{
                    background: gradientBg || shape.color,
                    height: `${parseInt(shape.size) / 2}px`,
                    width: `${parseInt(shape.size) / 2}px`,
                    transform: 'rotateY(-30deg) rotateX(30deg)',
                    transformOrigin: 'bottom right',
                  }}
                />
                {/* Right face */}
                <div 
                  className="absolute right-0 bottom-0 bg-opacity-80" 
                  style={{
                    background: gradientBg || shape.color,
                    height: `${parseInt(shape.size) / 2}px`,
                    width: `${parseInt(shape.size) / 2}px`,
                    transform: 'rotateY(30deg) rotateX(30deg)',
                    transformOrigin: 'bottom left',
                  }}
                />
              </div>
            )}
          </motion.div>
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