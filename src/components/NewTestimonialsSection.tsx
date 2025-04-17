'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard'; // Import the card component
import AnimatedTitle from './AnimatedTitle'; // Assuming AnimatedTitle exists

// Define the structure for testimonial data
interface TestimonialData {
  quote: string;
  author: string;
  title: string;
  avatarUrl?: string;
}

interface NewTestimonialsSectionProps {
  testimonials: TestimonialData[];
  title?: string;
  badge?: string;
}

export function NewTestimonialsSection({ 
  testimonials, 
  title = "What Our Clients Say", 
  badge = "Testimonials" 
}: NewTestimonialsSectionProps) {

  if (!testimonials || testimonials.length === 0) {
    return null; // Don't render if no testimonials
  }

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-background-muted/10 to-transparent dark:via-black/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {badge && (
            <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium mb-4 font-pilcrow uppercase">
              {badge}
            </div>
          )}
          {title && (
             <AnimatedTitle 
              title={title}
              className="text-3xl md:text-4xl lg:text-5xl mb-0 font-technor"
            />
          )}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              avatarUrl={testimonial.avatarUrl}
              index={index} // Pass index for staggered animation
            />
          ))}
        </div>
      </div>
    </section>
  );
} 