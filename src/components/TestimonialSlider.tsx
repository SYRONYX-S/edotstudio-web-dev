'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowLeftSLine, RiArrowRightSLine, RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

interface Testimonial {
  id: number;
  author: string;
  position: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoplayInterval?: number;
  className?: string;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  autoplayInterval = 5000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isIOS, setIsIOS] = useState(false);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const transitionInProgressRef = useRef(false);

  // Detect iOS device
  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream);
  }, []);

  // Enhanced autoplay with better handling for iOS
  useEffect(() => {
    if (autoplayInterval > 0 && testimonials.length > 1) {
      // Clear any existing timeout when component updates
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
      
      // Set slightly longer interval on iOS for smoother transitions
      const effectiveInterval = isIOS ? autoplayInterval + 300 : autoplayInterval;
      
      // Only set auto-advance if not currently transitioning
      autoplayTimeoutRef.current = setTimeout(() => {
        if (!transitionInProgressRef.current) {
          handleNext();
        }
      }, effectiveInterval);
      
      return () => {
        if (autoplayTimeoutRef.current) {
          clearTimeout(autoplayTimeoutRef.current);
        }
      };
    }
  }, [currentIndex, testimonials.length, autoplayInterval, isIOS]);

  // Handle transition completion 
  const handleAnimationComplete = () => {
    transitionInProgressRef.current = false;
  };

  const handlePrev = () => {
    if (transitionInProgressRef.current) return;
    
    transitionInProgressRef.current = true;
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    // Clear any existing timeout to prevent overlapping transitions
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }
  };

  const handleNext = () => {
    if (transitionInProgressRef.current) return;
    
    transitionInProgressRef.current = true;
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    
    // Clear any existing timeout to prevent overlapping transitions
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }
  };

  // Animation variants optimized for iOS
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  if (!testimonials.length) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute top-10 left-7 -z-10 text-primary/10 text-9xl">
        <RiDoubleQuotesL />
      </div>
      
      <div className="flex flex-col items-center">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            onAnimationComplete={handleAnimationComplete}
            transition={{
              x: { 
                type: isIOS ? 'tween' : 'spring', 
                stiffness: isIOS ? undefined : 100, 
                damping: isIOS ? undefined : 20,
                duration: isIOS ? 0.4 : undefined
              },
              opacity: { duration: 0.3, ease: 'easeInOut' },
            }}
            className="w-full px-4 md:px-10 text-center"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden"
            }}
          >
            <div className="mb-6">
              <div 
                className="relative h-20 w-20 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20 transition-all duration-300 ease-out hover:ring-primary/50"
                style={{
                  transform: "translateZ(0)",
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden"
                }}
              >
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  fill
                  style={{ 
                    objectFit: 'cover',
                    transform: "translateZ(0)" 
                  }}
                />
              </div>
              <h4 className="font-technor text-lg text-gray-800 dark:text-white">{currentTestimonial.author}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-supreme">
                {currentTestimonial.position}, {currentTestimonial.company}
              </p>
            </div>
            
            <div className="mb-8 relative">
              <p className="text-lg italic font-supreme text-gray-700 dark:text-gray-300 leading-relaxed">
                {currentTestimonial.quote}
              </p>
              <div className="absolute bottom-[-30px] right-0 text-primary/10 text-5xl">
                <RiDoubleQuotesR />
              </div>
            </div>
            
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i < currentTestimonial.rating ? 'text-primary' : 'text-gray-300 dark:text-gray-600'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="bg-white dark:bg-dark-300 text-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white p-2 rounded-full shadow-md transition-all duration-300"
              aria-label="Previous testimonial"
              style={{
                transform: "translateZ(0)",
                WebkitBackfaceVisibility: "hidden"
              }}
              transition={{
                duration: isIOS ? 0.2 : 0.3,
                ease: "easeOut"
              }}
            >
              <RiArrowLeftSLine className="text-2xl" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="bg-white dark:bg-dark-300 text-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white p-2 rounded-full shadow-md transition-all duration-300"
              aria-label="Next testimonial"
              style={{
                transform: "translateZ(0)",
                WebkitBackfaceVisibility: "hidden"
              }}
              transition={{
                duration: isIOS ? 0.2 : 0.3,
                ease: "easeOut"
              }}
            >
              <RiArrowRightSLine className="text-2xl" />
            </motion.button>
          </div>
        )}
        
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  // Prevent rapid clicking
                  if (transitionInProgressRef.current) return;
                  
                  transitionInProgressRef.current = true;
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                  
                  // Clear any existing timeout
                  if (autoplayTimeoutRef.current) {
                    clearTimeout(autoplayTimeoutRef.current);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  i === currentIndex ? 'bg-primary w-4' : 'bg-gray-300 dark:bg-gray-600 w-2 hover:bg-primary/50 dark:hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialSlider; 