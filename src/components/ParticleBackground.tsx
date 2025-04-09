'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useScroll, useSpring, MotionValue, useTransform } from "framer-motion";

// --- Grid System Constants ---
const GRID_ROWS = 100; // Finer grid
const GRID_COLS = 120; // Finer grid
const Z_DEPTH = 45;   // Slightly deeper
const Z_SPEED = 0.04;
const MOUSE_WARP_STRENGTH = 20; // Slightly less warp
const MOUSE_WARP_RADIUS = 350; 
const SHIMMER_SPEED = 1.0;
const SCROLL_PARALLAX_FACTOR = 0.0001; 

// Function to project 3D point to 2D screen space
const project = (x: number, y: number, z: number, width: number, height: number) => {
  const perspective = width * 0.9; // Adjust focal length if needed
  const vanishingPointX = width / 2;
  const vanishingPointY = height * 0.45; // Horizon line slightly higher
  
  if (z <= 0) z = 0.01; // Prevent division by zero or negative z
  const scale = perspective / (perspective + z);
  const screenX = vanishingPointX + (x - vanishingPointX) * scale;
  const screenY = vanishingPointY + (y - vanishingPointY) * scale;
  return { x: screenX, y: screenY, scale };
};

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const { scrollY } = useScroll();
  // Smoother spring for scroll
  const smoothScrollY = useSpring(scrollY, { damping: 90, stiffness: 300 }); 
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  // Smooth mouse position
  const springMouseX = useSpring(typeof window !== 'undefined' ? window.innerWidth / 2 : 0, { damping: 25, stiffness: 180 });
  const springMouseY = useSpring(typeof window !== 'undefined' ? window.innerHeight / 2 : 0, { damping: 25, stiffness: 180 });
  const animationFrameId = useRef<number>();
  const time = useRef(0);

  // Theme colors - Boosted light mode alpha
  const gridColorLight = 'rgba(255, 77, 0, 0.18)'; // More visible light mode grid
  const gridColorDark = 'rgba(255, 115, 64, 0.15)'; 

  // Setup Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });
      if (canvas) {
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Mouse Tracking (updates springs)
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      springMouseX.set(event.clientX);
      springMouseY.set(event.clientY);
    };
    const handleMouseLeave = () => {
      // Smoothly return to center
      springMouseX.set(dimensions.width / 2);
      springMouseY.set(dimensions.height / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dimensions.width, dimensions.height, springMouseX, springMouseY]);

  // Animation Loop - Major Refinements
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx || dimensions.width === 0 || dimensions.height === 0) return;

    let currentScroll = smoothScrollY.get();
    smoothScrollY.on("change", (latest) => { currentScroll = latest; });

    const animate = (timestamp: number) => {
      time.current = timestamp * 0.00015; // Adjust time progression if needed
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      const currentGridColor = resolvedTheme === 'dark' ? gridColorDark : gridColorLight;
      ctx.strokeStyle = currentGridColor;
      ctx.lineWidth = 0.4; // Even finer lines
      
      const mouseX = springMouseX.get();
      const mouseY = springMouseY.get();
      // Continuous parallax based on absolute scroll - pushes grid away
      const scrollZOffset = currentScroll * SCROLL_PARALLAX_FACTOR * Z_DEPTH;

      // Calculate grid points in 3D space
      const gridPoints: ({ x: number, y: number, z: number })[][] = [];
      for (let row = 0; row <= GRID_ROWS; row++) {
        gridPoints[row] = [];
        const worldY = (row / GRID_ROWS - 0.5) * dimensions.height * 3; // Adjust Y spread
        const baseZ = (row / GRID_ROWS) * Z_DEPTH + (time.current * Z_SPEED * Z_DEPTH) % Z_DEPTH; // Base Z + auto movement
        
        for (let col = 0; col <= GRID_COLS; col++) {
          const worldX = (col / GRID_COLS - 0.5) * dimensions.width * 3; // Adjust X spread
          
          let z = baseZ + scrollZOffset; // Combine auto movement and scroll parallax

          // --- Mouse Warp Calculation ---
          // Project world X/Y roughly to screen space for distance check
          const approxScreen = project(worldX, worldY, Math.max(0.1, z), dimensions.width, dimensions.height);
          const dxMouse = approxScreen.x - mouseX;
          const dyMouse = approxScreen.y - mouseY;
          const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;
          const warpFactor = MOUSE_WARP_STRENGTH * (1 - Math.min(1, distMouseSq / (MOUSE_WARP_RADIUS * MOUSE_WARP_RADIUS))); // Inverse square falloff
          
          // Apply warp radially from mouse
          const warpX = (dxMouse / Math.sqrt(distMouseSq) || 0) * warpFactor;
          const warpY = (dyMouse / Math.sqrt(distMouseSq) || 0) * warpFactor;
          
          // Store 3D point with warp applied (warp affects X/Y)
          gridPoints[row][col] = { x: worldX + warpX, y: worldY + warpY, z: z };
        }
      }

      // Project and draw grid lines
      for (let row = 0; row < GRID_ROWS; row++) {
        for (let col = 0; col < GRID_COLS; col++) {
          const p3D_1 = gridPoints[row][col];
          const p3D_2 = gridPoints[row][col + 1];
          const p3D_3 = gridPoints[row + 1][col + 1];
          const p3D_4 = gridPoints[row + 1][col];

          // Project 3D points to 2D
          const p1 = project(p3D_1.x, p3D_1.y, p3D_1.z, dimensions.width, dimensions.height);
          const p2 = project(p3D_2.x, p3D_2.y, p3D_2.z, dimensions.width, dimensions.height);
          const p3 = project(p3D_3.x, p3D_3.y, p3D_3.z, dimensions.width, dimensions.height);
          const p4 = project(p3D_4.x, p3D_4.y, p3D_4.z, dimensions.width, dimensions.height);

          // Shimmer effect
          const shimmer = (Math.sin(row * 0.4 + col * 0.2 + time.current * SHIMMER_SPEED) + 1) / 2;
          ctx.globalAlpha = shimmer * 0.5 + 0.25; // Adjusted alpha range 0.25 to 0.75

          // Draw cell lines if points are valid (on screen)
          if (p1.scale > 0 && p2.scale > 0) { // Horizontal top
            ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          }
          if (p2.scale > 0 && p3.scale > 0) { // Vertical right
            ctx.beginPath(); ctx.moveTo(p2.x, p2.y); ctx.lineTo(p3.x, p3.y); ctx.stroke();
          }
          // Draw other sides for completeness if points visible
          if (p3.scale > 0 && p4.scale > 0) { // Horizontal bottom
             ctx.beginPath(); ctx.moveTo(p4.x, p4.y); ctx.lineTo(p3.x, p3.y); ctx.stroke();
           }
           if (p4.scale > 0 && p1.scale > 0) { // Vertical left
             ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p4.x, p4.y); ctx.stroke();
           }
        }
      }
      ctx.globalAlpha = 1;

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      smoothScrollY.clearListeners();
    };
  }, [dimensions.width, dimensions.height, resolvedTheme, smoothScrollY, springMouseX, springMouseY]); 

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none bg-transparent"
    />
  );
}