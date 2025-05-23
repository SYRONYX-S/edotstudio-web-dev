'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Fallback image for cases where the original image doesn't exist
const fallbackImage = '/images/hero/hero-graphic.svg';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  href: string;
  clientName: string;
  industry: string;
  servicesProvided: string[];
  description: string;
  index?: number;
  className?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  category,
  image,
  href,
  clientName,
  industry,
  servicesProvided,
  description,
  index = 0,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group relative overflow-hidden rounded-xl", className)}
    >
      <Link href={href}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="block text-white bg-[#FF4D00]/20 px-3 py-1 rounded-lg text-xs font-medium font-technor uppercase">{category}</span>
              <span className="block text-white/80 text-xs font-medium font-technor">{industry}</span>
            </div>
            
            <h3 className="text-white text-xl md:text-2xl font-technor mb-1">{title}</h3>
            <p className="text-white/80 text-sm mb-3 line-clamp-2">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {(servicesProvided || []).map((service, idx) => (
                <span key={idx} className="text-xs bg-white/10 text-white/90 px-2 py-1 rounded-md">{service}</span>
              ))}
            </div>
            
            <div className="flex items-center">
              <span className="text-white text-sm font-supreme inline-flex items-center">
                View Case Study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioItem; 