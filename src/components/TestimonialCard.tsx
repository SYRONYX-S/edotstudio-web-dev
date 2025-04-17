'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatarUrl?: string;
  index: number; // For staggered animation delay
}

export function TestimonialCard({ quote, author, title, avatarUrl, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className={cn(
        "glass-card p-6 md:p-8 flex flex-col h-full", // Use flex-col and h-full
        "border border-transparent hover:border-primary/30" // Subtle hover border
      )}
    >
      <FaQuoteLeft className="text-primary/50 dark:text-primary/40 w-8 h-8 mb-4 flex-shrink-0" />
      <p className="flex-grow text-gray-700 dark:text-gray-300 italic mb-6 text-base md:text-lg">
        "{quote}"
      </p>
      <div className="flex items-center mt-auto pt-4 border-t border-white/10 dark:border-white/5"> 
        {avatarUrl && (
          <Image 
            src={avatarUrl}
            alt={author}
            width={48}
            height={48}
            className="rounded-full mr-4 object-cover w-12 h-12"
          />
        )}
        <div className={!avatarUrl ? 'pl-0' : ''}> 
          <p className="font-semibold font-technor text-gray-800 dark:text-white">{author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-pilcrow">{title}</p>
        </div>
      </div>
    </motion.div>
  );
} 