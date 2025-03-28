'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href = '#' }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-background/50 dark:bg-background-dark/50 backdrop-blur-sm rounded-2xl p-6 overflow-hidden"
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
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

      {/* Learn More Link */}
      <Link
        href={href || '#'}
        className="services-card-link-text inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300"
      >
        <span className="relative">Learn More</span>
        <motion.span
          initial={{ x: -5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <motion.span
            className="inline-block"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            →
          </motion.span>
        </motion.span>
      </Link>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
} 