'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Users, Award, Coins, TrendingUp, Gift, Code, FileCode, Globe, Shield } from 'lucide-react';
import { hapticFeedback } from '@/utils/haptics';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/Button';

// Partner programs data
const partnerPrograms = [
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Referral Program",
    subtitle: "For Individuals",
    description: "Earn competitive commissions by referring clients to our services. Our referral program rewards you for connecting us with businesses that need our expertise.",
    benefits: [
      "Competitive commission on referred projects",
      "Commission issued once client completes full payment",
      "No complex procedures or paperwork",
      "Supporting materials to help you promote our services"
    ]
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Agency Partnership",
    subtitle: "For Design & Marketing Agencies",
    description: "Partner with us to expand your service offerings without increasing overhead. We work as your white-label development team to deliver exceptional results for your clients.",
    benefits: [
      "Seamless white-label collaboration",
      "Preferential rates for agency partners",
      "Priority project scheduling",
      "We can attend client meetings as part of your team",
      "Technical consultation on projects"
    ]
  }
];

// Reasons to partner
const reasons = [
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Growth Opportunities",
    description: "Expand your business and revenue streams through our partnership programs designed for mutual success."
  },
  {
    icon: <Coins className="w-8 h-8 text-primary" />,
    title: "Competitive Compensation",
    description: "Earn attractive commissions and enjoy preferential rates that reward your contribution to our shared success."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Complementary Services",
    description: "Focus on your core strengths while we handle the technical aspects, creating a win-win partnership that benefits both businesses."
  }
];

