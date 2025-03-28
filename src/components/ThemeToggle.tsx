'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme based on system preference or saved preference
  useEffect(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Toggle dark class on html element
    document.documentElement.classList.toggle('dark', newDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`relative p-2 rounded-full ${className}`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ 
            rotate: darkMode ? 180 : 0,
            opacity: darkMode ? 0 : 1
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center text-yellow-500"
        >
          <RiSunLine className="w-5 h-5" />
        </motion.div>
        
        <motion.div
          initial={{ rotate: 180 }}
          animate={{ 
            rotate: darkMode ? 0 : -180,
            opacity: darkMode ? 1 : 0
          }}
          transition={{ duration: 0.5 }}
          className="text-blue-300"
        >
          <RiMoonLine className="w-5 h-5" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle; 