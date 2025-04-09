'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from '@/components/AnimatedTitle';

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
  className?: string;
}

export default function PageHero({ badge, title, description, className = '' }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 z-10">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-center ${className}`}
        >
          <div className="inline-block bg-[#FF4D00] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 md:mb-6 shadow-md">
            {badge.toUpperCase()}
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-5 md:mb-6 font-technor text-black dark:text-white leading-tight tracking-tight">
            {title}
          </h1>
          
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-base md:text-lg mb-8 md:mb-12 font-pilcrow leading-relaxed">
            {description}
          </p>
          
          <div className="relative w-20 h-2 bg-primary-light rounded-full mx-auto mt-1 mb-4 block md:hidden">
            <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-primary/30 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute top-20 -right-16 w-32 h-32 rounded-full bg-primary-light/5 filter blur-2xl"></div>
      <div className="absolute bottom-10 -left-20 w-40 h-40 rounded-full bg-primary-light/5 filter blur-3xl"></div>
    </section>
  );
} 