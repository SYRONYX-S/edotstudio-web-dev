'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiRocketLine, RiCodeSLine, RiAiLine, RiTeamLine } from 'react-icons/ri';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function About() {
  const achievements = [
    { number: '14+', label: 'Projects Completed' },
    { number: '8+', label: 'Active Projects' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  const technologies = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    {
      category: 'Tools & AI',
      items: ['GitHub Copilot', 'ChatGPT', 'Midjourney', 'Figma', 'AWS']
    }
  ];

  return (
    <main className="min-h-screen relative dark:bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block glass dark:glass-dark text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              ABOUT US
            </div>
            <AnimatedTitle
              title="Our Journey of Innovation"
              className="text-4xl md:text-7xl mb-6 font-roundo text-foreground dark:text-white"
            />
            <p className="text-muted-foreground dark:text-white/70 max-w-2xl mx-auto text-lg mb-12">
              From web development specialists to a full-service digital studio, discover how we're shaping the future of digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <ParallaxSection className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass dark:glass-dark rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-roundo text-primary">Our Story</h2>
                <div className="space-y-4 text-gray-800 dark:text-gray-200">
                  <p>
                    Founded in 2022 as SYRONYX Web and App Solutions, we began our journey with a focused mission: to deliver exceptional web development solutions. In our initial phase, we successfully completed 14 projects, working with notable clients and establishing our reputation for quality and reliability.
                  </p>
                  <p>
                    In 2025, we evolved into EdotStudio, expanding our service offerings to meet the growing demands of the digital landscape. This transformation marked a new chapter in our journey, enabling us to provide comprehensive digital solutions while maintaining our commitment to innovation and excellence.
                  </p>
                </div>
              </motion.div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/hero/about-hero.jpg"
                  alt="EdotStudio Journey"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-dark-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-roundo text-primary mb-2">{achievement.number}</h3>
                <p className="text-gray-600 dark:text-gray-400">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-100 dark:bg-dark-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block glass dark:glass-dark text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              OUR TECH STACK
            </div>
            <AnimatedTitle
              title="Powered by Innovation"
              className="text-3xl md:text-4xl mb-6 font-roundo"
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We leverage cutting-edge technologies and AI-assisted development workflows to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-200 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-roundo text-primary mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-300 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedTitle
            title="Ready to Build Something Amazing?"
            color="light"
            className="text-3xl md:text-4xl mb-6 font-roundo"
          />
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your digital vision to life with our expertise in modern technologies and innovative solutions.
          </p>
          <Button
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Start a Project
          </Button>
        </div>
      </section>
    </main>
  );
} 