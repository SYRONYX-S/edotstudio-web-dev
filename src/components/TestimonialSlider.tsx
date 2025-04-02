'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Testimonial } from '@/types';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoplayInterval?: number;
}

export default function TestimonialSlider({ 
  testimonials, 
  autoplayInterval = 5000 
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    if (autoplayInterval > 0 && testimonials.length > 1) {
      const interval = setInterval(handleNext, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [handleNext, autoplayInterval, testimonials.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[300px] md:h-[250px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full"
          >
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              {currentTestimonial.avatar && (
                <div className="relative h-20 w-20 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20 transition-all duration-300 ease-out hover:ring-primary/50">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                  />
                </div>
              )}
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
                "{currentTestimonial.text}"
              </p>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100">
                  {currentTestimonial.author}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {currentTestimonial.title}
                  {currentTestimonial.position && currentTestimonial.company && (
                    <> - {currentTestimonial.position}, {currentTestimonial.company}</>
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {testimonials.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
} 