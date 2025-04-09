'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, Share2, UserCheck, Bell, Mail } from 'lucide-react';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';

export default function Privacy() {
  const sections = [
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Data Collection",
      content: [
        "Personal Information: We collect contact details, payment information, and communication preferences.",
        "Technical Data: IP addresses, browser types, device information, and usage patterns.",
        "Project Data: Client content, project specifications, and communication history.",
        "Cookies: We use cookies to enhance user experience and analyze website traffic."
      ]
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "Data Protection",
      content: [
        "We implement industry-standard security measures to protect your data.",
        "All data is encrypted during transmission and storage.",
        "Regular security audits and updates are performed.",
        "Access to personal data is strictly controlled and logged."
      ]
    },
    {
      icon: <Share2 className="w-6 h-6 text-primary" />,
      title: "Data Usage & Sharing",
      content: [
        "We use your data to provide and improve our services.",
        "Data may be shared with service providers under strict confidentiality agreements.",
        "We may disclose data when required by law or to protect our rights.",
        "We never sell your personal information to third parties."
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6 text-primary" />,
      title: "Your Rights",
      content: [
        "Access your personal data and receive a copy.",
        "Request corrections to inaccurate data.",
        "Request deletion of your data (subject to legal requirements).",
        "Object to data processing or request processing restrictions.",
        "Data portability rights for your information."
      ]
    },
    {
      icon: <Bell className="w-6 h-6 text-primary" />,
      title: "Updates & Changes",
      content: [
        "We may update this policy periodically to reflect changes in our practices.",
        "Significant changes will be notified via email or website notice.",
        "Continued use of our services after changes constitutes acceptance.",
        "Previous versions of the policy are available upon request."
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Contact Us",
      content: [
        "For privacy-related inquiries: contact@edotstudio.com",
        "For data access requests: contact@edotstudio.com",
        "Last updated: 8 April 2025"
      ]
    }
  ];

  return (
    <main className="min-h-screen relative dark:bg-black pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              PRIVACY POLICY
            </div>
            <h1 className="text-4xl md:text-6xl font-technor mb-6 text-black dark:text-white">
              Your Privacy Matters
            </h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-pilcrow">
              We are committed to protecting your privacy and ensuring the security of your personal information. This policy outlines how we collect, use, and safeguard your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-technor text-black dark:text-white">{section.title}</h2>
                </div>
                <ul className="space-y-4">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-pilcrow">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
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
                <h2 className="text-2xl font-technor text-white">Important Disclaimer</h2>
              </div>
              <p className="text-white/80 font-pilcrow">
                This privacy policy is subject to change without notice. We recommend reviewing this policy periodically to stay informed about how we are protecting your information. By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 