'use client';

import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, PanInfo, animate, AnimationPlaybackControls, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming you have a utility for classnames

// Types
interface Client {
  name: string;
  logo: string;
  url: string;
}
interface ClientLogoSliderProps {
  clients: Client[];
  baseVelocity?: number; // Controls speed, positive value scrolls left
}

// Constants
const LOGO_HEIGHT_CLASS = 'h-10'; // Tailwind class for logo image height (e.g., h-10 = 2.5rem)
const CONTAINER_PADDING_CLASS = 'p-5'; // Padding around the logo inside its container
const GAP_CLASS = 'gap-10'; // Tailwind gap class (e.g., gap-10 = 2.5rem)
const GAP_VALUE = 40; // Numeric gap value in pixels (must match GAP_CLASS)

export function ClientLogoSlider({ clients, baseVelocity = 10 }: ClientLogoSliderProps) {
  const [isMounted, setIsMounted] = useState(false);
  const baseX = useMotionValue(0);
  const controls = useRef<AnimationPlaybackControls | null>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the motion div
  const dragStartX = useRef(0); // Re-added this ref
  const isAnimating = useRef(false); // Track animation state
  const isDragging = useRef(false); // Track if currently dragging
  const isIOS = useRef(false); // Track iOS detection
  
  // Check if we're on iOS
  useEffect(() => {
    isIOS.current = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  }, []);

  const duplicatedClients = useMemo(() => {
    if (!clients || clients.length === 0) return [];
    // Ensure enough clients for a seamless loop, duplicate as needed
    const needed = Math.max(10, clients.length); // Aim for at least 10 items visible for smoother loop
    let extended: Client[] = [];
    while (extended.length < needed * 3) {
      extended = extended.concat(clients);
    }
    return extended;
  }, [clients]);

  const approxItemWidth = 150 + GAP_VALUE; // Estimate width (adjust if logos vary greatly)
  const totalWidth = useMemo(() => duplicatedClients.length * approxItemWidth, [duplicatedClients, approxItemWidth]);
  const loopSegmentWidth = totalWidth / 3; // Width of one original client set repeated 3 times

  // Optimized animation start/restart
  const startAnimation = useCallback(() => {
    // Don't start animation if dragging
    if (isDragging.current) return;
    
    if (isAnimating.current) controls.current?.stop(); // Stop if already animating
    
    const currentX = baseX.get();
    // Calculate remaining distance in the current loop segment
    const distanceToGo = loopSegmentWidth - (Math.abs(currentX) % loopSegmentWidth);
    const duration = distanceToGo / baseVelocity;

    isAnimating.current = true;
    
    // Special handling for iOS to prevent jank during animation
    if (isIOS.current) {
      // Use a more conservative animation on iOS
      controls.current = animate(baseX, currentX - distanceToGo, {
        ease: "linear",
        duration: duration,
        onComplete: () => {
          // Immediate position reset instead of animation chain on iOS
          baseX.set(currentX - distanceToGo + loopSegmentWidth);
          isAnimating.current = false;
          // Use requestAnimationFrame for better timing on iOS
          requestAnimationFrame(() => startAnimation());
        }
      });
    } else {
      // Regular animation for other platforms
      controls.current = animate(baseX, currentX - distanceToGo, {
        ease: "linear",
        duration: duration,
        onComplete: () => {
          baseX.set(currentX - distanceToGo + loopSegmentWidth);
          isAnimating.current = false;
          startAnimation();
        }
      });
    }
  }, [baseX, loopSegmentWidth, baseVelocity]);

  // Improved position monitoring with throttling to prevent excessive updates on iOS
  useMotionValueEvent(baseX, "change", (latestX) => {
    if (latestX <= -loopSegmentWidth) {
      // When scrolled past one full segment, instantly jump back
      // Schedule this reset in the next frame to avoid jank on iOS
      requestAnimationFrame(() => {
        baseX.set(latestX + loopSegmentWidth);
      });
    }
  });

  useEffect(() => {
    setIsMounted(true);
    // Wait slightly longer before starting animation on iOS
    const timer = setTimeout(startAnimation, isIOS.current ? 300 : 100);
    return () => {
      clearTimeout(timer);
      controls.current?.stop();
      isAnimating.current = false;
    };
  }, [startAnimation]);

  // Optimized drag handlers with improved touch handling for iOS
  const handleDragStart = () => {
    isDragging.current = true;
    isAnimating.current = false;
    controls.current?.stop();
    dragStartX.current = baseX.get();
    
    if(containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if(containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
    
    // Add a small delay before restarting animation to prevent iOS glitches
    setTimeout(() => {
      isDragging.current = false;
      startAnimation();
    }, isIOS.current ? 100 : 0);
  };

  if (!clients || clients.length === 0) {
    return null; // Don't render if no clients
  }

  return (
    <div className="w-full overflow-hidden client-logo-slider-wrapper">
      <motion.div
        ref={containerRef} // Add ref to the motion div
        className={cn("flex items-center w-max cursor-grab", GAP_CLASS)} // Added cursor-grab here
        style={{ 
          x: baseX,
          // Add hardware acceleration hints for iOS
          willChange: "transform",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden"
        }}
        drag="x"
        dragConstraints={{ left: -loopSegmentWidth * 2, right: 0 }}
        dragElastic={0.05}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        // Optimize drag for touch devices
        dragTransition={{
          power: 0.15,
          timeConstant: 200,
          modifyTarget: (target) => Math.round(target / 5) * 5 // Snap to a grid for smoother feeling
        }}
        whileDrag={{ scale: 0.98 }}
      >
        {duplicatedClients.map((client, index) => (
          <a 
            key={`${client.name}-${index}`}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${client.name}`}
            className={cn(
              "block flex-shrink-0 group rounded-xl transition-all duration-300",
              "bg-black/10 hover:bg-white", // Light theme bg
              "dark:bg-white/60 dark:hover:bg-white/90", // Dark theme bg
              "border border-black/0 hover:border-primary-light/30 dark:border-primary-light/0 dark:hover:border-primary-light/100",
              "pointer-events-auto" // Ensure links are clickable
            )}
            draggable="false" // Prevent default image drag
            onClick={(e) => { 
                // Improved drag detection
                if (Math.abs(baseX.get() - dragStartX.current) > 5 || isDragging.current) {
                     e.preventDefault();
                }
            }}
            style={{
              // Hardware acceleration for each item
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden"
            }}
          >
            <div 
              className={cn(
                "relative flex items-center justify-center overflow-hidden", 
                CONTAINER_PADDING_CLASS
                // Height is determined by image max-height + padding
              )}
              style={{ minWidth: '120px'}} // Ensure a minimum tap target size
            >
              {isMounted ? (
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  height={40} // Max height in pixels (matches LOGO_HEIGHT_CLASS typically)
                  width={150} // Provide a generous width, object-fit will handle it
                  style={{ 
                    objectFit: 'contain', 
                    width: 'auto', 
                    height: 'auto', 
                    maxHeight: '40px', // Explicit max height style
                    willChange: "transform" // Add hardware acceleration hint
                  }} 
                  className={cn(
                    LOGO_HEIGHT_CLASS, // Apply height class for layout spacing
                    "pointer-events-none" // Prevent default image drag
                  )}
                  unoptimized // Often needed for SVGs or external URLs
                  draggable={false} // Prevent default image drag
                />
              ) : (
                <div style={{ height: '40px', width: '120px' }} aria-hidden="true"></div> // Placeholder
              )}
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  );
} 