'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiArrowRightLine, RiCheckLine, RiCodeSLine, RiSmartphoneLine, RiPaletteLine, RiMegaphoneLine, RiTeamLine } from 'react-icons/ri';
import { Users } from 'lucide-react';
import { IconType } from 'react-icons';
import { FaCode, FaPaintBrush, FaMegaport, FaDesktop, FaMobileAlt, FaCloud, FaCogs, FaPalette, FaBalanceScale, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/Button';
import ParallaxSection from '@/components/ParallaxSection';
import PageHero from '@/components/PageHero';

// Service detail data
const serviceDetails = [
  {
    id: "branding",
    title: "Branding",
    subtitle: "Building memorable brand identities",
    description: "We create compelling brand identities that resonate with your audience and distinguish your business in the market. Our branding services help you establish a strong visual presence and communicate your values effectively.",
    image: "/images/services/branding.jpg",
    features: [
      "Brand Strategy Development",
      "Logo & Visual Identity Design",
      "Brand Guidelines",
      "Brand Positioning",
      "Brand Messaging",
      "Rebranding Services",
      "Brand Voice & Tone",
      "Visual Identity Systems"
    ],
    process: [
      { step: 1, title: "Research", description: "In-depth market and competitor analysis to understand your positioning" },
      { step: 2, title: "Strategy", description: "Define your brand's unique value proposition and target audience" },
      { step: 3, title: "Design", description: "Create visual elements that embody your brand identity" },
      { step: 4, title: "Implementation", description: "Roll out your brand identity across all channels and touchpoints" }
    ]
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
      'API Development & Integration',
      'Custom WordPress Development',
      'Headless CMS Solutions',
      'Web Performance Optimization'
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
      'Push Notification Integration',
      'Offline Functionality',
      'Analytics & Tracking',
      'App Security & Testing'
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
      'Brand Style Guides',
      'Visual Identity Systems',
      'Motion Graphics',
      '3D Design & Rendering'
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
      'Conversion Rate Optimization',
      'Marketing Analytics & Reporting',
      'Influencer Marketing',
      'Video Marketing'
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
  {
    id: 'software-solutions',
    title: 'Software Solutions',
    subtitle: 'Custom enterprise software development',
    description: 'We develop robust, scalable software solutions tailored to your business needs. Our enterprise software development services help streamline operations, improve efficiency, and drive innovation across your organization.',
    image: '/images/services/software.jpg',
    features: [
      'Custom Software Development',
      'Enterprise Resource Planning (ERP)',
      'Customer Relationship Management (CRM)',
      'Business Intelligence Solutions',
      'Cloud Migration Services',
      'Legacy System Modernization',
      'API Development & Integration',
      'Database Design & Optimization',
      'Workflow Automation',
      'Security Implementation'
    ],
    process: [
      { step: 1, title: 'Requirements Analysis', description: 'Gather and analyze business requirements and technical specifications.' },
      { step: 2, title: 'Architecture Design', description: 'Design scalable and secure software architecture.' },
      { step: 3, title: 'Development', description: 'Build the software using best practices and modern technologies.' },
      { step: 4, title: 'Testing', description: 'Conduct comprehensive testing to ensure quality and reliability.' },
      { step: 5, title: 'Deployment', description: 'Deploy the solution with minimal disruption to operations.' },
      { step: 6, title: 'Support', description: 'Provide ongoing maintenance and support services.' },
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    subtitle: 'Creating intuitive user experiences',
    description: 'Our UI/UX design services focus on creating beautiful, intuitive interfaces that enhance user engagement and satisfaction. We combine aesthetic excellence with functional design to deliver experiences that users love.',
    image: '/images/services/ui-ux.jpg',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'User Interface Design',
      'User Experience Design',
      'Interaction Design',
      'Usability Testing',
      'Design Systems',
      'Responsive Design',
      'Accessibility Compliance',
      'Design Handoff'
    ],
    process: [
      { step: 1, title: 'Research', description: 'Understand user needs, behaviors, and pain points.' },
      { step: 2, title: 'Wireframing', description: 'Create low-fidelity wireframes to outline structure and flow.' },
      { step: 3, title: 'Design', description: 'Develop high-fidelity designs with attention to detail.' },
      { step: 4, title: 'Prototyping', description: 'Build interactive prototypes for testing and validation.' },
      { step: 5, title: 'Testing', description: 'Conduct usability testing and gather feedback.' },
      { step: 6, title: 'Refinement', description: 'Refine designs based on testing results and feedback.' },
    ],
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    subtitle: 'Scalable cloud infrastructure and services',
    description: 'We help businesses leverage the power of cloud computing to improve scalability, reliability, and cost-efficiency. Our cloud solutions enable organizations to focus on innovation while we handle the technical infrastructure.',
    image: '/images/services/cloud.jpg',
    features: [
      'Cloud Strategy & Consulting',
      'Cloud Migration Services',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Serverless Architecture',
      'Cloud Security',
      'DevOps Implementation',
      'Containerization',
      'Cloud Cost Optimization',
      'Disaster Recovery Planning'
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluate current infrastructure and identify migration opportunities.' },
      { step: 2, title: 'Strategy', description: 'Develop a cloud migration and implementation strategy.' },
      { step: 3, title: 'Migration', description: 'Migrate applications and data to the cloud with minimal disruption.' },
      { step: 4, title: 'Optimization', description: 'Optimize cloud resources for performance and cost-efficiency.' },
      { step: 5, title: 'Security', description: 'Implement robust security measures to protect cloud resources.' },
      { step: 6, title: 'Management', description: 'Provide ongoing cloud management and support services.' },
    ],
  },
  {
    id: 'legal-solutions',
    title: 'Legal Solutions',
    subtitle: 'Comprehensive legal services for digital businesses',
    description: 'Our legal services are designed specifically for digital businesses, helping you navigate complex regulatory landscapes and ensure compliance while protecting your interests and intellectual property.',
    image: '/images/services/legal.jpg',
    features: [
      'Business Entity Formation',
      'Intellectual Property Protection',
      'Privacy Policy & Terms of Service',
      'GDPR & Data Protection Compliance',
      'Contract Drafting & Review',
      'Licensing Agreements',
      'Employment & Contractor Agreements',
      'Regulatory Compliance',
      'Dispute Resolution',
      'Legal Risk Assessment'
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Understand your business model and identify legal needs.' },
      { step: 2, title: 'Assessment', description: 'Evaluate current legal status and identify potential risks.' },
      { step: 3, title: 'Strategy', description: 'Develop a comprehensive legal strategy for your business.' },
      { step: 4, title: 'Implementation', description: 'Put necessary legal documents and protections in place.' },
      { step: 5, title: 'Compliance', description: 'Ensure ongoing compliance with relevant regulations.' },
      { step: 6, title: 'Maintenance', description: 'Regular updates to legal documents as your business evolves.' },
    ],
  }
];

// Service overview data
const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'We build modern, responsive websites and web applications that deliver exceptional user experiences.',
    icon: FaCode,
    link: '#web-development'
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Create powerful mobile solutions for iOS and Android with intuitive user experiences.',
    icon: FaMobileAlt,
    link: '#app-development'
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Build a memorable brand identity that resonates with your audience and stands out in the market.',
    icon: FaPaintBrush,
    link: '#branding'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Deliver stunning visuals that effectively communicate your message across all platforms.',
    icon: RiPaletteLine,
    link: '#graphic-design'
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Drive growth through strategic digital marketing campaigns that deliver measurable results.',
    icon: RiMegaphoneLine,
    link: '#marketing'
  },
  {
    id: 'software-solutions',
    title: 'Software Solutions',
    description: 'Custom enterprise software development to streamline operations and drive innovation.',
    icon: FaCogs,
    link: '#software-solutions'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Create intuitive, engaging user experiences that delight your customers and drive conversions.',
    icon: FaPalette,
    link: '#ui-ux-design'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Leverage cloud computing for improved scalability, reliability, and cost-efficiency.',
    icon: FaCloud,
    link: '#cloud-solutions'
  },
  {
    id: 'legal-solutions',
    title: 'Legal Solutions',
    description: 'Comprehensive legal setup and compliance services for your digital business.',
    icon: FaBalanceScale,
    link: '#legal-solutions'
  }
];

