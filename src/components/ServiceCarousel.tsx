'use client';

import React, { useRef, useState, useCallback } from 'react';
import { IconType } from 'react-icons';
import { motion, useMotionValue, PanInfo, animate, AnimationPlaybackControls } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: IconType;
  inHouse: boolean;
}

interface ServiceCarouselProps {
  services: Service[];
}

const CARD_WIDTH = 350; // Max width of a card
const GAP = 16; // gap-4 = 1rem = 16px
const DRAG_BUFFER = 30; // Threshold before drag is considered significant
const BASE_DURATION = 25; // Base animation duration in seconds (lower is faster)

export default function ServiceCarousel({ services }: ServiceCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useRef<AnimationPlaybackControls | null>(null);
  const dragStartX = useRef(0);
  const dragStartTime = useRef(0);

  // Duplicate services for the seamless loop effect
  const duplicatedServices = React.useMemo(() => [...services, ...services, ...services], [services]);
  const totalWidth = React.useMemo(() => duplicatedServices.length * (CARD_WIDTH + GAP), [duplicatedServices.length]);
  const loopSegmentWidth = totalWidth / 3;

  const startAnimation = useCallback(() => {
    controls.current?.stop(); // Stop any existing animation

    // Always use the base duration for consistent speed
    controls.current = animate(x, [x.get(), x.get() - totalWidth], {
      ease: "linear",
      duration: BASE_DURATION * (totalWidth / loopSegmentWidth), // Scale duration for the full track
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0
    });
    // Correct initial wrap-around if needed (less critical with direct animate)
    if (x.get() <= -loopSegmentWidth) {
      x.set(x.get() % loopSegmentWidth);
    }

  }, [x, totalWidth, loopSegmentWidth]);

  React.useEffect(() => {
    startAnimation();
    return () => controls.current?.stop();
  }, [startAnimation]); // Rerun if services change -> duplicatedServices -> totalWidth change

  const handleDragStart = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    controls.current?.stop();
    dragStartX.current = x.get();
    dragStartTime.current = performance.now();
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragEndTime = performance.now();
    const dragDuration = dragEndTime - dragStartTime.current;
    const dragDistance = x.get() - dragStartX.current;

    // Restart animation from current position with consistent speed
    startAnimation(); 
  };

  return (
    <div className="w-full mt-10 overflow-hidden cursor-grab" ref={carouselRef}>
      <div className="relative w-full overflow-hidden">
        {/* Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent dark:from-[#0f0f0f] z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent dark:from-[#0f0f0f] dark:to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-4 py-4"
          style={{ x }} // Apply motion value directly
          drag="x"
          dragConstraints={{ 
            left: -loopSegmentWidth * 2, // Allow dragging through two segments
            right: 0 
          }} 
          dragElastic={0.05} // Little resistance at the edges
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: "grabbing" }}
        >
          {duplicatedServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={`${service.title}-card-${index}`}
                style={{ flex: `0 0 ${CARD_WIDTH}px` }} // Use fixed width
                className="bg-white/60 dark:bg-black/60 backdrop-blur rounded-xl p-6 transform transition-transform duration-300 hover:scale-[1.02] select-none"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
} 