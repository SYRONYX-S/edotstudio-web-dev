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
  const [isIOS, setIsIOS] = useState(false);
  const controls = useAnimationControls();
  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const lastDragTime = useRef(0);
  const animationRef = useRef<number | null>(null);

  // Create 3 copies instead of 5 for better performance on iOS devices
  const duplicatedServices = React.useMemo(() => [
    ...services,
    ...services,
    ...services
  ], [services]);

  const totalWidth = React.useMemo(() => 
    duplicatedServices.length * (CARD_WIDTH + GAP), 
    [duplicatedServices.length]
  );
  
  const singleSetWidth = services.length * (CARD_WIDTH + GAP);
  const loopPoint = -(singleSetWidth); // We'll reset when we reach the second set
  
  // Check device type and update dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (carouselRef.current) {
        setContainerWidth(carouselRef.current.offsetWidth);
        setIsMobile(window.innerWidth < 768);
      }
    };
    
    // Check for iOS
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream);
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Handle resetting position for seamless loop with iOS optimization
  const checkPosition = useCallback(() => {
    const currentX = x.get();
    
    // If we've gone too far to the left, jump back to the equivalent position in the middle set
    if (currentX < loopPoint) {
      const offset = currentX % singleSetWidth;
      // Use requestAnimationFrame for iOS to prevent jank during position reset
      if (isIOS) {
        requestAnimationFrame(() => {
          x.set(-singleSetWidth + offset + singleSetWidth);
        });
      } else {
        x.set(-singleSetWidth + offset + singleSetWidth);
      }
    }
    
    // If somehow we went too far right, jump to equivalent position
    if (currentX > 0) {
      const offset = currentX % singleSetWidth;
      if (isIOS) {
        requestAnimationFrame(() => {
          x.set(loopPoint + offset);
        });
      } else {
        x.set(loopPoint + offset);
      }
    }
  }, [x, loopPoint, singleSetWidth, isIOS]);

  // Setup optimized animation with manual animation completion handler
  const startAnimation = useCallback(() => {
    if (isDragging.current) return;
    
    checkPosition();
    
    // Cancel existing animation frame if it exists
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    
    // Slower animation for iOS for better smoothness
    const adjustedDuration = isIOS ? BASE_DURATION * 1.5 : BASE_DURATION;
    
    // Use the controls.start method properly by passing the animation target
    controls.start({
      x: x.get() - singleSetWidth,
      transition: {
        duration: adjustedDuration,
        ease: "linear",
        repeat: 0, // Don't use Framer Motion's repeat for iOS - we'll handle it manually
        repeatType: "loop"
      }
    }).then(() => {
      // This runs when the animation completes
      checkPosition();
      // Schedule next animation using requestAnimationFrame for better timing
      animationRef.current = requestAnimationFrame(() => {
        startAnimation();
      });
    });
  }, [x, singleSetWidth, controls, checkPosition, isIOS]);

  // Start the carousel animation with appropriate timing for iOS
  useEffect(() => {
    // Delay animation start slightly more on iOS
    const startDelay = isIOS ? 300 : 100;
    const timer = setTimeout(() => {
      startAnimation();
    }, startDelay);
    
    return () => {
      clearTimeout(timer);
      controls.stop();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [startAnimation, isIOS]);

  // Handle drag gestures with iOS optimizations
  const handleDragStart = () => {
    controls.stop();
    isDragging.current = true;
    lastDragTime.current = Date.now();
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Add a small delay before setting isDragging to false to prevent animation restart conflicts
    const dragReleaseTime = Date.now();
    
    // Prevent momentum stutter on iOS
    if (isIOS && dragReleaseTime - lastDragTime.current < 100) {
      setTimeout(() => {
        isDragging.current = false;
        checkPosition();
        startAnimation();
      }, 150);
      return;
    }
    
    isDragging.current = false;
    checkPosition();
    
    // Momentum effect based on drag velocity with iOS adjustments
    const velocity = info.velocity.x;
    if (Math.abs(velocity) > 100) {
      // Reduce momentum distance on iOS to prevent overscrolling issues
      const momentumFactor = isIOS ? 0.15 : 0.3;
      const momentumDistance = velocity * momentumFactor;
      x.set(x.get() + momentumDistance);
      checkPosition();
    }
    
    // Resume regular animation after a pause for iOS
    setTimeout(() => {
      if (!isDragging.current) {
        startAnimation();
      }
    }, isIOS ? 100 : 50);
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
          style={{ 
            x,
            // Add hardware acceleration properties
            willChange: "transform",
            transform: "translateZ(0)",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden"
          }} 
          drag="x"
          dragConstraints={{ 
            left: -totalWidth + containerWidth, 
            right: containerWidth
          }} 
          dragElastic={isIOS ? 0.03 : 0.05} // Reduce elasticity on iOS
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          dragTransition={{ 
            power: isIOS ? 0.12 : 0.15, // Reduce power on iOS for smoother feel
            timeConstant: isIOS ? 150 : 100,
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
                  userSelect: 'none',
                  // Add hardware acceleration for each card
                  transform: "translateZ(0)",
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden"
                }} 
                className={`
                  bg-white/60 dark:bg-black/60 backdrop-blur rounded-xl p-6 
                  transform transition-transform duration-300 hover:scale-[1.02]
                  border border-gray-200 dark:border-gray-800
                `}
                whileHover={{ scale: isMobile ? 1 : 1.02 }}
                whileTap={{ scale: isMobile ? 0.98 : 1 }}
                // Use optimized transforms
                transition={{
                  scale: {
                    type: "tween",
                    duration: isIOS ? 0.2 : 0.3,
                    ease: "easeOut"
                  }
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    {!service.inHouse && (
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 italic">Partner Service</span>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
} 