export default function Services() {
  
  return (
    <main className="relative services-page min-h-screen">
      <PageHero
        badge="Our Services"
        title="Comprehensive Digital Solutions"
        description="Explore our wide range of services designed to elevate your brand and drive business growth, from strategy to execution."
      />

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-dark-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 glass-card backdrop-blur-none md:backdrop-blur-lg"
                >
                  <div className="text-3xl text-primary mb-4">
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-technor text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-supreme text-sm">{service.description}</p>
                  <Button 
                    href={`/services/${service.id}`}
                    icon={<RiArrowRightLine />}
                    variant="outline"
                    className="text-sm"
                  >
                    Learn More
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <AnimatePresence>
            {serviceDetails.map((service, index) => (
              <section
                key={service.id}
                id={service.id}
                className={`py-20 ${
                  index % 2 === 0 ? 'bg-primary/5 dark:bg-black/20' : 'bg-white dark:bg-transparent'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Service Content */}
                  <div
                    className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} font-supreme`}
                  >
                    <div className="mb-2 inline-block py-1 px-3 bg-primary/10 rounded-full -left-1 relative">
                      <span className="text-primary text-sm font-medium font-pilcrow uppercase">{service.subtitle}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-roundo uppercase font-semibold text-primary-light dark:text-primary mb-6 break-words">{service.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-8 font-pilcrow">{service.description}</p>
                    
                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-technor mb-4">What We Offer</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start">
                            <RiCheckLine className="text-primary mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 font-pilcrow">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Process */}
                    <div>
                      <h3 className="text-xl font-technor mb-4">Our Process</h3>
                      <div className="space-y-4">
                        {service.process?.map((item, index) => (
                          <div key={index} className="flex">
                            <div className="mr-4 flex-shrink-0">
                              <div className="w-8 h-8 rounded-full bg-primary dark:bg-primary text-white flex items-center justify-center font-medium">
                                {item.step}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-technor text-primary mb-1">{item.title}</h3>
                              <p className="text-gray-600 dark:text-gray-400 font-pilcrow">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button 
                        href={`/services/${service.id}`}
                        icon={<RiArrowRightLine />}
                        className="bg-primary text-white hover:bg-primary-dark"
                      >
                        View Full Details
                      </Button>
                    </div>
                  </div>
                  
                  {/* Service Image */}
                  <div
                    className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-xl overflow-hidden group shadow-lg`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </section>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-20 bg-white/5 dark:bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 dark:border-white/5"
            >
              <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4 font-pilcrow">
                FOR AGENCIES & FREELANCERS
              </div>
              <h2 className="text-3xl md:text-4xl font-technor text-black dark:text-white mb-6">
                Partner With Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 font-pilcrow">
                Are you an agency owner or freelancer looking to expand your service offerings? Partner with EdotStudio to provide top-tier development services to your clients without increasing overhead. We offer competitive referral commissions and white-label partnerships.
              </p>
              <Button 
                href="/partner" 
                className="bg-primary-light text-white hover:bg-primary"
              >
                Explore Partnership Opportunities
              </Button>
            </div>
            
            <div
              className="space-y-6"
            >
              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/5">
                <h3 className="text-xl font-technor text-black dark:text-white mb-3">For Design Agencies</h3>
                <p className="text-gray-700 dark:text-gray-300 font-pilcrow">
                  Focus on design while we handle development. We'll work as your white-label development team to deliver exceptional results for your clients.
                </p>
              </div>
              
              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/5">
                <h3 className="text-xl font-technor text-black dark:text-white mb-3">For Marketing Agencies</h3>
                <p className="text-gray-700 dark:text-gray-300 font-pilcrow">
                  Complement your marketing strategies with high-performance websites and applications that convert visitors into customers.
                </p>
              </div>
              
              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/5">
                <h3 className="text-xl font-technor text-black dark:text-white mb-3">For Individual Referrals</h3>
                <p className="text-gray-700 dark:text-gray-300 font-pilcrow">
                  Earn competitive commissions by connecting us with businesses that need our expertise. Commissions are issued once the client completes full payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden w-full">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/10 via-transparent to-primary-light/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FF4D00]/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary-light/15 rounded-full blur-3xl"></div>
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
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 lg:p-16 border border-white/25 dark:border-white/15 relative overflow-hidden group hover:bg-white/15 dark:hover:bg-white/8 hover:border-white/35 dark:hover:border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 shadow-xl w-full">
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-36 h-36 bg-[#FF4D00]/20 rounded-full blur-xl group-hover:bg-[#FF4D00]/25 group-hover:scale-110 transition-all duration-700"></div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-primary-light/20 rounded-full blur-xl group-hover:bg-primary-light/25 group-hover:scale-110 transition-all duration-700"></div>
              
              <div className="relative z-10 text-center w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-[#FF4D00] text-white px-6 py-3 rounded-full text-sm font-medium mb-8 font-pilcrow shadow-lg hover:bg-[#FF4D00]/90 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                >
                  <span>✨</span>
                  <span>TRANSFORM YOUR BUSINESS</span>
                </motion.div>
                
                <AnimatedTitle 
                  title="Ready to Transform Your Business?"
                  className="text-3xl md:text-5xl lg:text-6xl mb-6 font-technor text-black dark:text-white group-hover:text-[#FF4D00] dark:group-hover:text-[#FF4D00] transition-colors duration-500"
                />
                
                <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10 text-lg md:text-xl font-pilcrow leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">
                  Let's discuss how our services can help you achieve your business goals and create a standout digital presence that drives results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full">
                  <Button 
                    href="/contact" 
                    className="bg-[#FF4D00] hover:bg-[#FF4D00]/90 text-white font-pilcrow shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                    size="lg"
                  >
                    Get in Touch
                  </Button>
                  <Button 
                    href="/portfolio" 
                    variant="outline"
                    className="border-gray-300 dark:border-white/30 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/40 hover:scale-105 hover:-translate-y-1 font-pilcrow transition-all duration-300"
                    size="lg"
                  >
                    View Our Work
                  </Button>
                </div>
                
                {/* Service highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {[
                    {
                      icon: "🚀",
                      title: "Fast Delivery",
                      description: "Quick turnaround without compromising quality"
                    },
                    {
                      icon: "💎",
                      title: "Premium Quality",
                      description: "Exceptional standards in every project"
                    },
                    {
                      icon: "🎯",
                      title: "Goal-Oriented",
                      description: "Solutions designed for your specific objectives"
                    }
                  ].map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center p-4 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/8 hover:border-white/30 dark:hover:border-white/15 hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="text-2xl mb-3 hover:scale-110 transition-transform duration-300">{highlight.icon}</div>
                      <h3 className="font-technor text-black dark:text-white mb-2 hover:text-[#FF4D00] dark:hover:text-[#FF4D00] transition-colors duration-300">{highlight.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-pilcrow hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300">{highlight.description}</p>
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