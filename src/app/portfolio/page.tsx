'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import PortfolioItem from '@/components/PortfolioItem';
import Button from '@/components/Button';

// Data
import { portfolioProjects } from '@/data';

// Categories for filter
const categories = [
  'All',
  'Branding',
  'Web Development',
  'App Development',
  'Marketing & Design',
  'Graphic Design',
  'Software Development',
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === selectedCategory);
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-light dark:bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedTitle
              title="Our Portfolio"
              as="h1"
              type="staggered"
              color="primary"
              className="text-4xl md:text-6xl mb-6 font-technor"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 font-supreme"
            >
              Explore our selected projects that showcase our expertise and creativity in delivering exceptional digital solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-dark-200">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-colors font-supreme ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-800 dark:bg-dark-300 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-400'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
              >
                {filteredProjects.map((project, index) => (
                  <PortfolioItem
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    image={project.image}
                    href={project.href}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
            
            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="col-span-full text-center py-16 font-supreme"
              >
                <h3 className="text-xl font-technor text-gray-700 dark:text-gray-300 mb-4">No projects found in this category</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">We're currently updating our portfolio. Please check back later or explore other categories.</p>
                <Button 
                  onClick={() => setSelectedCategory('All')}
                  variant="outline"
                >
                  View All Projects
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedTitle 
            title="Ready to Create Your Success Story?"
            color="light"
            className="text-3xl md:text-4xl mb-6 font-technor"
          />
          <p className="text-white/90 max-w-2xl mx-auto mb-8 font-supreme">
            Let's discuss how we can help your business grow with our tailored digital solutions.
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-primary hover:bg-gray-100"
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </>
  );
} 