'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiArrowRightLine, RiMailLine, RiPhoneLine, RiMapPinLine } from 'react-icons/ri';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const footerLinks = {
    services: [
      { name: 'Branding', href: '/services#branding' },
      { name: 'Web & App Development', href: '/services#development' },
      { name: 'Software Solutions', href: '/services#software' },
      { name: 'Graphic Design', href: '/services#design' },
      { name: 'Marketing', href: '/services#marketing' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
    ]
  };

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com/edotstudio', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com/edotstudio', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com/edotstudio', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/edotstudio', label: 'LinkedIn' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Top decorative border */}
      <div className="w-full h-1 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-700"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c75000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      </div>
      
      {/* Newsletter section */}
      <div className="container mx-auto px-4 py-16">
        <div className="relative z-10 bg-gradient-to-br from-primary-900/50 to-primary-900/30 backdrop-blur-sm rounded-2xl p-8 mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-technor text-white mb-2">Stay Updated</h2>
              <p className="text-gray-300 mb-0 font-pilcrow">Get the latest design trends, news and exclusive offers directly in your inbox.</p>
            </div>
            <div className="lg:col-span-2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 flex-grow focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary dark:bg-primary hover:bg-primary-dark dark:hover:bg-primary-dark text-white font-technor px-6 py-3 rounded-lg transition-colors flex items-center justify-center whitespace-nowrap">
                  Subscribe <RiArrowRightLine className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center">
                <Image
                  src="/logo-light.svg"
                  alt="EdotStudio Logo"
                  width={40}
                  height={40}
                  className="mr-3"
                />
                <div className="text-2xl font-bold font-technor text-white group-hover:text-primary transition-colors duration-300">
                  EdotStudio
                </div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 font-pilcrow">
              Complete business solutions agency providing web development, app development, marketing, legal services, and comprehensive business consulting to transform and grow your business.
            </p>
            
            <div className="flex items-center space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/5 hover:bg-primary text-white p-2 rounded-full transition-all duration-300 hover:shadow-glow-sm relative group overflow-hidden"
                  aria-label={social.label}
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-light/40 to-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
                  <social.icon className="w-5 h-5 relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-xl font-technor text-white relative mb-6 pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-16 after:bg-primary">Services</h3>
            <ul className="space-y-3 font-pilcrow">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">▸</span>
                    <span className="transform translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-xl font-technor text-white relative mb-6 pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-16 after:bg-primary">Company</h3>
            <ul className="space-y-3 font-pilcrow">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">▸</span>
                    <span className="transform translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-xl font-technor text-white relative mb-6 pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-16 after:bg-primary">Contact Us</h3>
            <ul className="space-y-5 font-pilcrow">
              <li className="flex items-start group">
                <div className="bg-white/5 rounded-full p-2 mr-3 mt-1 transition-colors duration-300 group-hover:bg-primary/20">
                  <RiMailLine className="text-primary" />
                </div>
                <div>
                  <p className="text-gray-200 font-medium mb-0.5">Email Us</p>
                  <a href="mailto:contact.edotstudio@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                    contact.edotstudio@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/5 rounded-full p-2 mr-3 mt-1 transition-colors duration-300 group-hover:bg-primary/20">
                  <RiPhoneLine className="text-primary" />
                </div>
                <div>
                  <p className="text-gray-200 font-medium mb-0.5">Call Us</p>
                  <div className="space-y-1">
                    <motion.a 
                      href="tel:+916282381374" 
                      className="text-gray-400 hover:text-primary transition-all duration-300 inline-block"
                      whileHover={{ x: 5 }}
                    >
                      <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">
                        +91 6282381374
                      </span>
                    </motion.a>
                    <br />
                    <motion.a 
                      href="tel:+918304081013" 
                      className="text-gray-400 hover:text-primary transition-all duration-300 inline-block"
                      whileHover={{ x: 5 }}
                    >
                      <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">
                        +91 8304081013
                      </span>
                    </motion.a>
                    <br />
                    <motion.a 
                      href="tel:+919188108310" 
                      className="text-gray-400 hover:text-primary transition-all duration-300 inline-block"
                      whileHover={{ x: 5 }}
                    >
                      <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">
                        +91 9188108310
                      </span>
                    </motion.a>
                  </div>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/5 rounded-full p-2 mr-3 mt-1 transition-colors duration-300 group-hover:bg-primary/20">
                  <RiMapPinLine className="text-primary" />
                </div>
                <div>
                  <p className="text-gray-200 font-medium mb-0.5">Visit Us</p>
                  <motion.a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-primary transition-all duration-300 inline-block"
                    whileHover={{ x: 5 }}
                  >
                    <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">
                      123 Business Street, Suite 100<br />
                      New York, NY 10001
                    </span>
                  </motion.a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm font-pilcrow font-semibold">
                &copy; {currentYear} EdotStudio. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-primary text-sm font-pilcrow transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 