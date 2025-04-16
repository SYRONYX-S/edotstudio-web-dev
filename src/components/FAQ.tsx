'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  showOnMobile: boolean;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What services does your agency offer?",
      answer: "We offer a comprehensive range of digital services including Web Development, App Development, Branding, Graphic Design, Marketing, Software Solutions, UI/UX Design, Cloud Solutions, Legal Solutions, Cybersecurity, and Data Analytics. Each service is tailored to meet specific business needs.",
      showOnMobile: true
    },
    {
      question: "How do you approach new projects?",
      answer: "Our approach begins with a thorough discovery phase where we understand your business goals, target audience, and specific requirements. We then develop a strategic plan, create detailed wireframes and designs, and proceed with development using an agile methodology.",
      showOnMobile: true
    },
    {
      question: "What technologies and platforms do you work with?",
      answer: "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, and various cloud platforms like AWS, Azure, and Google Cloud. For mobile development, we use React Native, Flutter, and native iOS/Android development.",
      showOnMobile: false
    },
    {
      question: "How do you ensure quality in your deliverables?",
      answer: "Quality assurance is central to our process. We implement rigorous testing protocols including unit testing, integration testing, and user acceptance testing. Our development follows industry best practices and coding standards.",
      showOnMobile: true
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. A typical website project might take 4-8 weeks, while a comprehensive mobile app could take 3-6 months. We provide detailed timelines during our initial consultation.",
      showOnMobile: true
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions remain up-to-date and perform optimally. This includes regular updates, security patches, performance monitoring, and technical support.",
      showOnMobile: false
    },
    {
      question: "How do you handle project communication and collaboration?",
      answer: "We maintain transparent communication through regular meetings, progress reports, and dedicated project management tools. Our team is available during business hours for immediate support, and we use collaborative platforms to ensure seamless coordination.",
      showOnMobile: true
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on factors such as scope, complexity, and timeline. We offer flexible payment plans and can work within various budgets. During our initial consultation, we provide a detailed quote outlining all costs and deliverables.",
      showOnMobile: true
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes, we work with clients globally and have experience managing projects across different time zones. We use efficient communication tools and processes to ensure smooth collaboration regardless of location.",
      showOnMobile: false
    },
    {
      question: "How do you handle intellectual property and confidentiality?",
      answer: "We take intellectual property and confidentiality seriously. All our clients sign comprehensive NDAs before project discussions begin. We ensure that all work produced belongs to the client upon final payment, and we maintain strict confidentiality protocols.",
      showOnMobile: false
    },
    {
      question: "What makes your agency different from others?",
      answer: "We differentiate ourselves through our comprehensive approach, technical expertise, and commitment to client success. Our team combines creative design with technical excellence, and we focus on delivering solutions that drive real business results.",
      showOnMobile: true
    },
    {
      question: "How do you stay current with industry trends and technologies?",
      answer: "Our team regularly participates in industry conferences, workshops, and training programs. We invest in continuous learning and experimentation with new technologies. This ensures we can recommend and implement the most effective and current solutions.",
      showOnMobile: false
    },
    {
      question: "What happens if I need changes or revisions to the project?",
      answer: "We understand that requirements can evolve during a project. Our agile methodology allows for flexibility and iterations. We have a clear process for handling change requests, which includes impact assessment, timeline adjustments if needed, and transparent communication.",
      showOnMobile: false
    },
    {
      question: "Do you offer training for my team?",
      answer: "Yes, we provide comprehensive training for your team on any solutions we develop. This includes documentation, hands-on training sessions, and ongoing support. We ensure your team is comfortable and confident in using and maintaining the solutions we create.",
      showOnMobile: true
    },
    {
      question: "How do you measure project success?",
      answer: "We establish clear KPIs and success metrics at the beginning of each project. These might include performance metrics, user engagement statistics, conversion rates, or other business-specific goals. We provide regular reports and analytics to track progress.",
      showOnMobile: false
    }
  ];

  // Split FAQ items into two columns for desktop
  const midPoint = Math.floor(faqItems.length / 2);
  const leftColumnItems = faqItems.slice(0, midPoint);
  const rightColumnItems = faqItems.slice(midPoint);

  // If we have an odd number of items, ensure balance by visibility not by count
  if (faqItems.length % 2 !== 0) {
    // Count visible items in each column for desktop
    const countVisibleLeft = leftColumnItems.length;
    const countVisibleRight = rightColumnItems.length;
    
    // If uneven, move the first item from right to left column
    if (countVisibleLeft < countVisibleRight) {
      leftColumnItems.push(rightColumnItems.shift()!);
    }
  }

  const renderFAQItem = (item: FAQItem, index: number, columnOffset: number = 0) => {
    const actualIndex = index + columnOffset;
    // Skip items that shouldn't show on mobile
    if (!item.showOnMobile && typeof window !== 'undefined' && window.innerWidth < 768) {
      return null;
    }

    return (
      <div 
        key={actualIndex}
        className="border-b border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <button
          className="w-full px-4 py-4 text-left flex justify-between items-center transition-colors"
          onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
        >
          <span className="text-base font-technor text-gray-900 dark:text-gray-100">{item.question}</span>
          <ChevronDown 
            className={`w-4 h-4 text-primary transition-transform ${openIndex === actualIndex ? 'transform rotate-180' : ''}`}
          />
        </button>
        
        <AnimatePresence>
          {openIndex === actualIndex && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="py-16 w-full">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-technor mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and approach.
          </p>
        </div>
        
        {/* Single column on mobile, dual column on desktop */}
        <div className="w-full mx-auto">
          {/* Mobile view: single column */}
          <div className="md:hidden space-y-3 w-full">
            {faqItems.map((item, index) => (
              item.showOnMobile ? renderFAQItem(item, index, 0) : null
            ))}
          </div>
          
          {/* Desktop view: dual columns */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-3 w-full">
            <div className="space-y-3 w-full">
              {leftColumnItems.map((item, index) => renderFAQItem(item, index, 0))}
            </div>
            <div className="space-y-3 w-full">
              {rightColumnItems.map((item, index) => renderFAQItem(item, index, midPoint))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;