'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function CustomCursor() {
  // Using refs for better performance
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  
  // Theme detection
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  // Use motion values for smoother tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Apply springs with optimized settings for responsiveness
  const springConfig = { damping: 12, stiffness: 350, mass: 0.05 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  // More responsive ring with slightly different settings
  const ringSpringConfig = { damping: 10, stiffness: 250, mass: 0.08 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);
  
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  // Use RAF for smoother performance with direct DOM manipulation
  useEffect(() => {
    // Check if device is a touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
      );
    };
    
    checkTouchDevice();
    
    // If not a touch device, setup event listeners
    if (!isTouchDevice && cursorRef.current && cursorRingRef.current) {
      let rafId: number;
      
      // Handle mouse movement - using RAF for better performance
      const mouseMove = (e: MouseEvent) => {
        // Update motion values directly - this avoids React re-renders
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        
        if (!isVisible) {
          setIsVisible(true);
        }
      };
      
      // Handle mouse down for click effect
      const mouseDown = () => setIsClicking(true);
      const mouseUp = () => setIsClicking(false);
      
      // Handle link hovering
      const handleLinkHover = () => setIsHoveringLink(true);
      const handleLinkLeave = () => setIsHoveringLink(false);
      
      // Handle cursor visibility when leaving window
      const mouseLeave = () => setIsVisible(false);
      const mouseEnter = () => setIsVisible(true);
      
      // Add events
      document.addEventListener('mousemove', mouseMove, { passive: true });
      document.addEventListener('mousedown', mouseDown, { passive: true });
      document.addEventListener('mouseup', mouseUp, { passive: true });
      document.addEventListener('mouseleave', mouseLeave, { passive: true });
      document.addEventListener('mouseenter', mouseEnter, { passive: true });
      
      // Use event delegation instead of adding listeners to every element
      document.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLElement;
        if (
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.getAttribute('role') === 'button' || 
          target.tagName === 'INPUT' || 
          target.tagName === 'SELECT' || 
          target.tagName === 'TEXTAREA' || 
          target.hasAttribute('tabindex')
        ) {
          handleLinkHover();
        }
      }, { passive: true });
      
      document.addEventListener('mouseout', (e) => {
        const target = e.target as HTMLElement;
        if (
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.getAttribute('role') === 'button' || 
          target.tagName === 'INPUT' || 
          target.tagName === 'SELECT' || 
          target.tagName === 'TEXTAREA' || 
          target.hasAttribute('tabindex')
        ) {
          handleLinkLeave();
        }
      }, { passive: true });
      
      return () => {
        // Clean up events
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mousedown', mouseDown);
        document.removeEventListener('mouseup', mouseUp);
        document.removeEventListener('mouseleave', mouseLeave);
        document.removeEventListener('mouseenter', mouseEnter);
        document.removeEventListener('mouseover', handleLinkHover);
        document.removeEventListener('mouseout', handleLinkLeave);
      };
    }
  }, [isTouchDevice, mouseX, mouseY, isVisible]);
  
  // Don't render anything on touch devices
  if (isTouchDevice) return null;
  
  // Set the colors based on theme
  const dotColor = isHoveringLink 
    ? 'rgba(255, 77, 0, 0.9)' // Primary brand color when hovering
    : isDark 
      ? 'rgba(255, 255, 255, 0.85)' // White in dark mode
      : 'rgba(0, 0, 0, 0.85)'; // Black in light mode
      
  const ringColor = isHoveringLink
    ? 'rgba(255, 77, 0, 0.7)' // Primary brand color when hovering
    : isDark
      ? 'rgba(255, 255, 255, 0.5)' // White in dark mode
      : 'rgba(0, 0, 0, 0.5)'; // Black in light mode
  
  return (
    <>
      {/* Enhanced cursor styles to override browser defaults */}
      <style jsx global>{`
        /* Hide default cursor on all elements */
        html, body, * {
          cursor: none !important;
        }
        
        /* Force override any element-specific cursor styles */
        a, button, [role="button"], input, select, textarea, [tabindex], 
        a:hover, button:hover, [role="button"]:hover {
          cursor: none !important;
        }
        
        /* Override any system cursor styling */
        * {
          -webkit-cursor: none;
          -moz-cursor: none;
          -ms-cursor: none;
          cursor: none !important;
        }
      `}</style>
      
      {/* Main cursor dot - using hardware-accelerated transform with highest z-index */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHoveringLink ? 12 : 10,
          height: isHoveringLink ? 12 : 10,
          backgroundColor: dotColor,
          mixBlendMode: 'difference',
          borderRadius: '50%',
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : 1})`,
          transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease, transform 0.1s ease-out, opacity 0.15s ease-out',
          pointerEvents: 'none',
        }}
      />
      
      {/* Cursor ring/outline - using hardware-accelerated transform with very high z-index */}
      <motion.div
        ref={cursorRingRef}
        className="fixed top-0 left-0 z-[99998] pointer-events-none will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          width: isHoveringLink ? 36 : 28,
          height: isHoveringLink ? 36 : 28,
          border: `1px solid ${ringColor}`,
          borderRadius: '50%',
          mixBlendMode: 'difference',
          opacity: isVisible ? 0.5 : 0,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : (isHoveringLink ? 1.3 : 1)})`,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, transform 0.15s ease, opacity 0.15s ease',
          pointerEvents: 'none',
        }}
      />
    </>
  );
} 