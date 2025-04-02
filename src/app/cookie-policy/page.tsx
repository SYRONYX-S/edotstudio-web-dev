'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Info, AlertCircle } from 'lucide-react';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import { AbstractBackground } from '@/components/AbstractBackground';

export default function CookiePolicy() {
  const sections = [
    {
      icon: <Cookie className="w-6 h-6 text-primary" />,
      title: "What Are Cookies",
      content: [
        "Cookies are small text files stored on your device when you visit our website.",
        "They help us provide a better user experience and analyze website traffic.",
        "Cookies can be essential for website functionality or used for analytics and preferences.",
        "You can control cookie settings through your browser preferences."
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Types of Cookies We Use",
      content: [
        "Essential Cookies: Required for basic website functionality.",
        "Analytics Cookies: Help us understand how visitors use our site.",
        "Preference Cookies: Remember your settings and preferences.",
        "Marketing Cookies: Track your online activity for targeted advertising.",
        "Session Cookies: Temporary cookies that expire when you close your browser.",
        "Persistent Cookies: Remain on your device until you delete them."
      ]
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "Cookie Management",
      content: [
        "You can accept or decline cookies through our cookie consent banner.",
        "Browser settings allow you to control cookie preferences.",
        "Disabling certain cookies may affect website functionality.",
        "You can clear cookies from your browser at any time.",
        "Third-party cookies are subject to their respective privacy policies."
      ]
    },
    {
      icon: <Info className="w-6 h-6 text-primary" />,
      title: "How We Use Cookies",
      content: [
        "Improve website performance and user experience.",
        "Analyze website traffic and user behavior.",
        "Remember your preferences and settings.",
        "Provide personalized content and recommendations.",
        "Track marketing campaign effectiveness.",
        "Ensure secure and reliable service delivery."
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Third-Party Cookies",
      content: [
        "Google Analytics: Website traffic analysis.",
        "Social Media: Integration with social platforms.",
        "Payment Processors: Secure payment processing.",
        "Marketing Tools: Campaign tracking and optimization.",
        "Content Delivery Networks: Faster content loading.",
        "Each third-party has its own privacy policy."
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-primary" />,
      title: "Updates & Changes",
      content: [
        "We may update our cookie policy periodically.",
        "Changes will be reflected on this page.",
        "Significant changes will be notified via website notice.",
        "Continued use of our website implies acceptance of changes.",
        "Last updated: 8 April 2025"
      ]
    }
  ];

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
              COOKIE POLICY
            </div>
            <h1 className="text-4xl md:text-6xl font-technor mb-6 text-black dark:text-white">
              Our Cookie Usage
            </h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-pilcrow">
              Learn about how we use cookies to enhance your browsing experience and improve our website's functionality.
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

      {/* Additional Information Section */}
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
                <Info className="w-8 h-8 text-primary-light mr-4" />
                <h2 className="text-2xl font-technor text-white">Additional Information</h2>
              </div>
              <div className="space-y-4">
                <p className="text-white/80 font-pilcrow">
                  For more information about cookies and how to manage them, please visit our Privacy Policy page or contact us at contact@edotstudio.com
                </p>
                <p className="text-white/80 font-pilcrow">
                  By using our website, you consent to the use of cookies as described in this policy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 