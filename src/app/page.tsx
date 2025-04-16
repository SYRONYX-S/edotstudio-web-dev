'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RiArrowRightLine, RiArrowRightUpLine, RiCheckboxCircleLine, RiBriefcase4Line, RiTimeLine, RiTeamLine } from 'react-icons/ri';
import { Lightbulb, Code, Rocket, Shield, Users, Award, TrendingUp, Globe } from 'lucide-react';
import { FaCode, FaPalette, FaMobileAlt, FaCloud, FaRobot, FaChartLine, FaBalanceScale, FaCogs } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/Button';
import CountUp from '@/components/CountUp';
import ServiceCard from '@/components/ServiceCard';
import ParallaxSection from '@/components/ParallaxSection';
import MarqueeClients from '@/components/MarqueeClients';
import TestimonialSlider from '@/components/TestimonialSlider';
import PortfolioItem from '@/components/PortfolioItem';
import ClientsMarquee from '@/components/ClientsMarquee';
import FAQ from '@/components/FAQ';
import StructuredData from '@/components/StructuredData';
import ServiceCarousel from '@/components/ServiceCarousel';

// Data
import { services, stats, testimonials, clients, portfolioProjects } from '@/data';

// Structured data for the agency
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "EdotStudio",
  "description": "EdotStudio is a top-tier digital solutions agency specializing in branding, marketing, web/app/software development, and graphic design.",
  "image": "https://edotstudio.com/images/og-image.jpg",
  "url": "https://edotstudio.com",
  "telephone": "+1-123-456-7890",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "City",
    "addressRegion": "Region",
    "postalCode": "Postal Code",
    "addressCountry": "Country"
  },
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-17:00",
  "sameAs": [
    "https://twitter.com/edotstudio",
    "https://www.facebook.com/edotstudio",
    "https://www.linkedin.com/company/edotstudio"
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "0",
      "longitude": "0"
    },
    "geoRadius": "Global"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Web Development"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "App Development"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Branding"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Marketing"
      }
    }
  ]
};

// Use a placeholder for missing images
const fallbackImage = '/images/hero/hero-graphic.svg';

// Update the service type definition
interface Service {
  title: string;
  description: string;
  icon: IconType;
  inHouse: boolean;
}

