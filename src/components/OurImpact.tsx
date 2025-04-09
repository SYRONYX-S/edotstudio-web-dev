'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, TrendingUp, Briefcase } from 'lucide-react';

const impacts = [
  {
    title: "Years in Business",
    description: "Started our journey in February 2022, evolving and growing with every project.",
    icon: <Calendar className="w-8 h-8 text-primary" />,
    stat: "3+",
    statLabel: "Years Experience",
  },
  {
    title: "Team Strength",
    description: "A focused team of talented specialists dedicated to delivering top-tier solutions.",
    icon: <Users className="w-8 h-8 text-primary" />,
    stat: "3+",
    statLabel: "Team Members",
  },
  {
    title: "Client Retention",
    description: "Building lasting relationships through consistent delivery and client satisfaction.",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    stat: "90%",
    statLabel: "Retention Rate",
  },
  {
    title: "Project Success",
    description: "Successfully completed projects across various industries and technologies.",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    stat: "15+",
    statLabel: "Projects Delivered",
  }
];

export default function OurImpact() {
  return (
    <section className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_var(--tw-gradient-stops))] from-gray-900/[0.03] to-transparent [--tw-gradient-stops:theme(colors.gray.900/0.03)_1px,transparent_1px] [background-size:40px_40px] dark:from-white/[0.03] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display mb-4"
          >
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            What we've accomplished so far in our digital adventure
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative transition-all duration-500 ease-out"
            >
              {/* Card */}
              <div className="h-full relative rounded-2xl p-6 overflow-hidden transition-all duration-500 ease-out hover:shadow-xl group-hover:border-primary/30 glass-card">
                {/* Stat Display */}
                <div className="absolute top-6 right-6">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary mb-1 transition-all duration-500 ease-out group-hover:scale-110 group-hover:text-primary-light">
                      {impact.stat}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 ease-out group-hover:text-primary-light">
                      {impact.statLabel}
                    </div>
                  </div>
                </div>

                {/* Icon with Glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-xl transform transition-all duration-500 ease-out group-hover:scale-150" />
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center transform transition-all duration-500 ease-out group-hover:-rotate-12 group-hover:shadow-lg">
                    {impact.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 transition-all duration-500 ease-out group-hover:text-primary-light">
                  {impact.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-all duration-500 ease-out group-hover:text-gray-800 dark:group-hover:text-gray-200">
                  {impact.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24">
                  <div className="absolute bottom-0 right-0 w-full h-full bg-primary/5 dark:bg-primary/10 transform rotate-45 translate-x-1/2 translate-y-1/2 transition-all duration-500 ease-out group-hover:scale-150 group-hover:bg-primary/10" />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/0 to-primary/30 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 ease-out -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 