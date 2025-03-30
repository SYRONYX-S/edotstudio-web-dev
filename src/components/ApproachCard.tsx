'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ApproachCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export default function ApproachCard({ title, description, icon, index }: ApproachCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-900/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 p-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 dark:from-primary/0 dark:to-primary/10 transform group-hover:scale-105 transition-transform duration-500 ease-out" />
      
      <div className="relative p-6 h-full">
        {/* Numbered badge */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
          <span className="text-primary text-sm font-semibold">{index + 1}</span>
        </div>

        {/* Icon with gradient background */}
        <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Content */}
        <h3 className="font-pilcrow uppercase text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {description}
        </p>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/0 to-primary/5 dark:from-primary/0 dark:to-primary/10 rounded-tl-[100px] transform group-hover:scale-150 transition-transform duration-500 ease-out" />
      </div>
    </motion.div>
  );
} 