export default function Partner() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    partnerType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    hapticFeedback.selection();
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    hapticFeedback.impactMedium();
    
    try {
      const response = await fetch('/api/submit-partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        hapticFeedback.notificationSuccess();
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          partnerType: '',
          message: ''
        });
      } else {
        hapticFeedback.notificationError();
        throw new Error(result.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      hapticFeedback.notificationError();
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              PARTNERSHIPS
            </div>
            <h1 className="text-4xl md:text-6xl font-technor mb-6 text-black dark:text-white">
              Partner With Us
            </h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-pilcrow mb-8">
              Join our network of partners and grow your business while providing top-tier digital solutions to your clients. We believe in creating mutually beneficial relationships.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#programs" variant="default">
                Explore Programs <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button href="#contact" variant="outline">
                Become a Partner
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section id="programs" className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedTitle
              title="Partnership Programs"
              className="text-3xl md:text-5xl mb-6 font-technor text-black dark:text-white"
            />
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-pilcrow">
              Choose the partnership model that works best for your business needs. Whether you're an individual or an agency, we have options designed for your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">{program.icon}</div>
                <h3 className="text-2xl font-technor text-black dark:text-white mb-2">{program.title}</h3>
                <p className="text-primary text-lg mb-4 font-pilcrow">{program.subtitle}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{program.description}</p>
                
                <h4 className="text-lg font-medium mb-4 font-pilcrow text-black dark:text-white">Key Benefits:</h4>
                <ul className="space-y-3">
                  {program.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Special Offer Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary/10 dark:bg-primary/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-primary/20 relative overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-primary/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full filter blur-2xl translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  EXCLUSIVE OFFER
                </div>
                <h2 className="text-3xl md:text-4xl font-technor text-black dark:text-white mb-6">
                  Special Offer for Active Partners
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                  Partners who bring in 5 web/app/software projects or generate above 1 lakh INR in revenue (minimum 2 projects) receive a free website worth 40k INR. This is in addition to your regular commission or preferential rates.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="#contact" variant="default" className="bg-primary-light">
                    Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/10">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center">
                    <Gift className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-technor text-center text-black dark:text-white mb-4">What You Get</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Free website worth 40k INR</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Priority project scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Enhanced B2B pricing for agencies</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Why Partner With Us */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedTitle
              title="Why Partner With Us"
              className="text-3xl md:text-5xl mb-6 font-technor text-black dark:text-white"
            />
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-pilcrow">
              Discover the advantages of joining our partner network and how we support your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">{reason.icon}</div>
                <h3 className="text-xl font-technor text-black dark:text-white mb-4">{reason.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Types of Projects Section - New SEO-focused section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              OUR EXPERTISE
            </div>
            <h2 className="text-3xl md:text-4xl font-technor text-black dark:text-white mb-6">
              Projects We Specialize In
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-pilcrow">
              We excel in these areas, providing top-tier solutions that your clients will love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-technor text-black dark:text-white mb-4">Web Development</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Custom websites, e-commerce solutions, and web applications built with modern technologies and best practices.
              </p>
              <p className="text-primary font-medium">Our primary specialization</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <FileCode className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-technor text-black dark:text-white mb-4">App Development</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Mobile applications for iOS and Android platforms, built with native or cross-platform technologies.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-technor text-black dark:text-white mb-4">Software Solutions</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Custom software solutions, from simple automation tools to complex enterprise applications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Partner Policy Section */}
      <section className="relative z-10 mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10 dark:border-white/5 relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <svg className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 text-primary-light" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M48.8,-52.2C61.9,-37.4,71,-18.7,72.1,1.1C73.3,20.9,66.6,41.8,53.5,57.2C40.3,72.6,20.1,82.5,-0.9,83.4C-21.9,84.4,-43.8,76.5,-59.3,61.2C-74.9,45.9,-84.1,23,-81.8,2.2C-79.5,-18.5,-65.8,-37,-49.9,-51.7C-33.9,-66.4,-17,-77.2,1.2,-78.4C19.3,-79.7,38.6,-71.3,48.8,-52.2Z" transform="translate(100 100)"></path>
              </svg>
            </div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-primary-light mr-4" />
                <h2 className="text-2xl font-technor text-white">Partner Policy</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-technor text-white mb-4">Eligibility & Participation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Only verified individuals and agencies can participate.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Partners must provide genuine outsourcing requests.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-technor text-white mb-4">Project Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Clear project scope and requirements must be provided.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Timeline and deliverables must be clearly defined.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Quality standards must be mutually agreed upon.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-technor text-white mb-4">Behavior & Ethics</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">No misrepresentation of services or false claims.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Transparency required in project requirements.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Clear communication channels must be maintained.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-technor text-white mb-4">Project Ownership & Branding</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Projects delivered under our brand unless agreed otherwise.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Agencies can have work done under their branding.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Unauthorized branding or reselling prohibited.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-technor text-white mb-4">Bonus & Reward Criteria</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Free website reward requires meeting minimum revenue criteria.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Rewards non-transferable to other parties.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-technor text-white mb-4">Termination & Violations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Immediate termination for system exploitation.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Program modifications reserved at our discretion.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 dark:border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-technor text-black dark:text-white mb-6">
                  Ready to Partner?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  Fill out the form to start the conversation about how we can work together. We especially welcome partners interested in web development projects, though we offer competitive arrangements for all our services including branding, app development, and software solutions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black dark:text-white">Simple Approval Process</h3>
                      <p className="text-gray-600 dark:text-gray-400">Get approved and start earning without complex procedures</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black dark:text-white">Win-Win Partnership</h3>
                      <p className="text-gray-600 dark:text-gray-400">Expand your offerings and increase your revenue</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-black/30 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-black/30 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                      Company Name (if applicable)
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-black/30 dark:text-white"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                      Partnership Type
                    </label>
                    <select
                      id="partnerType"
                      name="partnerType"
                      required
                      value={formData.partnerType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-black/30 dark:text-white"
                    >
                      <option value="">Select partnership type</option>
                      <option value="referral">Referral Partner</option>
                      <option value="agency">Agency Partner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-black/30 dark:text-white"
                      placeholder="Tell us a bit about yourself and what you're looking for in a partnership..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 