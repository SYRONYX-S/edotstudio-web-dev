'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RiArrowRightLine, RiCheckLine } from 'react-icons/ri';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/Button';
import ParallaxSection from '@/components/ParallaxSection';

// Data
import { services } from '@/data';

// Service detail data
const serviceDetails = [
  {
    id: 'branding',
    title: 'Branding',
    subtitle: 'Building memorable brand identities',
    description: 'We create compelling brand identities that resonate with your audience and distinguish your business in the market. Our branding services help you establish a strong visual presence and communicate your values effectively.',
    image: '/images/services/branding.jpg',
    features: [
      'Brand Strategy Development',
      'Logo & Visual Identity Design',
      'Brand Guidelines',
      'Brand Positioning',
      'Brand Messaging',
      'Rebranding Services',
    ],
    process: [
      { step: 1, title: 'Research', description: 'In-depth market and competitor analysis to understand your positioning.' },
      { step: 2, title: 'Strategy', description: 'Define your brand\'s unique value proposition and target audience.' },
      { step: 3, title: 'Design', description: 'Create visual elements that embody your brand identity.' },
      { step: 4, title: 'Implementation', description: 'Roll out your brand identity across all channels and touchpoints.' },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'Creating exceptional web experiences',
    description: 'We build modern, responsive, and high-performance websites that deliver exceptional user experiences. Our web development team combines technical expertise with creative design to create websites that engage your audience and achieve your business goals.',
    image: '/images/services/web-dev.jpg',
    features: [
      'Custom Website Design & Development',
      'E-commerce Solutions',
      'Content Management Systems',
      'Web Applications',
      'Progressive Web Apps',
      'Website Optimization & Maintenance',
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'Understand your goals, target audience, and technical requirements.' },
      { step: 2, title: 'Planning', description: 'Create wireframes, sitemaps, and technical specifications.' },
      { step: 3, title: 'Design', description: 'Develop visual mockups and user interface designs.' },
      { step: 4, title: 'Development', description: 'Build the website with clean, efficient, and maintainable code.' },
      { step: 5, title: 'Testing', description: 'Ensure perfect functionality across devices and browsers.' },
      { step: 6, title: 'Launch', description: 'Deploy the website and provide training and support.' },
    ],
  },
  {
    id: 'app-development',
    title: 'App Development',
    subtitle: 'Creating powerful mobile solutions',
    description: 'Our team creates intuitive and feature-rich mobile applications for iOS and Android platforms. We focus on creating seamless user experiences, optimized performance, and scalable architecture to ensure your app stands out in the market.',
    image: '/images/services/app-dev.jpg',
    features: [
      'Native iOS & Android Development',
      'Cross-Platform Development',
      'UI/UX Design for Mobile',
      'App Strategy & Consulting',
      'App Maintenance & Updates',
      'App Store Optimization',
    ],
    process: [
      { step: 1, title: 'Strategy', description: 'Define your app\'s purpose, features, and target platform.' },
      { step: 2, title: 'Design', description: 'Create wireframes and user interface designs optimized for mobile.' },
      { step: 3, title: 'Development', description: 'Build the app with robust code and efficient architecture.' },
      { step: 4, title: 'Testing', description: 'Conduct thorough testing across devices and operating systems.' },
      { step: 5, title: 'Deployment', description: 'Launch the app on App Store or Google Play Store.' },
      { step: 6, title: 'Maintenance', description: 'Provide ongoing support, updates, and feature enhancements.' },
    ],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    subtitle: 'Creating impactful visual content',
    description: 'We deliver stunning visuals that effectively communicate your message and enhance your brand. Our graphic design services span from print to digital, creating cohesive and compelling visual content for all your marketing needs.',
    image: '/images/services/graphic-design.jpg',
    features: [
      'Marketing Collateral Design',
      'Social Media Graphics',
      'Packaging Design',
      'Illustration',
      'Infographics',
      'Print Design',
    ],
    process: [
      { step: 1, title: 'Brief', description: 'Understand your design needs, goals, and target audience.' },
      { step: 2, title: 'Concept', description: 'Generate creative concepts that align with your brand.' },
      { step: 3, title: 'Design', description: 'Create high-quality designs with attention to detail.' },
      { step: 4, title: 'Refinement', description: 'Incorporate feedback and make necessary adjustments.' },
      { step: 5, title: 'Finalization', description: 'Deliver final designs in appropriate formats for use.' },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    subtitle: 'Driving growth through strategic marketing',
    description: 'Our data-driven marketing strategies help you reach your target audience and achieve your business goals. We create comprehensive marketing campaigns that increase brand awareness, generate leads, and drive conversions.',
    image: '/images/services/marketing.jpg',
    features: [
      'Digital Marketing Strategy',
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Pay-Per-Click Advertising',
    ],
    process: [
      { step: 1, title: 'Analysis', description: 'Evaluate your current marketing efforts and identify opportunities.' },
      { step: 2, title: 'Strategy', description: 'Develop a tailored marketing plan aligned with your goals.' },
      { step: 3, title: 'Execution', description: 'Implement marketing campaigns across relevant channels.' },
      { step: 4, title: 'Monitoring', description: 'Track performance using analytics and key metrics.' },
      { step: 5, title: 'Optimization', description: 'Refine strategies based on data and market response.' },
      { step: 6, title: 'Reporting', description: 'Provide transparent reports on results and ROI.' },
    ],
  },
];

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
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
              OUR SERVICES
            </div>
            <AnimatedTitle
              title="What We Do"
              className="text-4xl md:text-7xl mb-6 font-technor text-foreground dark:text-white"
            />
            <p className="text-muted-foreground dark:text-white/70 max-w-2xl mx-auto text-lg mb-12">
              From web development to digital marketing, we offer comprehensive solutions to help your business thrive in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-dark-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-300 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl text-primary mb-6">
                  <service.icon />
                </div>
                <h3 className="text-2xl font-technor text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 font-supreme">{service.description}</p>
                <Button 
                  href={`#${service.link.split('#')[1]}`}
                  icon={<RiArrowRightLine />}
                  variant="outline"
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {serviceDetails.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${
            index % 2 === 0 ? 'bg-gray-100 dark:bg-dark-300' : 'bg-white dark:bg-dark-200'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Service Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} font-supreme`}
              >
                <div className="mb-2 inline-block py-1 px-3 bg-primary/10 rounded-full">
                  <span className="text-primary text-sm font-medium">{service.subtitle}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-technor text-primary mb-6">{service.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">{service.description}</p>
                
                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-technor mb-4">What We Offer</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <RiCheckLine className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Process */}
                <div>
                  <h3 className="text-xl font-technor mb-4">Our Process</h3>
                  <div className="space-y-4">
                    {service.process.map((step) => (
                      <div key={step.step} className="flex">
                        <div className="mr-4 flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">
                            {step.step}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-primary mb-1">{step.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Service Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedTitle 
            title="Ready to Transform Your Business?"
            color="light"
            className="text-3xl md:text-4xl mb-6 font-technor"
          />
          <p className="text-white/90 max-w-2xl mx-auto mb-8 font-supreme">
            Let's discuss how our services can help you achieve your business goals and create a standout digital presence.
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-primary hover:bg-gray-100"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </main>
  );
} 