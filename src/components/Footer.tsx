'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiLinkedinFill, RiTwitterXFill, RiFacebookFill, RiInstagramLine, RiMailLine, RiPhoneLine, RiMapPinLine, RiArrowRightLine } from 'react-icons/ri';
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
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <RiLinkedinFill className="w-5 h-5" />, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: <RiTwitterXFill className="w-5 h-5" />, href: 'https://twitter.com' },
    { name: 'Facebook', icon: <RiFacebookFill className="w-5 h-5" />, href: 'https://facebook.com' },
    { name: 'Instagram', icon: <RiInstagramLine className="w-5 h-5" />, href: 'https://instagram.com' },
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
              <p className="text-gray-300 mb-0 font-supreme">Get the latest design trends, news and exclusive offers directly in your inbox.</p>
            </div>
            <div className="lg:col-span-2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 flex-grow focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary hover:bg-primary-dark text-white font-technor px-6 py-3 rounded-lg transition-colors flex items-center justify-center whitespace-nowrap">
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
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <div className="bg-primary rounded-full p-2 mr-3">
                  <span className="text-white text-xl font-bold">E.</span>
                </div>
                <div className="text-2xl font-bold font-technor text-white">EdotStudio</div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 font-supreme">
              Top-tier digital solutions agency specializing in branding, marketing, web/app/software development, and graphic design.
            </p>
            
            <div className="flex items-center space-x-4 mb-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/5 hover:bg-primary text-white p-2 rounded-full transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
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
            <ul className="space-y-3 font-supreme">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors flex items-center">
                    <span className="mr-2 text-xs">▸</span> {link.name}
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
            <ul className="space-y-3 font-supreme">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors flex items-center">
                    <span className="mr-2 text-xs">▸</span> {link.name}
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
            <ul className="space-y-5 font-supreme">
              <li className="flex items-start">
                <div className="bg-white/5 rounded-full p-2 mr-3 mt-1">
                  <RiMailLine className="text-primary" />
                </div>
                <div>
                  <p className="text-gray-200 font-medium mb-0.5">Email Us</p>
                  <a href="mailto:info@edotstudio.com" className="text-gray-400 hover:text-primary transition-colors">
                    info@edotstudio.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/5 rounded-full p-2 mr-3 mt-1">
                  <RiPhoneLine className="text-primary" />
                </div>
                <div>
                  <p className="text-gray-200 font-medium mb-0.5">Call Us</p>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/5 rounded-full p-2 mr-3 mt-1">
                  <RiMapPinLine className="text-primary" />
                </div>
                <div>
                  <p className="text-gray-200 font-medium mb-0.5">Visit Us</p>
                  <p className="text-gray-400">
                    123 Creative Street,<br />
                    Innovation City, 12345<br />
                    United States
                  </p>
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
              <p className="text-gray-500 text-sm font-supreme">
                &copy; {currentYear} EdotStudio. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap items-center space-x-6 font-supreme">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-primary text-sm transition-colors"
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