'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiLinkedinFill, RiTwitterXFill, RiGithubFill, RiDribbbleFill } from 'react-icons/ri';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

// Data
import { teamMembers } from '@/data';

export default function AboutPage() {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Company values
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to create cutting-edge solutions.',
      icon: '💡',
    },
    {
      title: 'Integrity',
      description: 'We believe in honesty, transparency, and ethical business practices.',
      icon: '🤝',
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project we undertake.',
      icon: '✨',
    },
    {
      title: 'Client-Centric',
      description: 'Our clients\' success is our primary focus and drives our decisions.',
      icon: '🎯',
    },
    {
      title: 'Collaboration',
      description: 'We work together as a team, valuing diverse perspectives and ideas.',
      icon: '👥',
    },
    {
      title: 'Adaptability',
      description: 'We embrace change and continuously evolve with the latest trends.',
      icon: '🔄',
    },
  ];

  // Milestones for timeline
  const milestones = [
    {
      year: 2014,
      title: 'EdotStudio Founded',
      description: 'Started as a small design agency with just three team members.',
    },
    {
      year: 2016,
      title: 'Expanded Services',
      description: 'Added web development to our service offerings and doubled our team size.',
    },
    {
      year: 2018,
      title: 'First Major Client',
      description: 'Secured our first Fortune 500 client, marking a significant milestone.',
    },
    {
      year: 2020,
      title: 'International Expansion',
      description: 'Opened our first international office and expanded our client base globally.',
    },
    {
      year: 2022,
      title: 'Technology Innovations',
      description: 'Launched our proprietary software solutions and AI-powered design tools.',
    },
    {
      year: 2024,
      title: 'Industry Recognition',
      description: 'Recognized as a leading digital agency with multiple industry awards.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-light dark:bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedTitle
              title="Our Story"
              as="h1"
              type="staggered"
              color="primary"
              className="text-4xl md:text-6xl mb-6 font-technor"
            />
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 font-supreme"
            >
              EdotStudio is a collective of passionate creatives and technical experts dedicated to crafting exceptional digital experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <ParallaxSection
        backgroundImage="/images/hero/about-bg.jpg"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="glass dark:glass-dark rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-supreme"
              >
                <h2 className="text-2xl md:text-3xl font-technor text-primary mb-6">Our Identity</h2>
                <p className="text-gray-800 dark:text-gray-200 mb-4">
                  Founded in 2014, EdotStudio began with a simple mission: to bridge the gap between stunning design and powerful technology. What started as a small team has grown into a diverse group of experts united by a shared passion for digital excellence.
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  Today, we're proud to be a leading digital solutions agency helping businesses across the globe transform their digital presence and achieve remarkable growth.
                </p>
              </motion.div>
              
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/hero/office.jpg"
                  alt="EdotStudio Office"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-dark-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedTitle 
              title="Our Journey"
              className="text-2xl md:text-4xl mb-4 font-technor"
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-supreme">
              From our humble beginnings to where we are today, this is our story of growth and innovation.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Timeline items */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={fadeInUp}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}>
                    <div className="bg-white dark:bg-dark-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-2xl font-technor text-primary mb-2">{milestone.year}</h3>
                      <h4 className="text-lg font-semibold mb-2 font-supreme">{milestone.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-supreme">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-dark-200"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-100 dark:bg-dark-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedTitle 
              title="Mission & Values"
              className="text-2xl md:text-4xl mb-4 font-technor"
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-supreme">
              Our mission is to empower businesses with innovative digital solutions that drive growth and create meaningful connections with their audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 } 
                }}
                className="bg-white dark:bg-dark-200 p-8 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-technor text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-supreme">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white dark:bg-dark-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedTitle 
              title="Meet Our Team"
              className="text-2xl md:text-4xl mb-4 font-technor"
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-supreme">
              Our diverse team of experts is passionate about creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                onClick={() => setActiveTeamMember(activeTeamMember === member.id ? null : member.id)}
              >
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white text-xl font-technor">{member.name}</h3>
                    <p className="text-white/80 text-sm font-supreme">{member.position}</p>
                    
                    <div className="flex space-x-3 mt-4">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                          <RiLinkedinFill className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                          <RiTwitterXFill className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                          <RiGithubFill className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.dribbble && (
                        <a href={member.social.dribbble} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                          <RiDribbbleFill className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Bio Popup */}
                {activeTeamMember === member.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-dark-300 p-6 rounded-xl shadow-xl z-10"
                  >
                    <button 
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTeamMember(null);
                      }}
                    >
                      ✕
                    </button>
                    <p className="text-gray-700 dark:text-gray-300 font-supreme">{member.bio}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedTitle 
            title="Join Our Team"
            color="light"
            className="text-3xl md:text-4xl mb-6 font-technor"
          />
          <p className="text-white/90 max-w-2xl mx-auto mb-8 font-supreme">
            Interested in joining our team of experts? We're always looking for talented individuals who are passionate about digital excellence.
          </p>
          <Button 
            href="/careers" 
            className="bg-white text-primary hover:bg-gray-100"
          >
            View Open Positions
          </Button>
        </div>
      </section>
    </>
  );
} 