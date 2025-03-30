'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  title: string;
  className?: string;
  delay?: number;
  type?: 'staggered' | 'reveal';
  color?: 'primary' | 'secondary' | 'light';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  title,
  className = '',
  delay = 0.2,
  type = 'staggered',
  color = 'primary',
  as = 'h2'
}) => {
  // Define color classes
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    light: 'text-white',
  };

  // Split text by space for word animation
  const words = title.split(' ');

  // Animation variants for staggered words
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i }
    })
  };

  const staggerChild = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Animation variants for text reveal
  const revealContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay
      }
    }
  };

  const revealChild = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Render the appropriate HTML tag
  const renderTitle = () => {
    const baseClasses = `${colorClasses[color]} ${className}`;

    switch (as) {
      case 'h1':
        return <h1 className={baseClasses}>{renderContent()}</h1>;
      case 'h2':
        return <h2 className={baseClasses}>{renderContent()}</h2>;
      case 'h3':
        return <h3 className={baseClasses}>{renderContent()}</h3>;
      case 'h4':
        return <h4 className={baseClasses}>{renderContent()}</h4>;
      case 'h5':
        return <h5 className={baseClasses}>{renderContent()}</h5>;
      case 'h6':
        return <h6 className={baseClasses}>{renderContent()}</h6>;
      default:
        return <h2 className={baseClasses}>{renderContent()}</h2>;
    }
  };

  // Render animation based on type
  const renderContent = () => {
    if (type === 'staggered') {
      // Staggered word animation
      return (
        <motion.span
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block"
        >
          {words.map((word, index) => (
            <motion.span
              variants={staggerChild}
              key={index}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      );
    } else {
      // Text reveal animation
      return (
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <motion.div variants={revealChild}>
            {title}
          </motion.div>
        </motion.div>
      );
    }
  };

  return renderTitle();
};

export default AnimatedTitle; 