const newServices: Service[] = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built by our in-house development team.',
    icon: FaCode,
    inHouse: true
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications crafted by our expert developers.',
    icon: FaMobileAlt,
    inHouse: true
  },
  {
    title: 'Software Solutions',
    description: 'Custom software and enterprise solutions developed by our core team.',
    icon: FaCogs,
    inHouse: true
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed by our partner agency Brandlifté.',
    icon: FaPalette,
    inHouse: false
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing through our certified agency partners.',
    icon: FaChartLine,
    inHouse: false
  },
  {
    title: 'Business Services',
    description: 'Legal, financial, and business consulting via our trusted partner network.',
    icon: FaBalanceScale,
    inHouse: false
  }
];

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  
  // Parallax for left column
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityLeft = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Parallax for right column (slightly different offset/factor for variation)
  const yRight = useTransform(scrollYProgress, [0, 1], [0, 250]); // Scrolls slightly less
  const opacityRight = useTransform(scrollYProgress, [0, 0.6], [1, 0]); // Fades slightly later

  return (
    <>
      <StructuredData data={structuredData} />
      
      {/* Hero Section */}
      <section 
        ref={targetRef} 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
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
        
        {/* Frosted glass overlay */}
        <div className="absolute inset-0 bg-white/5 dark:bg-black/10 backdrop-blur-[5px] z-2"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          {/* Flex container for left/right columns - added items-center */}
          <div className="flex flex-col md:flex-row items-center text-left pt-0 max-w-[100%] justify-between">
            {/* Left content column */}
          <motion.div 
              style={{ y: yLeft, opacity: opacityLeft }} 
              className="relative w-full max-w-full md:max-w-[50%] flex-shrink-0"
              initial={{ translateZ: 0 }}
            transition={{ 
                translateY: { type: "spring", damping: 15 }
              }}
            >
              <h1 className="sr-only">EdotStudio - Premium Web & App Development Agency</h1>
              
              {/* Badge positioned toward the top left */}
              <div className="mb-0 mt-[44px]">
          <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-[#FF4D00] dark:bg-[#FF4D00] text-white dark:text-white px-4 py-1.5 rounded-full text-xs font-medium mb-5 tracking-wider"
                >
                  ONE-STOP BUSINESS SOLUTION
                </motion.div>
              </div>
              
              {/* Large headline with split design */}
              <div className="mb-8 relative">
          <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <h2 className="text-[2.8rem] md:text-[3.8rem] leading-[0.95] font-medium font-technor tracking-tight text-black dark:text-white mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF3800] via-[#FF5500] to-[#FF6B00]/90">
                      Complete
                    </span>
                  </h2>
                  <h2 className="text-[2.8rem] md:text-[3.8rem] leading-[0.95] font-medium font-technor tracking-tight mb-2 text-gray-800 dark:text-gray-100">
                    Digital
                  </h2>
                  <h2 className="text-[2.8rem] md:text-[3.8rem] leading-[0.95] font-medium font-technor tracking-tight text-black dark:text-white">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF3800] via-[#FF5500] to-[#FF6B00]/90">
                      Solutions
                    </span>
                  </h2>
                  <h2 className="text-[2.8rem] md:text-[3.8rem] leading-[0.95] font-medium font-technor tracking-tight text-gray-900 dark:text-gray-50">
                    For Your Business
                  </h2>
                </motion.div>
                
                {/* Decorative elements */}
          <motion.div 
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute -top-8 -right-4 w-32 h-32 bg-[#FF4D00]/10 rounded-full blur-3xl"
          />
          <motion.div 
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -bottom-8 left-12 w-40 h-40 bg-gradient-to-r from-[#FF4D00]/20 to-[#FF6B00]/20 rounded-full blur-3xl"
          />
        </div>
        
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-base md:text-lg text-gray-700 dark:text-gray-200 font-pilcrow leading-relaxed mb-10 max-w-md"
              >
                Your one-stop destination for all business needs. From web development to legal services, we partner with top agencies to provide comprehensive solutions that drive growth.
              </motion.p>
              
              {/* Buttons with modern styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-row flex-wrap gap-3 mb-0"
              >
                <Button 
                  href="/contact" 
                  size="lg"
                  className='bg-[#FF4D00] dark:bg-[#FF4D00] text-white dark:text-white hover:bg-[#FF6B00] dark:hover:bg-[#FF6B00] font-pilcrow relative overflow-hidden group'
                >
                  <span className="relative z-10">Start Your Business Transformation</span>
                  <motion.span 
                    className="absolute inset-0 bg-[#FF6B00] dark:bg-[#FF6B00] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                </Button>
                <Button 
                  href="/services" 
                  variant="outline"
                  size="lg"
                  className="border-[#FF4D00]/40 dark:border-[#FF4D00]/40 text-black dark:text-white hover:border-[#FF4D00] hover:text-white dark:hover:text-white hover:bg-[#FF4D00] dark:hover:bg-[#FF4D00]"
                >
                  Explore Our Services
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Right side visual element - Restoring specific gradient background */}
            <motion.div
              style={{ y: yRight, opacity: opacityRight, minHeight: '500px' }}
              className="hidden md:flex relative w-full md:max-w-[45%] items-center justify-center"
            >
              {/* The logo container with the specific right-to-left orange gradient */}
              <div 
                className="relative rounded-2xl overflow-hidden p-6 w-full h-full flex items-center justify-center 
                           bg-gradient-to-r from-transparent via-[#FF4D00]/5 to-[#FF4D00]/15 
                           dark:from-transparent dark:via-[#FF4D00]/10 dark:to-[#FF4D00]/20"
                style={{ minHeight: '500px' }}
              >
                 {/* Theme-responsive logo with subtle internal glow (optional) */}
                 <div className="relative flex items-center justify-center w-full h-full">
                    {/* Optional internal glow */}
                    {/* <div className="absolute w-full h-full bg-[#FF4D00]/5 rounded-full filter blur-[70px] opacity-50"></div> */}
                    <Image src="/logo-dark.svg" width={350} height={350} alt="EdotStudio Logo Dark" className="relative w-4/5 max-w-[400px] h-auto object-contain block dark:hidden z-10" />
                    <Image src="/logo-light.svg" width={350} height={350} alt="EdotStudio Logo Light" className="relative w-4/5 max-w-[400px] h-auto object-contain hidden dark:block z-10" />
                  </div>
                  {/* Subtle grid pattern can remain if desired */}
                  {/* <div className="absolute inset-0 bg-grid-white/[0.02] mask-radial-gradient opacity-30"></div> */}
              </div>
            </motion.div>
          </div>
            
          {/* Auto-sliding carousel for services preview */}
          <ServiceCarousel services={newServices} />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden dark:bg-black/10 w-full expertise-section">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="uppercase font-pilcrow inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </div>
            <AnimatedTitle 
              title="In-House Excellence & Strategic Partnerships"
              type="reveal"
              className="text-2xl md:text-4xl mb-4 font-technor"
            />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-pilcrow">
              Experience the perfect blend of our core technical expertise and our curated network of specialized agency partners, delivering comprehensive solutions under one roof.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* In-House Services */}
            <div className="glass-card p-8 w-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[#FF4D00]/10 text-[#FF4D00]">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-technor">Core Technical Team</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-pilcrow">
                Our in-house development team specializes in delivering cutting-edge technical solutions with direct oversight and quality control.
              </p>
              <div className="space-y-4 w-full">
                {newServices.filter(service => service.inHouse).map((service, index) => (
                  <div key={service.title} className="flex items-start p-4 bg-white/50 dark:bg-black/20 rounded-xl w-full">
                    <div className="p-2 rounded-lg bg-[#FF4D00]/10 text-[#FF4D00] mr-4">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-technor text-lg mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-pilcrow">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          
            {/* Partner Services */}
            <div className="glass-card p-8 w-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[#FF4D00]/10 text-[#FF4D00]">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-technor">Partner Network</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-pilcrow">
                Access our carefully curated network of industry-leading agencies, each vetted for excellence in their specialized domains.
              </p>
              <div className="space-y-4 w-full">
                {newServices.filter(service => !service.inHouse).map((service, index) => (
                  <div key={service.title} className="flex items-start p-4 bg-white/50 dark:bg-black/20 rounded-xl w-full">
                    <div className="p-2 rounded-lg bg-[#FF4D00]/10 text-[#FF4D00] mr-4">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-technor text-lg mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-pilcrow">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
            {[
              {
                title: "Seamless Integration",
                description: "One point of contact managing both in-house and partner services, ensuring smooth project delivery.",
                icon: <RiCheckboxCircleLine className="w-6 h-6" />
              },
              {
                title: "Quality Assurance",
                description: "Rigorous vetting process for partners and strict quality control for all deliverables.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Cost Efficiency",
                description: "Optimize your budget with our flexible model combining in-house expertise and partner specialists.",
                icon: <TrendingUp className="w-6 h-6" />
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="glass-card p-6 w-full h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-[#FF4D00]/10 text-[#FF4D00]">
                    {benefit.icon}
                  </div>
                  <h4 className="font-technor text-lg">{benefit.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-pilcrow">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Button 
              href="/services" 
              className='bg-[#FF4D00] text-white hover:bg-[#FF6B00]'
              icon={<RiArrowRightLine />}
            >
              Explore Our Service Model
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 relative overflow-hidden dark:bg-black/10 w-full">
        <div className="animated-bg-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 w-full">
            <div>
              <div className="uppercase font-pilcrow inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Portfolio
              </div>
              <AnimatedTitle 
                title="Featured Works"
                color="primary"
                className="text-2xl md:text-4xl mb-0 font-technor"
              />
              <p className="text-gray-600 dark:text-gray-400 max-w-xl font-pilcrow">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {portfolioProjects.slice(0, 3).map((project, index) => (
              <PortfolioItem
                key={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                href={project.href}
                index={index}
                className="frosted-container hover-tilt w-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Marquee Section */}
      <section className="py-20 relative overflow-hidden dark:bg-black/10 w-full">
        <div className="animated-bg-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <div className="uppercase font-pilcrow inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Partners
            </div>
            <AnimatedTitle 
              title="Trusted by Industry Leaders"
              className="text-2xl md:text-4xl mb-0 font-technor"
            />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-supreme">
              We collaborate with top agencies to provide comprehensive solutions for your business needs.
            </p>
          </div>
          
          <div className="relative w-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent dark:from-background-dark z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent dark:from-background-dark z-10" />
            <motion.div
              className="flex client-carousel items-center py-8 w-[calc(200%+100px)]"
              initial={{ x: 0 }}
              animate={{ x: "calc(-50% - 50px)" }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
            >
              {[...Array(2)].map((_, arrayIndex) => (
                <div key={arrayIndex} className="flex min-w-[50%] justify-around items-center">
                  {clients.map((client, index) => (
                    <div 
                      key={index + (arrayIndex * clients.length)} 
                      className="mx-4 md:mx-8 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    >
                      <div className="h-12 md:h-16 w-auto">
                        <Image
                          src={client.logo}
                          alt={`Partner Logo ${index + 1}`}
                          width={120}
                          height={60}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 relative overflow-hidden dark:bg-black/10 ">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02] -z-10" />
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-[500px] h-[500px]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="uppercase font-pilcrow inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Approach
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl mb-0 font-technor"
            >
              Our Proven Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-pilcrow"
            >
              We follow a systematic approach to deliver exceptional results for every project
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {[
              {
                title: "Discovery & Strategy",
                description: "We dive deep into your business needs and craft a tailored strategy that aligns with your goals.",
                icon: <Lightbulb className="w-6 h-6 text-primary" />,
                color: "from-primary/10 to-primary/5"
              },
              {
                title: "Design & Development",
                description: "Our team creates intuitive designs and develops robust solutions using cutting-edge technologies.",
                icon: <Code className="w-6 h-6 text-primary" />,
                color: "from-primary/5 to-primary/10"
              },
              {
                title: "Testing & Deployment",
                description: "Rigorous testing ensures quality while our deployment process guarantees smooth transitions.",
                icon: <Shield className="w-6 h-6 text-primary" />,
                color: "from-primary/10 to-primary/5"
              },
              {
                title: "Launch & Support",
                description: "We ensure successful launches and provide ongoing support to keep your solution running optimally.",
                icon: <Rocket className="w-6 h-6 text-primary" />,
                color: "from-primary/5 to-primary/10"
              }
            ].map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-black/10 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 p-1 transition-all duration-300 ease-in-out group-hover:border-primary/50">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${approach.color} opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out`} />

                  {/* Content Container */}
                  <div className="relative p-6">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/5 dark:bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <span className="text-primary text-sm font-semibold">{index + 1}</span>
                    </div>

                    {/* Icon Container */}
                    <div className="mb-6 w-14 h-14 rounded-xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ease-in-out">
                      {approach.icon}
                    </div>

                    {/* Text Content */}
                    <h3 className="uppercase font-pilcrow text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary transition-all duration-300">
                      {approach.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 transition-all duration-300">
                      {approach.description}
                    </p>

                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/0 to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 relative dark:bg-black/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="uppercase font-pilcrow inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Impact
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl mb-0 font-technor"
            >
              Transforming Businesses Through Partnership
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-pilcrow"
            >
              Our unique combination of in-house expertise and strategic partnerships delivers exceptional results for businesses worldwide
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Technical Projects",
                description: "Successful web, app, and software solutions delivered by our in-house team.",
                icon: <Code className="w-8 h-8 text-primary" />,
                stat: "100+",
                statLabel: "Projects",
              },
              {
                title: "Partner Network",
                description: "Vetted agency partners providing specialized services across different domains.",
                icon: <Users className="w-8 h-8 text-primary" />,
                stat: "15+",
                statLabel: "Partners",
              },
              {
                title: "Client Success",
                description: "Businesses transformed through our integrated service approach.",
                icon: <TrendingUp className="w-8 h-8 text-primary" />,
                stat: "95%",
                statLabel: "Satisfaction",
              },
              {
                title: "Global Reach",
                description: "Serving clients worldwide with our comprehensive solution model.",
                icon: <Globe className="w-8 h-8 text-primary" />,
                stat: "10+",
                statLabel: "Countries",
              }
            ].map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full relative rounded-2xl bg-white/30 dark:bg-black/10 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 p-6 overflow-hidden transition-all duration-300 ease-in-out group-hover:border-primary/50 group-hover:translate-y-[-5px]">
                  <div className="absolute top-6 right-6">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary mb-1 transform group-hover:scale-110 group-hover:translate-x-[-5px] transition-all duration-300 ease-in-out">
                        {impact.stat}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 transition-all duration-300">
                        {impact.statLabel}
                      </div>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 blur-xl transform group-hover:scale-150 transition-all duration-500 ease-out" />
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center transform group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300 ease-in-out">
                      {impact.icon}
                    </div>
                  </div>

                  <h3 className="font-pilcrow uppercase text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary transition-all duration-300">
                    {impact.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-all duration-300 font-pilcrow">
                    {impact.description}
                  </p>

                  <div className="absolute bottom-0 right-0 w-24 h-24">
                    <div className="absolute bottom-0 right-0 w-full h-full bg-primary/5 dark:bg-primary/10 transform rotate-45 translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-all duration-500 ease-out" />
                  </div>
                </div>

                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/0 to-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - New Section */}
      <section className="py-20 bg-transparent dark:bg-black/10 ">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="uppercase font-pilcrow inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </div>
              <AnimatedTitle 
                title="Your Complete Business Partner"
                className="text-2xl md:text-4xl mb-2 font-technor"
              />
              <p className="text-gray-600 dark:text-gray-300 mb-8 font-pilcrow">
                At EdotStudio, we're more than just a digital agency. We're your one-stop partner for all business needs, connecting you with top experts in various domains to provide comprehensive solutions.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'Comprehensive Solutions', description: 'From web development to legal services, we offer everything your business needs under one roof.' },
                  { title: 'Expert Partnerships', description: 'We collaborate with top agencies in their respective fields to deliver excellence in every service.' },
                  { title: 'Seamless Experience', description: 'One point of contact for all your business needs, simplifying your journey to growth.' },
                  { title: 'Cutting-Edge Technology', description: 'We leverage the latest technologies to create future-proof solutions for your business.' },
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
                      <p className="text-gray-600 dark:text-gray-300 font-pilcrow">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button href="/about" className='bg-primary-light dark:bg-transparent dark:border-2 dark:border-primary-light dark:hover:bg-primary-light text-white dark:text-white hover:bg-primary-light font-pilcrow'>
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
                  <div className="text-white text-xl md:text-2xl font-technor mb-2">Ready to transform your business?</div>
                  <p className="text-white/80 mb-4 font-pilcrow">Let's create something amazing together.</p>
                  <Button 
                    href="/contact" 
                    size="sm" 
                    className="bg-white dark:bg-white text-primary dark:text-black hover:bg-primary-light dark:hover:bg-primary-light hover:text-white dark:hover:text-white"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-20 bg-transparent dark:bg-black/10">
        <div className="container mx-auto px-4">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.7, ease: "easeOut" }}
             className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20 relative overflow-hidden"
           >
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
               >
                 <div>
                   <div className="uppercase font-pilcrow inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                     Partner Program
                   </div>
                   <AnimatedTitle 
                     title="Grow Your Business With Us"
                     className="text-2xl md:text-4xl mb-6 font-technor"
                   />
                   <p className="text-gray-700 dark:text-gray-300 mb-8 font-pilcrow">
                     Join our network of partners and earn competitive commissions by referring clients to our services. Whether you're an individual or an agency, our partnership programs are designed to create mutually beneficial relationships.
                   </p>
                   
                   <div className="flex flex-wrap gap-4">
                     <Button 
                       href="/partner" 
                       className="bg-primary-light text-white hover:bg-primary"
                       icon={<Users className="w-5 h-5" />}
                     >
                       Become a Partner
                     </Button>
                   </div>
                 </div>
               </motion.div>
               <div className="space-y-6">
                 {[
                    { title: "Referral Program", description: "Earn competitive commissions by referring clients. Commission issued once client completes full payment." },
                    { title: "Agency Partnership", description: "Expand your service offerings without increasing overhead. We work as your white-label development team." },
                    { title: "Special Offer", description: "Partners who bring in 3+ projects annually receive upgraded commission rates and exclusive resources." }
                 ].map((card, index) => (
                    <motion.div
                       key={card.title}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true, amount: 0.3 }}
                       transition={{ duration: 0.5, delay: 0.1 + index * 0.15, ease: "easeOut" }}
                       className="flex items-start glass-card p-5 border-l-4 border-primary"
                     >
                       <div className="w-full">
                         <h3 className="font-technor text-lg text-gray-800 dark:text-white mb-2">{card.title}</h3>
                         <p className="text-gray-600 dark:text-gray-300 font-pilcrow">{card.description}</p>
                       </div>
                    </motion.div>
                 ))}
               </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-transparent via-background-muted/20 to-transparent dark:via-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4 font-pilcrow uppercase">
              Testimonials
            </div>
            <AnimatedTitle 
              title="What Our Clients Say"
              className="text-2xl md:text-4xl mb-0 font-technor"
            />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-supreme">
              Don't just take our word for it. Hear what our clients have to say about working with us.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <TestimonialSlider testimonials={testimonials} />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Moved to before CTA */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 bg-primary-light dark:bg-primary-light text-white w-full">
        <div className="container text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="frosted-container py-12 px-6"
           >
            <AnimatedTitle 
              title="Let's Create the Future Together"
              color="light"
              className="text-3xl md:text-5xl mb-6 font-technor"
            />
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg font-pilcrow">
              Ready to elevate your digital presence? Contact us today to discuss how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                size="lg"
                className="bg-white dark:bg-white text-black dark:text-black hover:bg-primary-light"
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
              <Button 
                href="/partner" 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                icon={<Users className="w-5 h-5" />}
              >
                Partner With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
