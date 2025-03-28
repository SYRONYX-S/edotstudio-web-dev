'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ImpactCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: string;
  index: number;
}

export default function ImpactCard({ title, description, icon, stats, index }: ImpactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:border-primary/50 dark:hover:border-primary/50 transition-colors duration-300"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,_var(--primary)_1px,_transparent_0)] bg-[length:20px_20px] transition-opacity duration-500 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.1]" />
      
      <div className="relative p-6">
        {/* Stats with highlight */}
        <div className="absolute top-4 right-4">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 blur-lg transform group-hover:scale-150 transition-transform duration-500" />
            <span className="relative text-2xl font-bold text-primary">
              {stats}
            </span>
          </div>
        </div>

        {/* Icon with special effects */}
        <div className="relative mb-6 w-16 h-16">
          <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-xl blur transform group-hover:scale-150 transition-transform duration-500" />
          <div className="relative w-full h-full rounded-xl bg-white/50 dark:bg-gray-900/50 flex items-center justify-center transform group-hover:translate-y-[-5px] transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Content with hover effects */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 relative z-10">
          {description}
        </p>

        {/* Animated border on hover */}
        <div className="absolute bottom-0 left-0 h-1 bg-primary/50 w-0 group-hover:w-full transition-all duration-500 ease-out" />
      </div>
    </motion.div>
  );
} 