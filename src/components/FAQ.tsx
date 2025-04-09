'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { hapticFeedback } from '@/utils/haptics';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive digital solutions including web development, app development, UI/UX design, and digital marketing services through our strategic partnerships."
  },
  {
    question: "How do you handle project collaboration?",
    answer: "We follow an agile methodology with regular client communication. Our process includes discovery, planning, development, testing, and post-launch support phases to ensure project success."
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with modern technologies including React, Next.js, Node.js, and various other frameworks. Our tech stack is chosen based on project requirements to deliver optimal performance."
  },
  {
    question: "How do you ensure project quality?",
    answer: "We implement rigorous quality assurance processes, including code reviews, automated testing, and thorough manual testing before deployment to ensure high-quality deliverables."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. We provide detailed project plans with clear milestones and regular updates to keep you informed throughout the development process."
  }
];

const FAQItem = ({ question, answer }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    hapticFeedback.selection();
  };

  return (
    <motion.div
      initial={false}
      className="border-b border-gray-200 dark:border-gray-800"
    >
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={handleToggle}
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
    <section className="py-20 dark:bg-black/10 ">
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