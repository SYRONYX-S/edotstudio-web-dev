'use client';

import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (autoplayInterval > 0 && testimonials.length > 1) {
      const interval = setInterval(() => {
        handleNext();
      }, autoplayInterval);
      
      return () => clearInterval(interval);
    }
  }, [currentIndex, testimonials.length, autoplayInterval]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Animation variants
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
            transition={{
              x: { type: 'spring', stiffness: 100, damping: 20 },
              opacity: { duration: 0.3, ease: 'easeInOut' },
            }}
            className="w-full px-4 md:px-10 text-center"
          >
            <div className="mb-6">
              <div className="relative h-20 w-20 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  fill
                  style={{ objectFit: 'cover' }}
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
              className="bg-white dark:bg-dark-300 text-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white p-2 rounded-full shadow-md transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <RiArrowLeftSLine className="text-2xl" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="bg-white dark:bg-dark-300 text-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white p-2 rounded-full shadow-md transition-colors duration-300"
              aria-label="Next testimonial"
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
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-primary w-4' : 'bg-gray-300 dark:bg-gray-600'
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