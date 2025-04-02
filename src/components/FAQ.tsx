'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does EdotStudio offer?",
    answer: "EdotStudio offers a comprehensive suite of digital solutions including custom web development, mobile app development, UI/UX design, e-commerce solutions, and digital transformation consulting. Through our strategic partnerships, we also provide integrated digital marketing and branding services to ensure a complete digital presence for your business."
  },
  {
    question: "How does your development process work?",
    answer: "Our development process follows an agile methodology with five key phases: 1) Discovery & Planning - understanding your needs and creating a roadmap, 2) Design & Prototyping - creating wireframes and visual designs, 3) Development - building your solution with regular updates, 4) Testing & QA - ensuring everything works perfectly, and 5) Launch & Support - deploying your solution and providing ongoing maintenance."
  },
  {
    question: "What technologies and platforms do you specialize in?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and various other frameworks. For e-commerce, we work with platforms like Shopify and WooCommerce. Our mobile development stack includes React Native and Flutter. We choose technologies based on your specific needs to ensure optimal performance and scalability."
  },
  {
    question: "How do you handle project pricing and timelines?",
    answer: "Project pricing and timelines are customized based on your specific requirements. We provide detailed proposals that break down costs and timelines by project phase. For most projects, we offer flexible payment terms and maintain complete transparency throughout the development process. We can work with both fixed-price and time-and-materials models."
  },
  {
    question: "What makes EdotStudio different from other agencies?",
    answer: "EdotStudio stands out through our commitment to excellence, innovative approach, and focus on delivering measurable business value. We combine technical expertise with strategic thinking, ensuring your digital solutions not only look great but also drive real business results. Our partnership model also means you get access to a full range of digital services under one roof."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions remain up-to-date and perform optimally. This includes regular updates, security patches, performance monitoring, and technical support. We also provide training and documentation to help your team manage the solution effectively."
  },
  {
    question: "Can you work with existing systems and integrate with third-party tools?",
    answer: "Absolutely! We have extensive experience in integrating with existing systems and third-party tools. Whether it's CRM systems, payment gateways, analytics tools, or custom APIs, we ensure seamless integration while maintaining security and performance standards."
  },
  {
    question: "How do you ensure the security of digital solutions?",
    answer: "Security is a top priority in all our projects. We implement industry best practices for secure coding, use encryption for sensitive data, conduct regular security audits, and ensure compliance with relevant data protection regulations. We also provide recommendations for ongoing security maintenance and updates."
  }
];

const FAQItem = ({ question, answer }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      className="border-b border-gray-200 dark:border-gray-800"
    >
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {question}
        </span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-6 w-6 text-primary" />
          ) : (
            <Plus className="h-6 w-6 text-primary" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-6">
              <p className="text-gray-600 dark:text-gray-400">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-2xl md:text-4xl mb-0 font-technor">
            Frequently Asked Questions
          </h2>
          <p className="font-pilcrow text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;