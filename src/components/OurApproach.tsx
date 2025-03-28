'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code, Rocket, Shield } from 'lucide-react';

const approaches = [
  {
    title: "Discovery & Strategy",
    description: "We dive deep into your business needs and craft a tailored strategy that aligns with your goals.",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    title: "Design & Development",
    description: "Our team creates intuitive designs and develops robust solutions using cutting-edge technologies.",
    icon: <Code className="w-6 h-6 text-primary" />,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Testing & Deployment",
    description: "Rigorous testing ensures quality while our deployment process guarantees smooth transitions.",
    icon: <Shield className="w-6 h-6 text-primary" />,
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Launch & Support",
    description: "We ensure successful launches and provide ongoing support to keep your solution running optimally.",
    icon: <Rocket className="w-6 h-6 text-primary" />,
    color: "from-purple-500/20 to-pink-500/20"
  }
];

export default function OurApproach() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display mb-4"
          >
            Our Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            We follow a systematic approach to deliver exceptional results for every project
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 p-1">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${approach.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`} />

                {/* Content Container */}
                <div className="relative p-6">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-primary text-sm font-semibold">{index + 1}</span>
                  </div>

                  {/* Icon Container */}
                  <div className="mb-6 w-14 h-14 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {approach.icon}
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-300">
                    {approach.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {approach.description}
                  </p>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/0 to-primary/5 dark:from-primary/0 dark:to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 