'use client';

import React, { useState, useEffect } from 'react';
import AnimatedTitle from '@/components/AnimatedTitle';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightLine, RiArrowRightUpLine } from 'react-icons/ri';
import { projects } from './data';
import { Project } from './utils';
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';

const categories = ['All', 'Software Development', 'Web Development', 'Branding', 'Marketing', 'Posters'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile devices to optimize rendering
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const projectList = Object.values(projects);
  const filteredProjects = selectedCategory === 'All'
    ? projectList
    : projectList.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen relative backdrop-blur-sm overflow-hidden">
      {/* Abstract Background */}
      {/* <AbstractBackground className="!fixed" /> */}

      {/* Background Elements */}

      <PageHero
        badge="Featured Work"
              title="Our Portfolio"
        description="Discover how we've helped businesses transform their digital presence through innovative solutions and strategic partnerships."
            />

            {/* Category Filter */}
      <section className="pb-20 -mt-4">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 mb-16 md:mb-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={[
                  "px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-technor font-medium transition-all duration-300 backdrop-blur-none md:backdrop-blur-sm",
                  selectedCategory === category
                    ? 'bg-primary dark:bg-primary text-white shadow-glow'
                    : 'dark:bg-white/5 dark:hover:bg-white/10 dark:text-white/70 dark:hover:text-white bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
                ].join(' ')}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const projectSlug = Object.keys(projects).find(key => projects[key] === project);
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  <Link href={`/portfolio/${projectSlug}`}>
                    <div className="relative overflow-hidden rounded-2xl dark:bg-black/20 backdrop-blur-none md:backdrop-blur-sm border dark:border-white/10 hover:border-primary/50 transition-all duration-500 group-hover:shadow-glow-lg">
                      <div className="aspect-[16/9] relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      </div>
                      <div className="p-6 md:p-8">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-sm font-medium text-primary">
                                {project.category}
                              </p>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {project.industry}
                              </span>
                            </div>
                            <h3 className="text-2xl font-technor mb-0 text-primary-light dark:text-primary transition-colors duration-300 break-words">
                              {project.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              Client: {project.clientName}
                            </p>
                          </div>
                        </div>
                        <p className="dark:text-white/70 mb-6 font-pilcrow break-words">
                          {project.description}
                        </p>
                        
                        {/* Services Provided */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.servicesProvided.map((service, idx) => (
                            <span
                              key={idx}
                              className="dark:bg-white/5 dark:text-white/70 px-3 py-1 rounded-full text-xs border dark:border-white/10 backdrop-blur-none md:backdrop-blur-sm font-pilcrow"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="dark:bg-white/5 dark:text-white/70 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm border dark:border-white/10 backdrop-blur-none md:backdrop-blur-sm font-pilcrow"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {/* Challenge & Results Preview */}
                        <div className="mb-6 space-y-3">
                          <div className="flex items-start">
                            <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold mr-2 mt-0.5">C</span>
                            <p className="text-sm dark:text-white/70 line-clamp-2">{project.challenge.substring(0, 100)}...</p>
                          </div>
                          <div className="flex items-start">
                            <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold mr-2 mt-0.5">R</span>
                            <p className="text-sm dark:text-white/70 line-clamp-1">{project.results[0]}</p>
                          </div>
                        </div>
                        
                        <div className="font-pilcrow flex items-center text-primary group/link">
                          <span className="mr-2 group-hover/link:mr-4 transition-all duration-300">View Case Study</span>
                          <RiArrowRightLine className="transform group-hover/link:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Section - Optimize gradients for mobile */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          {!isMobile && (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#FF4D0015,transparent)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_70%_50%,#FF4D0010,transparent)]" />
            </>
          )}
          {isMobile && (
            // Simplified gradient for mobile - less resource intensive
            <div className="absolute inset-0 bg-[#FF4D00]/[0.03]" />
          )}
        </div>
        <div className="container mx-auto px-4 relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div
              className="text-center mb-16"
            >
              <div className="inline-block glass dark:glass-dark text-primary px-4 py-1 rounded-full text-sm font-medium mb-4 font-pilcrow">
                PARTNERSHIPS
              </div>
              <h2 className="text-4xl md:text-5xl font-technor mb-6 dark:text-white">Strategic Collaborations</h2>
              <p className="dark:text-white/70 text-lg max-w-3xl mx-auto font-pilcrow">
                While we excel in web, app, and software development in-house, we partner with specialized agencies to ensure the highest quality deliverables for our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'In-House Expertise',
                  items: ['Web Development', 'Mobile App Development', 'Custom Software Solutions', 'UI/UX Design', 'Cloud Infrastructure'],
                  gradient: 'to-r',
                  icon: '💻'
                },
                {
                  title: 'Partner Services',
                  items: [
                    { text: 'Brand Strategy & Identity', partner: 'Brandlifté', url: 'https://brandlifte.com' },
                    { text: 'Digital Marketing', partner: 'Brandlifté', url: 'https://brandlifte.com' },
                    { text: 'Content Creation', partner: 'ContentPro', url: 'https://contentpro.com' },
                    { text: 'Graphic Design', partner: 'DesignStudio', url: 'https://designstudio.com' },
                    { text: 'Marketing Analytics', partner: 'DataMetrics', url: 'https://datametrics.com' }
                  ],
                  gradient: 'to-l',
                  icon: '🤝'
                }
              ].map((section, sectionIndex) => (
                <div
                  key={section.title}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-${section.gradient} from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`} />
                  
                  {/* Card */}
                  <div className="relative overflow-hidden rounded-2xl dark:bg-black/20 backdrop-blur-none md:backdrop-blur-sm border dark:border-white/10 transition-all duration-500 group-hover:shadow-glow-lg">
                    {/* Hover Gradient */}
                    <div className={`absolute inset-0 bg-gradient-${section.gradient} from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                    
                    {/* Content */}
                    <div className="relative p-8">
                      <div className="flex items-center mb-8">
                        <div className="mr-4 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 text-2xl">
                          {section.icon}
                        </div>
                        <h3 className="text-2xl font-semibold dark:text-white group-hover:text-primary transition-colors">
                          {section.title}
                        </h3>
                      </div>
                      
                      <ul className="space-y-4 relative">
                        {(Array.isArray(section.items) ? section.items : []).map((item, index) => (
                          <li
                            key={typeof item === 'string' ? item : item.text}
                            className="flex items-center group/item"
                          >
                            <span className="w-2 h-2 rounded-full bg-primary mr-3 group-hover/item:scale-150 transition-transform duration-300" />
                            {typeof item === 'string' ? (
                              <span className="dark:text-white/70 group-hover/item:text-white transition-colors duration-300">
                                {item}
                              </span>
                            ) : (
                              <div className="flex items-center justify-between w-full">
                                <span className="dark:text-white/70 group-hover/item:text-white transition-colors duration-300">
                                  {item.text}
                                </span>
                                <Link
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-4 text-sm text-primary hover:text-primary/80 transition-colors duration-300"
                                >
                                  {item.partner} →
                                </Link>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden w-full">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/8 via-transparent to-primary-light/8"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#FF4D00]/12 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-primary-light/12 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            {/* Enhanced glassmorphism CTA card */}
            <div className="bg-white/12 dark:bg-white/6 backdrop-blur-2xl rounded-3xl p-8 md:p-12 lg:p-16 border border-white/25 dark:border-white/15 relative overflow-hidden group shadow-xl hover:bg-white/18 dark:hover:bg-white/10 hover:border-white/35 dark:hover:border-white/20 hover:shadow-[0_20px_50px_rgba(255,77,0,0.15)] dark:hover:shadow-[0_20px_50px_rgba(255,77,0,0.2)] w-full transition-all duration-500">
              {/* Floating decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF4D00]/20 rounded-full blur-xl group-hover:bg-[#FF4D00]/25 group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-light/20 rounded-full blur-xl group-hover:bg-primary-light/25 group-hover:scale-110 transition-all duration-500"></div>
              
              <div className="relative z-10 text-center w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-[#FF4D00] text-white px-6 py-3 rounded-full text-sm font-medium mb-8 font-pilcrow shadow-lg hover:bg-[#FF4D00]/90 hover:scale-105 hover:-translate-y-1 transition-all duration-500"
                >
                  <span>🎨</span>
                  <span>START YOUR PROJECT</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-technor mb-8 text-black dark:text-white leading-tight">
                  Ready to Transform Your <br />
                  <span className="text-[#FF4D00]">Digital Presence?</span>
                </h2>
                
                <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-lg md:text-xl font-pilcrow leading-relaxed">
                  Let's collaborate to bring your vision to life. Our team of experts is ready to help you create something extraordinary that stands out in the digital landscape.
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 w-full">
                  <Link
                    href="/contact"
                    className="group flex items-center gap-2 bg-[#FF4D00] hover:bg-[#FF4D00]/90 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 font-pilcrow transition-all duration-500"
                  >
                    Start a Project
                    <RiArrowRightUpLine className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </Link>
                  <Link
                    href="/about"
                    className="group flex items-center gap-2 bg-white/10 dark:bg-white/5 hover:bg-white/15 dark:hover:bg-white/10 text-gray-700 dark:text-white px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm border border-white/20 dark:border-white/10 hover:border-white/30 dark:hover:border-white/15 hover:scale-105 hover:-translate-y-1 font-pilcrow transition-all duration-500"
                  >
                    Learn More About Us
                    <RiArrowRightLine className="text-2xl group-hover:translate-x-1 transition-all duration-500" />
                  </Link>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200 dark:border-white/10 group-hover:border-gray-300 dark:group-hover:border-white/20 w-full transition-all duration-500">
                  {[
                    { number: '150+', label: 'Projects Completed' },
                    { number: '50+', label: 'Happy Clients' },
                    { number: '10+', label: 'Years Experience' },
                    { number: '25+', label: 'Team Members' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center group/stat p-4 rounded-xl bg-white/5 dark:bg-white/3 backdrop-blur-sm border border-white/10 dark:border-white/5 hover:bg-white/10 dark:hover:bg-white/5 hover:border-white/20 dark:hover:border-white/10 hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-500"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-[#FF4D00] mb-2 transition-all duration-500">{stat.number}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-pilcrow">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 