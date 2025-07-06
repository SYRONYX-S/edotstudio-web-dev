'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, Shield, DollarSign, AlertCircle, FileCheck } from 'lucide-react';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';

export default function Terms() {
  const sections = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Project Workflow",
      content: [
        "Initial consultation and requirement gathering",
        "Proposal submission and scope definition",
        "Maintenance contract review and approval",
        "Project kickoff upon contract approval and advance payment",
        "Development and milestone reviews",
        "Testing and quality assurance",
        "Client review and feedback implementation",
        "Final delivery and deployment",
        "Invoice generation and payment processing",
        "Post-launch support and maintenance"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Timeline & Delivery",
      content: [
        "Project timelines are established in the initial proposal",
        "Milestones are set with specific deliverables",
        "Regular progress updates and check-ins",
        "Client feedback periods are included in timeline",
        "Revisions within scope are accommodated",
        "Additional time for change requests may be required"
      ]
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Payment Terms",
      content: [
        "50% advance payment required to start project",
        "Remaining payment due upon project completion",
        "Additional features charged separately",
        "Maintenance fees billed monthly/annually",
        "Late payment fees may apply",
        "All prices are in USD unless specified"
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Intellectual Property",
      content: [
        "Client retains rights to their content and data",
        "EdotStudio maintains rights to development tools",
        "Custom code ownership transfers upon full payment",
        "Third-party licenses remain with respective owners",
        "Portfolio rights reserved for EdotStudio"
      ]
    },
    {
      icon: <FileCheck className="w-6 h-6 text-primary" />,
      title: "Client Responsibilities",
      content: [
        "Provide clear project requirements",
        "Timely feedback and content delivery",
        "Maintain regular communication",
        "Review and approve deliverables",
        "Adhere to payment schedule",
        "Respect intellectual property rights"
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-primary" />,
      title: "Termination & Refunds",
      content: [
        "14-day written notice required for termination",
        "Partial refunds based on work completed",
        "No refunds on completed milestones",
        "Termination fees may apply",
        "Project files provided upon settlement"
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
              TERMS OF SERVICE
            </div>
            <h1 className="text-4xl md:text-6xl font-technor mb-6 text-black dark:text-white">
              Our Terms & Conditions
            </h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-pilcrow">
              Please read these terms carefully before engaging our services. These terms outline our working relationship and mutual responsibilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section>
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
                <AlertCircle className="w-8 h-8 text-primary-light mr-4" />
                <h2 className="text-2xl font-technor text-white">Important Notice</h2>
              </div>
              <div className="space-y-4">
                <p className="text-white/80 font-pilcrow">
                  These terms of service are subject to change without notice. We recommend reviewing these terms periodically to stay informed about any updates.
                </p>
                <p className="text-white/80 font-pilcrow">
                  By engaging our services, you agree to these terms and conditions. If you have any questions, please contact us at contact.edotstudio@gmail.com
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