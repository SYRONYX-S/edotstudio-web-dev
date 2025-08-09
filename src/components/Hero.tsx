'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  }
};

const waveVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Decorative Wave */}
            <motion.svg
              viewBox="0 0 100 20"
              className="w-24 h-6 mx-auto mb-8 text-primary"
              variants={waveVariants}
              transition={{ duration: 1.5 }}
            >
              <motion.path
                d="M0 10 Q25 0, 50 10 T100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                variants={waveVariants}
                transition={{ duration: 1.5 }}
              />
            </motion.svg>

            <motion.h1
              variants={textVariants}
              transition={{ delay: 0, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Crafting Digital Excellence
            </motion.h1>

            <motion.p
              variants={textVariants}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            >
              We combine creativity and technology to deliver exceptional digital solutions that drive results for your business.
            </motion.p>

            <motion.div
              variants={textVariants}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button href="/contact" variant="default" size="lg">
                Get Started
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 