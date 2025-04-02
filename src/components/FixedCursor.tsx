'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function FixedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  // Primary brand color
  const primaryColor = '#FF4D00';
  
  useEffect(() => {
    // First detect if this is a touch device
    const detectTouch = () => {
      const touch = navigator.maxTouchPoints > 0 || 
                   'ontouchstart' in window || 
                   (window as any).DocumentTouch && document instanceof (window as any).DocumentTouch;
      setIsTouchDevice(touch);
    };
    
    detectTouch();
    if (isTouchDevice) return;
    
    // Inject fixed cursor CSS
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      * {
        cursor: none !important;
      }
      a, button, [role="button"], input, select, textarea, 
      a:hover, button:hover {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleEl);
    
    // Cursor movement handler
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    
    // Handle hover effects
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button' || 
        target.tagName === 'INPUT' || 
        target.getAttribute('tabindex') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };
    
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button' || 
        target.tagName === 'INPUT' || 
        target.getAttribute('tabindex') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(false);
      }
    };
    
    // Handle click effects
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    
    // Visibility
    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);
    
    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    
    return () => {
      // Clean up
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.head.removeChild(styleEl);
    };
  }, [isTouchDevice, isDark]);
  
  // Don't render cursor on touch devices
  if (isTouchDevice) return null;
  
  // Cursor color based on theme and state
  const dotColor = isHovering ? primaryColor : isDark ? '#FFFFFF' : '#000000';
  const ringColor = isHovering ? primaryColor : isDark ? '#FFFFFF' : '#000000';
  
  // Calculate cursor sizes and positions
  const cursorSize = isHovering ? 12 : 10;
  const ringSize = isHovering ? 36 : 28;
  const cursorScale = isClicking ? 0.7 : 1;
  const ringScale = isClicking ? 0.8 : (isHovering ? 1.3 : 1);
  
  return (
    <>
      {/* Dot */}
      <div 
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: cursorSize,
          height: cursorSize,
          backgroundColor: dotColor,
          borderRadius: '50%',
          transform: `translate(-50%, -50%) scale(${cursorScale})`,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.15s ease, height 0.15s ease, transform 0.1s ease-out, opacity 0.15s ease-out',
          zIndex: 999999,
          boxShadow: '0 0 4px rgba(0,0,0,0.3)',
          pointerEvents: 'none',
        }} 
      />
      
      {/* Ring */}
      <div 
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: ringSize,
          height: ringSize,
          border: `1.5px solid ${ringColor}`,
          borderRadius: '50%',
          transform: `translate(-50%, -50%) scale(${ringScale})`,
          opacity: isVisible ? 0.6 : 0,
          transition: 'width 0.2s ease, height 0.2s ease, transform 0.15s ease, opacity 0.15s ease',
          zIndex: 999998,
          boxShadow: '0 0 4px rgba(0,0,0,0.2)',
          pointerEvents: 'none',
        }} 
      />
    </>
  );
} 