'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiRocketLine, RiCodeSLine, RiTeamLine, RiLightbulbLine, RiShieldLine, RiComputerLine, RiDatabase2Line, RiSmartphoneLine, RiToolsLine, RiCheckLine } from 'react-icons/ri';
import { Users } from 'lucide-react';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/Button';
import StructuredData from '@/components/StructuredData';

// Structured data for the about page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About EdotStudio",
  "description": "Learn about EdotStudio's unique approach combining in-house technical excellence with a curated network of specialized agency partners.",
  "publisher": {
    "@type": "Organization",
    "name": "EdotStudio",
    "logo": {
      "@type": "ImageObject",
      "url": "https://edotstudio.com/logo-dark.svg"
    }
  },
  "mainEntity": {
    "@type": "Organization",
    "name": "EdotStudio",
    "description": "EdotStudio is a digital solutions hub that combines in-house technical expertise with a curated network of specialized agency partners to deliver comprehensive business solutions.",
    "foundingDate": "2022-02",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10+"
    },
    "image": "https://edotstudio.com/images/hero/about-hero.jpg",
    "award": "95% Client Satisfaction Rate"
  }
};

export default function About() {
  const achievements = [
    { number: '100+', label: 'Technical Projects', icon: <RiRocketLine className="text-3xl text-primary-light" aria-hidden="true" /> },
    { number: '15+', label: 'Partner Agencies', icon: <Users className="text-3xl text-primary-light" aria-hidden="true" /> },
    { number: '95%', label: 'Client Satisfaction', icon: <RiShieldLine className="text-3xl text-primary-light" aria-hidden="true" /> },
    { number: '10+', label: 'Countries Served', icon: <RiLightbulbLine className="text-3xl text-primary-light" aria-hidden="true" /> },
  ];

  const technologies = [
    {
      category: 'Web Frontend',
      icon: <RiCodeSLine className="text-4xl text-primary-light" aria-hidden="true" />,
      description: "Building responsive, interactive interfaces with cutting-edge web technologies",
      items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'HTML5/CSS3', 'Bootstrap', 'Material UI', 'Vue.js']
    },
    {
      category: 'Backend & API',
      icon: <RiDatabase2Line className="text-4xl text-primary-light" aria-hidden="true" />,
      description: "Robust server-side solutions for scalable, secure applications",
      items: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL', 'REST API', 'MongoDB', 'PostgreSQL', 'Firebase', 'Serverless']
    },
    {
      category: 'Mobile & App Dev',
      icon: <RiSmartphoneLine className="text-4xl text-primary-light" aria-hidden="true" />,
      description: "Cross-platform mobile solutions for iOS and Android ecosystems",
      items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase', 'App Store Optimization', 'Progressive Web Apps', 'Push Notifications']
    },
    {
      category: 'Design & UX',
      icon: <RiTeamLine className="text-4xl text-primary-light" aria-hidden="true" />,
      description: "Creative design processes that elevate user experiences",
      items: ['UI/UX Design', 'Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'Animation', 'Design Systems', 'Accessibility', 'User Testing']
    },
    {
      category: 'Tools & AI',
      icon: <RiToolsLine className="text-4xl text-primary-light" aria-hidden="true" />,
      description: "Leveraging AI tools to enhance development workflows and productivity",
      items: ['GitHub Copilot', 'ChatGPT', 'Midjourney', 'Cursor IDE', 'Grok', 'DeepSeek', 'Claude', 'Vercel', 'GitHub Actions', 'AWS/GCP']
    },
    {
      category: 'DevOps & Deployment',
      icon: <RiComputerLine className="text-4xl text-primary-light" aria-hidden="true" />,
      description: "Streamlined development operations for reliable delivery",
      items: ['CI/CD', 'Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Vercel', 'Netlify', 'Monitoring', 'Performance Optimization']
    }
  ];

  return (
    <>
      <StructuredData data={structuredData} />
    
      <main className="min-h-screen relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 z-10">
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                ABOUT US
              </div>
              <h1 className="text-4xl md:text-7xl mb-6 font-technor text-black dark:text-white">
                Redefining Digital Solutions
              </h1>
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg mb-12 font-pilcrow">
                We're pioneering a new approach to digital services by combining our core technical expertise with a carefully curated network of specialized agency partners.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 dark:border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                    OUR STORY
                  </div>
                  <h2 className="text-3xl md:text-4xl font-technor text-black dark:text-white">Innovation Through Integration</h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 font-pilcrow">
                    <p>
                      Founded in February 2022, EdotStudio began with a vision to revolutionize how businesses access digital services. We recognized that while specialized expertise is crucial, businesses need comprehensive solutions without the complexity of managing multiple vendors.
                    </p>
                    <p>
                      Today, we've built a unique model that combines our core technical excellence in web, app, and software development with a carefully vetted network of specialized agency partners. This approach allows us to deliver both depth and breadth in digital solutions.
                    </p>
                    <p>
                      Our in-house team focuses on what we do best - delivering exceptional technical solutions - while our partner network provides specialized services in their respective domains, all managed seamlessly through a single point of contact.
                    </p>
                  </div>
                </motion.div>
                
                {/* Evolution Timeline */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="space-y-8">
                    {/* Timeline Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF4D00] via-primary-light to-[#FF4D00]/30"></div>
                    
                    {/* Timeline Events */}
                    <div className="relative pl-16 space-y-8">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                      >
                        <div className="absolute -left-16 top-1 w-3 h-3 bg-[#FF4D00] rounded-full border-2 border-white dark:border-gray-900"></div>
                        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20 dark:border-white/10">
                          <span className="text-[#FF4D00] text-sm font-medium">February 2022</span>
                          <h3 className="font-technor text-lg text-black dark:text-white mt-1">Foundation</h3>
                          <p className="text-gray-700 dark:text-gray-300 text-sm font-pilcrow mt-1">
                            EdotStudio was born with a vision to simplify digital services for businesses
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                      >
                        <div className="absolute -left-16 top-1 w-3 h-3 bg-[#FF4D00] rounded-full border-2 border-white dark:border-gray-900"></div>
                        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20 dark:border-white/10">
                          <span className="text-[#FF4D00] text-sm font-medium">2022-2023</span>
                          <h3 className="font-technor text-lg text-black dark:text-white mt-1">Technical Excellence</h3>
                          <p className="text-gray-700 dark:text-gray-300 text-sm font-pilcrow mt-1">
                            Built core competencies in web, app, and software development
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="relative"
                      >
                        <div className="absolute -left-16 top-1 w-3 h-3 bg-[#FF4D00] rounded-full border-2 border-white dark:border-gray-900"></div>
                        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20 dark:border-white/10">
                          <span className="text-[#FF4D00] text-sm font-medium">2024</span>
                          <h3 className="font-technor text-lg text-black dark:text-white mt-1">Strategic Partnerships</h3>
                          <p className="text-gray-700 dark:text-gray-300 text-sm font-pilcrow mt-1">
                            Expanded capabilities through curated agency partnerships
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="relative"
                      >
                        <div className="absolute -left-16 top-1 w-3 h-3 bg-[#FF4D00] rounded-full border-2 border-white dark:border-gray-900 ring-4 ring-[#FF4D00]/20"></div>
                        <div className="bg-gradient-to-r from-[#FF4D00]/10 to-primary-light/5 backdrop-blur-sm rounded-lg p-4 border border-[#FF4D00]/30">
                          <span className="text-[#FF4D00] text-sm font-medium">Today</span>
                          <h3 className="font-technor text-lg text-black dark:text-white mt-1">Integrated Solutions Hub</h3>
                          <p className="text-gray-700 dark:text-gray-300 text-sm font-pilcrow mt-1">
                            Delivering comprehensive digital solutions through unified expertise
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4D00]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-light/5 rounded-full blur-2xl"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Model Section - New */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <header className="text-center mb-16">
              <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                OUR MODEL
              </div>
              <h2 className="text-3xl md:text-5xl mb-6 font-technor text-black dark:text-white">
                How We Work
              </h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-pilcrow">
                Our unique approach combines in-house expertise with strategic partnerships to deliver comprehensive solutions under one roof.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* In-House Expertise */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-[#FF4D00]/10 text-[#FF4D00]">
                    <RiCodeSLine className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-technor">Core Technical Team</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 font-pilcrow">
                  Our in-house development team specializes in:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <RiCheckLine className="text-[#FF4D00] mt-1 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 font-pilcrow">Web Development</span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-[#FF4D00] mt-1 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 font-pilcrow">App Development</span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-[#FF4D00] mt-1 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 font-pilcrow">Software Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-[#FF4D00] mt-1 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 font-pilcrow">UI/UX Design</span>
                  </li>
                </ul>
              </div>

              {/* Partner Network */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-[#FF4D00]/10 text-[#FF4D00]">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-technor">Partner Network</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 font-pilcrow">
                  Our vetted agency partners provide:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <RiCheckLine className="text-[#FF4D00] mt-1 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 font-pilcrow">Branding</span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-[#FF4D00] mt-1 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 font-pilcrow">Digital Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-[#FF4D00] mt-1 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 font-pilcrow">Business Services</span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-[#FF4D00] mt-1 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 font-pilcrow">Social Media Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <header className="text-center mb-16">
              <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                OUR IMPACT
              </div>
              <h2 className="text-3xl md:text-5xl mb-6 font-technor text-black dark:text-white">
                The Power of Partnership
              </h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-pilcrow">
                Our unique model has enabled us to deliver exceptional results for businesses worldwide.
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.article
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 dark:border-white/5 hover:border-primary-light/20 transition-all duration-300 group"
                >
                  <div className="mb-4">{achievement.icon}</div>
                  <h3 className="text-4xl md:text-5xl font-technor text-primary-light mb-2 group-hover:scale-110 origin-left transition-transform duration-300">{achievement.number}</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-pilcrow">{achievement.label}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack - Updated to focus on core technical expertise */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <header className="text-center mb-16">
              <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                OUR TECH STACK
              </div>
              <h2 className="text-3xl md:text-5xl mb-6 font-technor text-black dark:text-white">
                Technical Excellence
              </h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-pilcrow">
                Our in-house team leverages cutting-edge technologies to deliver robust technical solutions.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.article
                  key={tech.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:border-primary-light/40 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="mr-4 p-3 bg-white/10 dark:bg-black/20 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-technor text-black dark:text-white">{tech.category}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-pilcrow">{tech.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span 
                        key={item}
                        className="bg-white/10 dark:bg-black/20 px-3 py-1.5 rounded-full text-sm text-gray-700 dark:text-gray-300 font-pilcrow"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Network Section - New */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -top-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                  
                  <div className="relative">
                    <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4 font-pilcrow">
                      PARTNER NETWORK
                    </div>
                    <h2 className="text-3xl md:text-4xl font-technor text-primary-light mb-6">
                      Excellence Through Collaboration
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-8 font-pilcrow">
                      Our partner network consists of carefully vetted agencies, each bringing specialized expertise in their domain. This collaborative approach allows us to deliver comprehensive solutions while maintaining the highest standards of quality.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/5">
                    <h3 className="text-xl font-technor text-primary-light mb-2">Rigorous Vetting</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-pilcrow">
                      Partners are selected based on their track record, expertise, and alignment with our quality standards.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/5">
                    <h3 className="text-xl font-technor text-primary-light mb-2">Seamless Integration</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-pilcrow">
                      We manage all partner services, ensuring smooth collaboration and consistent quality across your project.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/5">
                    <h3 className="text-xl font-technor text-primary-light mb-2">Quality Assurance</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-pilcrow">
                      Every deliverable goes through our quality control process to ensure it meets our high standards.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden w-full">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/8 via-transparent to-primary-light/8"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#FF4D00]/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-light/15 rounded-full blur-3xl"></div>
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
              <div className="bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-3xl p-8 md:p-12 lg:p-16 border border-white/30 dark:border-white/15 relative overflow-hidden group shadow-xl hover:bg-white/20 dark:hover:bg-white/12 hover:border-white/40 dark:hover:border-white/20 hover:shadow-[0_20px_50px_rgba(255,77,0,0.15)] dark:hover:shadow-[0_20px_50px_rgba(255,77,0,0.2)] w-full transition-all duration-500">
                {/* Floating decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#FF4D00]/20 rounded-full blur-xl group-hover:bg-[#FF4D00]/25 group-hover:scale-110 transition-all duration-500"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-light/20 rounded-full blur-xl group-hover:bg-primary-light/25 group-hover:scale-110 transition-all duration-500"></div>
                
                <div className="relative z-10 text-center w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-[#FF4D00] text-white px-6 py-3 rounded-full text-sm font-medium mb-8 font-pilcrow shadow-lg hover:bg-[#FF4D00]/90 hover:scale-105 hover:-translate-y-1 transition-all duration-500"
                  >
                    <span>🚀</span>
                    <span>EXPERIENCE THE DIFFERENCE</span>
                  </motion.div>
                  
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-technor text-black dark:text-white mb-6 leading-tight">
                    Experience the Power of <br />
                    <span className="text-[#FF4D00]">Partnership</span>
                  </h2>
                  
                  <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-pilcrow leading-relaxed">
                    Let's discuss how our unique approach can transform your business. From concept to execution, we're your trusted digital partner.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full">
                    <Button
                      href="/contact"
                      className="bg-[#FF4D00] hover:bg-[#FF4D00]/90 text-white font-pilcrow shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-500"
                      size="lg"
                    >
                      Start Your Journey
                    </Button>
                    <Button
                      href="/portfolio"
                      variant="outline"
                      className="border-gray-300 dark:border-white/30 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/40 hover:scale-105 hover:-translate-y-1 font-pilcrow transition-all duration-500"
                      size="lg"
                    >
                      View Our Work
                    </Button>
                  </div>
                  
                  {/* Partnership benefits grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {[
                      {
                        icon: "🎯",
                        title: "Strategic Focus",
                        description: "Tailored solutions that align with your business goals"
                      },
                      {
                        icon: "⚡",
                        title: "Rapid Delivery",
                        description: "Efficient processes that get you to market faster"
                      },
                      {
                        icon: "🤝",
                        title: "True Partnership",
                        description: "Long-term relationship focused on your success"
                      }
                    ].map((benefit, index) => (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="text-center p-4 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/8 hover:border-white/30 dark:hover:border-white/15 hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-500"
                      >
                        <div className="text-2xl mb-3 hover:scale-110 transition-all duration-500">{benefit.icon}</div>
                        <h3 className="font-technor text-black dark:text-white mb-2">{benefit.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-pilcrow">{benefit.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
} 