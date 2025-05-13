'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { IconType } from 'react-icons';
import { motion, useMotionValue, PanInfo, animate, useTransform, useAnimationControls } from 'framer-motion';

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
const BASE_DURATION = 20; // Base animation duration in seconds (lower is faster)

export default function ServiceCarousel({ services }: ServiceCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimationControls();
  const x = useMotionValue(0);
  const isDragging = useRef(false);

  // Create 5 copies for a truly seamless experience
  const duplicatedServices = React.useMemo(() => [
    ...services,
    ...services,
    ...services,
    ...services,
    ...services
  ], [services]);

  const totalWidth = React.useMemo(() => 
    duplicatedServices.length * (CARD_WIDTH + GAP), 
    [duplicatedServices.length]
  );
  
  const singleSetWidth = services.length * (CARD_WIDTH + GAP);
  const loopPoint = -(2 * singleSetWidth); // We'll reset when we reach the third set
  
  // Check if viewport is updated
  useEffect(() => {
    const updateDimensions = () => {
      if (carouselRef.current) {
        setContainerWidth(carouselRef.current.offsetWidth);
        setIsMobile(window.innerWidth < 768);
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Handle resetting position for seamless loop
  const checkPosition = useCallback(() => {
    const currentX = x.get();
    
    // If we've gone too far to the left, jump back to the equivalent position in the middle set
    if (currentX < loopPoint) {
      const offset = currentX % singleSetWidth;
      x.set(-singleSetWidth + offset);
    }
    
    // If somehow we went too far right, jump to equivalent position
    if (currentX > 0) {
      const offset = currentX % singleSetWidth;
      x.set(loopPoint + offset);
    }
  }, [x, loopPoint, singleSetWidth]);

  // Setup animation
  const startAnimation = useCallback(() => {
    checkPosition();
    
    controls.start({
      x: x.get() - singleSetWidth,
      transition: {
        duration: BASE_DURATION,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    });
  }, [x, singleSetWidth, controls, checkPosition]);

  // Start the carousel animation
  useEffect(() => {
    startAnimation();
    return () => {
      controls.stop();
    };
  }, [startAnimation, controls]);

  // Handle drag gestures
  const handleDragStart = () => {
    controls.stop();
    isDragging.current = true;
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    isDragging.current = false;
    checkPosition();
    
    // Momentum effect based on drag velocity
    const velocity = info.velocity.x;
    if (Math.abs(velocity) > 100) {
      const momentumDistance = velocity * 0.3;
      x.set(x.get() + momentumDistance);
      checkPosition();
    }
    
    // Resume regular animation after a short pause to let the user see the result of their drag
    setTimeout(() => {
      if (!isDragging.current) {
        startAnimation();
      }
    }, 50);
  };

  return (
    <div className="w-full mt-10 overflow-hidden touch-pan-x" ref={carouselRef}>
      <div className="relative w-full overflow-hidden">
        {/* Fades for a smoother experience at the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent dark:from-[#0f0f0f] z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent dark:from-[#0f0f0f] dark:to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-4 py-4"
          animate={controls}
          style={{ x }} 
          drag="x"
          dragConstraints={{ 
            left: -totalWidth + containerWidth, 
            right: containerWidth
          }} 
          dragElastic={0.05}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          dragTransition={{ 
            power: 0.15, 
            timeConstant: 100,
            modifyTarget: (target) => Math.round(target / 10) * 10 // Snap to a grid for smoother feeling
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          {duplicatedServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={`${service.title}-card-${index}`}
                style={{ 
                  flex: `0 0 ${CARD_WIDTH}px`,
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none', 
                  userSelect: 'none'
                }} 
                className="bg-white/60 dark:bg-black/60 backdrop-blur rounded-xl p-6 transform transition-transform duration-300 hover:scale-[1.02]"
                whileHover={{ scale: isMobile ? 1 : 1.02 }}
                whileTap={{ scale: isMobile ? 0.98 : 1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
} 