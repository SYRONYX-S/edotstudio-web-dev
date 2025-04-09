'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  href = '#',
  className
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'group relative rounded-2xl p-6 overflow-hidden glass-card',
        className
      )}
    >
      {/* Border Gradient */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-100" />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="serivces-card-icon relative w-12 h-12 mb-3 flex items-center justify-center"
      >
        <div className="w-full h-full">
          {icon}
        </div>
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3 font-pilcrow uppercase">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

      {/* Learn More Link */}
      <div className="flex items-center text-gray dark:text-gray-100 font-pilcrow group-hover:text-primary transition-colors duration-300">
        <span className="mr-2 group-hover:text-primary transition-colors duration-300">Learn more</span>
        <ArrowRight 
          className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default ServiceCard; 