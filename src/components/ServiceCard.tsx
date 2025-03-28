'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color?: string;
  index?: number;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  color = '#C75000',
  index = 0,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "bento-item hover-tilt bg-white/95 dark:bg-dark-300 p-6 md:p-8 flex flex-col h-full",
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ borderTop: `3px solid ${color}` }}
    >
      <div className="flex items-center mb-4">
        <motion.div
          className="text-3xl mr-3"
          style={{ color }}
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.2 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {icon}
        </motion.div>
        <h3 className="font-technor text-xl text-secondary dark:text-white">{title}</h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow font-supreme">{description}</p>
      
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isHovered ? 5 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Link
          href={link}
          className="font-technor text-primary flex items-center"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard; 