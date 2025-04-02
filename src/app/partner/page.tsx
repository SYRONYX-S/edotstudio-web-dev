'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Users, Award, Coins, TrendingUp, Gift, Code, FileCode, Globe } from 'lucide-react';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/Button';
import { AbstractBackground } from '@/components/AbstractBackground';

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
  return (
    <main className="min-h-screen relative dark:bg-black pt-32 pb-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AbstractBackground />
      </div>
      
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
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
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