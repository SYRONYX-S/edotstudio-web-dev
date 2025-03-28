'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
  animated?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  animated = true,
  icon,
  iconPosition = 'right',
}) => {
  // Base classes
  const baseClasses = 'font-technor rounded-full transition-all duration-300 inline-flex items-center justify-center';
  
  // Size classes
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-secondary-light',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary-subtle hover:border-primary-dark',
  };
  
  // Width classes
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Animation variants
  const buttonAnimation = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };
  
  // Combine all classes
  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    widthClass,
    className
  );
  
  // Icon placement
  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  // Determine if pulse glow should be added
  const pulseGlow = variant === 'primary' && animated ? 'animate-pulse-glow' : '';
  
  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={pulseGlow}>
        <motion.span
          className={combinedClasses}
          initial="rest"
          whileHover={animated ? "hover" : "rest"}
          whileTap={animated ? "tap" : "rest"}
          variants={buttonAnimation}
        >
          {renderContent()}
        </motion.span>
      </Link>
    );
  }
  
  // Otherwise render as button
  return (
    <motion.button
      className={cn(combinedClasses, pulseGlow)}
      onClick={onClick}
      initial="rest"
      whileHover={animated ? "hover" : "rest"}
      whileTap={animated ? "tap" : "rest"}
      variants={buttonAnimation}
    >
      {renderContent()}
    </motion.button>
  );
};

export default Button; 