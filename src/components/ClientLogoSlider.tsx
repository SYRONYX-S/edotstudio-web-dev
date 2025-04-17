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

  // Simplified animation start/restart
  const startAnimation = useCallback(() => {
    if (isAnimating.current) controls.current?.stop(); // Stop if already animating
    
    const currentX = baseX.get();
    // Calculate remaining distance in the current loop segment
    const distanceToGo = loopSegmentWidth - (Math.abs(currentX) % loopSegmentWidth);
    const duration = distanceToGo / baseVelocity;

    isAnimating.current = true;
    controls.current = animate(baseX, currentX - distanceToGo, { // Animate only to the end of the current segment
      ease: "linear",
      duration: duration,
      onComplete: () => {
        // Manually wrap position when animation completes one segment
        baseX.set(currentX - distanceToGo + loopSegmentWidth);
        isAnimating.current = false;
        startAnimation(); // Immediately start the next segment's animation
      }
    });
  }, [baseX, loopSegmentWidth, baseVelocity]);

  // Monitor position for manual wrap-around (backup/alternative loop mechanism)
  // This helps if animation completes slightly off or during drag interactions
  useMotionValueEvent(baseX, "change", (latestX) => {
    if (latestX <= -loopSegmentWidth) {
        // When scrolled past one full segment, instantly jump back
        baseX.set(latestX + loopSegmentWidth);
    }
  });

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(startAnimation, 100);
    return () => {
        clearTimeout(timer);
        controls.current?.stop();
        isAnimating.current = false;
    };
  }, [startAnimation]);

  const handleDragStart = () => {
    isAnimating.current = false; // Mark as not animating during drag
    controls.current?.stop();
    dragStartX.current = baseX.get();
    if(containerRef.current) {
      containerRef.current.style.cursor = 'grabbing'; // Ensure grabbing cursor on drag
    }
  };

  const handleDragEnd = () => {
    if(containerRef.current) {
      containerRef.current.style.cursor = 'grab'; // Restore grab cursor
    }
    // Restart animation logic ensures it picks up correctly
    startAnimation();
  };

  if (!clients || clients.length === 0) {
    return null; // Don't render if no clients
  }

  return (
    <div className="w-full overflow-hidden client-logo-slider-wrapper">
      <motion.div
        ref={containerRef} // Add ref to the motion div
        className={cn("flex items-center w-max cursor-grab", GAP_CLASS)} // Added cursor-grab here
        style={{ x: baseX }}
        drag="x"
        dragConstraints={{ left: -loopSegmentWidth * 2, right: 0 }}
        dragElastic={0.05}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
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
              "bg-slate-100/80 hover:bg-slate-200/90", // Light theme bg
              "dark:bg-slate-800/60 dark:hover:bg-slate-700/70", // Dark theme bg
              "pointer-events-auto" // Ensure links are clickable
            )}
            draggable="false" // Prevent default image drag
            onClick={(e) => { 
                // This check should now work correctly
                if (Math.abs(baseX.get() - dragStartX.current) > 5) {
                     e.preventDefault();
                }
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
                    maxHeight: '40px' // Explicit max height style
                  }} 
                  className={cn(
                    LOGO_HEIGHT_CLASS, // Apply height class for layout spacing
                    "opacity-70 group-hover:opacity-100 transition-opacity duration-300",
                    "grayscale group-hover:grayscale-0", // Optional: Start grayscale, color on hover
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