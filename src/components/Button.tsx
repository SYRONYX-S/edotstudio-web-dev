'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, href, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      default: "bg-primary hover:bg-primary-light dark:bg-primary dark:hover:bg-primary-light text-white",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white",
      ghost: "text-primary hover:bg-primary/10 dark:text-primary dark:hover:bg-primary/10"
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-12 px-8 text-lg"
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 