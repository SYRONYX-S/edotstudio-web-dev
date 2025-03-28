'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RiArrowRightLine, RiArrowRightUpLine, RiCheckboxCircleLine, RiBriefcase4Line, RiTimeLine, RiTeamLine } from 'react-icons/ri';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/Button';
import CountUp from '@/components/CountUp';
import ServiceCard from '@/components/ServiceCard';
import ParallaxSection from '@/components/ParallaxSection';
import MarqueeClients from '@/components/MarqueeClients';
import TestimonialSlider from '@/components/TestimonialSlider';
import PortfolioItem from '@/components/PortfolioItem';

// Data
import { services, stats, testimonials, clients, portfolioProjects } from '@/data';

// Use a placeholder for missing images
const fallbackImage = '/images/hero/hero-graphic.svg';

export default function Home() {
  // Reference for scroll parallax effects
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  
  // Parallax effects for the hero section
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light dark:bg-[#1B1B1B] backdrop-blur-sm">
        {/* Enhanced animated circles */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div 
            className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-primary-500/10 dark:bg-primary-500/20 blur-[80px]"
            animate={{ 
              x: [0, 50, 0, -50, 0],
              y: [0, -50, 0, 50, 0]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary-500/15 dark:bg-primary-500/25 blur-[100px]"
            animate={{ 
              x: [0, -70, 0, 70, 0],
              y: [0, 70, 0, -70, 0]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute top-[50%] right-[30%] w-[200px] h-[200px] rounded-full bg-primary-600/10 dark:bg-primary-600/20 blur-[60px]"
            animate={{ 
              x: [0, 60, 0, -60, 0],
              y: [0, -60, 0, 60, 0]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
        
        {/* Dust particles */}
        <div className="dust-particles absolute inset-0 z-1">
          <motion.div 
            className="particle" 
            style={{top: '10%', left: '15%'}}
            animate={{ 
              x: [0, -30, 0], 
              y: [0, 30, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
          <motion.div 
            className="particle" 
            style={{top: '35%', left: '80%'}}
            animate={{ 
              x: [0, -20, 0], 
              y: [0, 20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
          <motion.div 
            className="particle" 
            style={{top: '70%', left: '35%'}}
            animate={{ 
              x: [0, -25, 0], 
              y: [0, 25, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
          <motion.div 
            className="particle" 
            style={{top: '20%', left: '55%'}}
            animate={{ 
              x: [0, -15, 0], 
              y: [0, 15, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 35, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
          <motion.div 
            className="particle" 
            style={{top: '85%', left: '25%'}}
            animate={{ 
              x: [0, -22, 0], 
              y: [0, 22, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 28, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
        </div>
        
        {/* Frosted glass overlay */}
        <div className="absolute inset-0 bg-white/5 dark:bg-black/10 backdrop-blur-[5px] z-1"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 z-10 mt-20">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              style={{ y, opacity }}
              className="mb-8"
            >
              <AnimatedTitle 
                title="Creating Digital Experiences That Captivate"
                as="h1"
                type="staggered"
                color="primary"
                className="text-3xl md:text-5xl lg:text-6xl mb-6 max-w-5xl font-technor text-shadow-glow"
              />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 font-supreme"
              >
                EdotStudio is a top-tier digital solutions agency specializing in branding, marketing, web/app/software development, and graphic design.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  href="/contact" 
                  size="lg"
                  icon={<RiArrowRightLine />}
                >
                  Let's Build Something
                </Button>
                <Button 
                  href="/services" 
                  variant="outline"
                  size="lg"
                >
                  Explore Our Services
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Hero badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <div className="glass dark:glass-dark rounded-full px-5 py-2 flex items-center">
                <RiCheckboxCircleLine className="text-primary-500 mr-2" />
                <span className="text-sm font-medium font-supreme">Award-winning Design</span>
              </div>
              <div className="glass dark:glass-dark rounded-full px-5 py-2 flex items-center">
                <RiBriefcase4Line className="text-primary-500 mr-2" />
                <span className="text-sm font-medium font-supreme">200+ Projects Delivered</span>
              </div>
              <div className="glass dark:glass-dark rounded-full px-5 py-2 flex items-center">
                <RiTimeLine className="text-primary-500 mr-2" />
                <span className="text-sm font-medium font-supreme">10+ Years Experience</span>
              </div>
              <div className="glass dark:glass-dark rounded-full px-5 py-2 flex items-center">
                <RiTeamLine className="text-primary-500 mr-2" />
                <span className="text-sm font-medium font-supreme">50+ Team Members</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-dark-200 services-section animated-gradient">
        <div className="animated-bg-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block glass dark:glass-dark text-primary-600 dark:text-primary-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </div>
            <AnimatedTitle 
              title="Comprehensive Digital Solutions"
              type="reveal"
              className="text-2xl md:text-4xl mb-4 font-technor"
            />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-supreme">
              We combine creativity and technology to deliver exceptional digital solutions that drive results for your business.
            </p>
          </div>
          
          <div className="bento-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={<service.icon />}
                link={service.link}
                color={service.color}
                index={index}
                className="glass-card hover-tilt"
              />
            ))}
          </div>
          
          {/* Services CTA */}
          <div className="mt-16 text-center">
            <Button 
              href="/services" 
              icon={<RiArrowRightLine />}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section - New */}
      <section className="py-20 bg-gray-100 dark:bg-dark-100 animated-gradient">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block glass dark:glass-dark text-primary-600 dark:text-primary-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Approach
            </div>
            <AnimatedTitle 
              title="Our Proven Process"
              className="text-2xl md:text-4xl mb-4 font-technor"
            />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-supreme">
              We follow a systematic approach to ensure every project is delivered with excellence and meets your business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Discovery', 
                description: 'We start by understanding your business goals, target audience, and project requirements.',
                icon: '🔍'
              },
              { 
                step: '02', 
                title: 'Strategy', 
                description: 'Our team develops a comprehensive strategy tailored to your specific needs and objectives.',
                icon: '📊'
              },
              { 
                step: '03', 
                title: 'Creation', 
                description: 'We bring your project to life through design, development, and content creation.',
                icon: '💡'
              },
              { 
                step: '04', 
                title: 'Launch & Optimize', 
                description: 'We deploy your project and continuously optimize for maximum performance.',
                icon: '🚀'
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 glass-card hover-tilt"
              >
                <div className="text-5xl mb-6 opacity-10 absolute top-6 right-6 font-technor">{item.step}</div>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-technor text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 font-supreme">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-400 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedTitle 
              title="Our Impact in Numbers"
              color="light"
              className="text-2xl md:text-4xl mb-4 font-technor"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="p-6 glass-dark hover-tilt rounded-xl transform hover:-translate-y-2 transition-transform duration-300">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl md:text-5xl font-technor font-bold text-primary mb-2"
                />
                <p className="text-sm md:text-base font-medium font-supreme">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-light dark:bg-dark-200 animated-gradient">
        <div className="animated-bg-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <div className="inline-block glass dark:glass-dark text-primary-600 dark:text-primary-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Portfolio
              </div>
              <AnimatedTitle 
                title="Featured Work"
                color="primary"
                className="text-2xl md:text-4xl mb-4 font-technor"
              />
              <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                Explore our selected projects that showcase our expertise and creativity.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button 
                href="/portfolio"
                icon={<RiArrowRightUpLine />}
                variant="outline"
              >
                View All Projects
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.slice(0, 3).map((project, index) => (
              <PortfolioItem
                key={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                href={project.href}
                index={index}
                className="frosted-container hover-tilt"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - New Section */}
      <section className="py-20 bg-white dark:bg-dark-300 animated-gradient">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block glass dark:glass-dark text-primary-600 dark:text-primary-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </div>
              <AnimatedTitle 
                title="Committed to Excellence in Digital Solutions"
                className="text-2xl md:text-4xl mb-6 font-technor"
              />
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                At EdotStudio, we're not just another digital agency. We're a team of passionate experts committed to delivering exceptional results for our clients.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'Expert Team', description: 'Our team consists of industry experts with years of experience.' },
                  { title: 'Custom Solutions', description: 'We create tailored solutions that address your specific business needs.' },
                  { title: 'Client-Centric Approach', description: 'Your success is our priority – we focus on delivering value to your business.' },
                  { title: 'Cutting-Edge Technology', description: 'We leverage the latest technologies to create future-proof solutions.' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start glass-card p-4 mb-4"
                  >
                    <div className="bg-primary-subtle dark:bg-primary-dark/30 text-primary rounded-full p-1 mt-1 mr-4 flex-shrink-0">
                      <RiCheckboxCircleLine className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-technor text-lg text-gray-800 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button href="/about">
                  Learn More About Us
                </Button>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl frosted-container">
                <Image
                  src={fallbackImage}
                  width={600}
                  height={700}
                  alt="EdotStudio Team Working" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-primary-500/10 dark:bg-primary-900/30 backdrop-blur-[2px]"></div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <div className="text-white text-xl md:text-2xl font-technor mb-2">Ready to transform your digital presence?</div>
                  <p className="text-white/80 mb-4 font-supreme">Let's create something amazing together.</p>
                  <Button 
                    href="/contact" 
                    size="sm" 
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-gray-100 dark:bg-dark-300 animated-gradient">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h3 className="text-xl font-technor text-gray-800 dark:text-white mb-6">Trusted by Industry-Leading Companies</h3>
          </div>
          
          <div className="glass-card p-6 text-center font-supreme">
            <p className="text-gray-700 dark:text-gray-300 italic">Our clients list is currently being updated.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-dark-200 animated-gradient">
        <div className="animated-bg-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block glass dark:glass-dark text-primary-600 dark:text-primary-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Testimonials
            </div>
            <AnimatedTitle 
              title="What Our Clients Say"
              className="text-2xl md:text-4xl mb-4 font-technor"
            />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-supreme">
              Don't just take our word for it. Hear what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto glass-card p-6 text-center font-supreme">
            <p className="text-gray-700 dark:text-gray-300 italic">Client testimonials are currently being updated.</p>
          </div>
        </div>
      </section>

      {/* CTA Section - Using simple background instead of ParallaxSection */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="frosted-container py-12 px-6">
            <AnimatedTitle 
              title="Let's Create the Future Together"
              color="light"
              className="text-3xl md:text-5xl mb-6 font-technor"
            />
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg font-supreme">
              Ready to elevate your digital presence? Contact us today to discuss how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                icon={<RiArrowRightLine />}
              >
                Get in Touch
              </Button>
              <Button 
                href="/portfolio" 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
