'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, DollarSign, Shield, Scale, Building2, Mail, AlertCircle } from 'lucide-react';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import { AbstractBackground } from '@/components/AbstractBackground';

export default function Terms() {
  const sections = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Services Overview",
      content: [
        "Project-based Development: Custom web, app, and software solutions.",
        "Outsourced Development: Dedicated development teams and resources.",
        "Freelance Collaboration: Partnering with skilled professionals.",
        "Design Services: UI/UX, graphic design, and branding solutions.",
        "Marketing Services: Digital marketing and SEO optimization."
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Project Workflow",
      content: [
        "Initial consultation and requirement gathering.",
        "Detailed proposal with timeline and cost breakdown.",
        "Project kickoff and milestone planning.",
        "Regular progress updates and client feedback.",
        "Final delivery and post-launch support.",
        "Project closure and documentation handover."
      ]
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Payment Terms",
      content: [
        "50% advance payment for project initiation.",
        "30% payment upon project milestone completion.",
        "20% payment upon final delivery.",
        "Late payment may result in service suspension.",
        "All prices are exclusive of applicable taxes.",
        "Payment methods: Bank transfer, credit card, or digital wallets."
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Intellectual Property",
      content: [
        "Clients retain rights to their provided content.",
        "EdotStudio retains rights to coding techniques and methodologies.",
        "Branding elements remain client property.",
        "Portfolio display rights for completed projects.",
        "No external branding in delivered projects.",
        "Source code ownership upon full payment."
      ]
    },
    {
      icon: <Scale className="w-6 h-6 text-primary" />,
      title: "Client Responsibilities",
      content: [
        "Provide accurate project requirements.",
        "Timely content and asset delivery.",
        "Review and feedback within agreed timelines.",
        "Maximum 3 revision rounds per deliverable.",
        "Maintain communication channels.",
        "Provide necessary access and credentials."
      ]
    },
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      title: "Legal Framework",
      content: [
        "Governed by Indian law and jurisdiction.",
        "Disputes subject to local courts.",
        "Force majeure provisions apply.",
        "Liability limited to service fees.",
        "No responsibility for third-party services.",
        "Confidentiality obligations apply."
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
              TERMS OF SERVICE
            </div>
            <h1 className="text-4xl md:text-6xl font-technor mb-6 text-black dark:text-white">
              Our Terms & Conditions
            </h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-pilcrow">
              Please read these terms carefully before engaging our services. By working with us, you agree to these terms and conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
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

      {/* Important Notices Section */}
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
                <AlertCircle className="w-8 h-8 text-primary-light mr-4" />
                <h2 className="text-2xl font-technor text-white">Important Notices</h2>
              </div>
              <div className="space-y-4">
                <p className="text-white/80 font-pilcrow">
                  These terms may be updated periodically. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
                <p className="text-white/80 font-pilcrow">
                  For any questions about these terms, please contact us at contact@edotstudio.com
                </p>
                <p className="text-white/80 font-pilcrow">
                  Last updated: 8 April 2025
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 