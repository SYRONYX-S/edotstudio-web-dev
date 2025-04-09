'use client';

import React, { useState, useEffect } from 'react';
import AnimatedTitle from '@/components/AnimatedTitle';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RiArrowRightLine, RiArrowRightUpLine } from 'react-icons/ri';
import { projects } from './data';
import { Project } from './utils';
import PageHero from '@/components/PageHero';

const categories = ['All', 'Software Development', 'Web Development', 'Branding', 'Marketing', 'Posters'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.2]);

  const projectList = Object.values(projects);
  const filteredProjects = selectedCategory === 'All'
    ? projectList
    : projectList.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen relative backdrop-blur-sm">
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
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 mb-20">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-technor font-medium transition-all duration-300 backdrop-blur-none md:backdrop-blur-sm ${
                    selectedCategory === category
                      ? 'bg-primary dark:bg-primary text-white shadow-glow'
                    : 'dark:bg-white/5 dark:hover:bg-white/10 dark:text-white/70 dark:hover:text-white'
                  }`}
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
                            <p className="text-sm font-medium text-primary -mb-2">
                              {project.category}
                            </p>
                            <h3 className="text-2xl font-technor mb-0 text-primary-light dark:text-primary transition-colors duration-300 break-words">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                        <p className="dark:text-white/70 mb-6 font-pilcrow break-words">
                          {project.description}
                        </p>
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

      {/* Partnership Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#FF4D0015,transparent)]" />
          <motion.div 
            style={{ y: y2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_600px_at_70%_50%,#FF4D0010,transparent)]"
          />
        </div>
        <div className="container mx-auto px-4 relative">
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
      <section className="relative py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0  " />
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0"
        />
        
        <div className="container mx-auto px-4 relative">
          <div
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-block glass dark:glass-dark text-primary px-4 py-1 rounded-full text-sm font-medium mb-6 font-pilcrow">
              START YOUR PROJECT
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-technor mb-8 dark:text-white leading-tight">
              Ready to Transform Your <br />
              <span className="text-primary">Digital Presence?</span>
            </h2>
            <p className="text-lg md:text-xl dark:text-white/70 mb-12 max-w-3xl mx-auto font-pilcrow">
              Let's collaborate to bring your vision to life. Our team of experts is ready to help you create something extraordinary.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="group flex items-center gap-2 bg-primary-light dark:bg-primary-light hover:bg-primary/90 dark:hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-glow hover:shadow-glow-lg"
              >
                Start a Project
                <RiArrowRightUpLine className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href="/about"
                className="group flex items-center gap-2 bg-black/5 dark:bg-white/5 hover:dark:bg-white/10 dark:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 backdrop-blur-none md:backdrop-blur-sm"
              >
                Learn More About Us
                <RiArrowRightLine className="text-2xl transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t dark:border-white/10"
            >
              {[
                { number: '150+', label: 'Projects Completed' },
                { number: '50+', label: 'Happy Clients' },
                { number: '10+', label: 'Years Experience' },
                { number: '25+', label: 'Team Members' }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm dark:text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 