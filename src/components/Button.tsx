'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { hapticFeedback } from '@/utils/haptics';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, href, variant = 'default', size = 'md', icon, children, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      hapticFeedback.selection();
      if (props.onClick) {
        props.onClick(e as React.MouseEvent<HTMLButtonElement>);
      }
    };

    const baseStyles = "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 overflow-hidden";
    
    const variants = {
      default: "bg-primary text-white hover:bg-primary-light before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500 before:ease-out",
      outline: "border-2 border-primary-light text-primary hover:bg-primary-light hover:text-white before:absolute before:inset-0 before:bg-primary-light before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform before:duration-300 before:ease-out",
      ghost: "text-primary hover:bg-primary/10 before:absolute before:inset-0 before:bg-primary/5 before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300 before:ease-out"
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-12 px-8 text-lg"
    };

    const content = (
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
    );

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes} onClick={handleClick}>
          {content}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;