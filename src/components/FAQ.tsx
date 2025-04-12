'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What services does your agency offer?",
      answer: "We offer a comprehensive range of digital services including Web Development, App Development, Branding, Graphic Design, Marketing, Software Solutions, UI/UX Design, Cloud Solutions, Legal Solutions, Cybersecurity, and Data Analytics. Each service is tailored to meet specific business needs."
    },
    {
      question: "How do you approach new projects?",
      answer: "Our approach begins with a thorough discovery phase where we understand your business goals, target audience, and specific requirements. We then develop a strategic plan, create detailed wireframes and designs, and proceed with development using an agile methodology."
    },
    {
      question: "What technologies and platforms do you work with?",
      answer: "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, and various cloud platforms like AWS, Azure, and Google Cloud. For mobile development, we use React Native, Flutter, and native iOS/Android development."
    },
    {
      question: "How do you ensure quality in your deliverables?",
      answer: "Quality assurance is central to our process. We implement rigorous testing protocols including unit testing, integration testing, and user acceptance testing. Our development follows industry best practices and coding standards."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. A typical website project might take 4-8 weeks, while a comprehensive mobile app could take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions remain up-to-date and perform optimally. This includes regular updates, security patches, performance monitoring, and technical support."
    },
    {
      question: "How do you handle project communication and collaboration?",
      answer: "We maintain transparent communication through regular meetings, progress reports, and dedicated project management tools. Our team is available during business hours for immediate support, and we use collaborative platforms to ensure seamless coordination."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on factors such as scope, complexity, and timeline. We offer flexible payment plans and can work within various budgets. During our initial consultation, we provide a detailed quote outlining all costs and deliverables."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes, we work with clients globally and have experience managing projects across different time zones. We use efficient communication tools and processes to ensure smooth collaboration regardless of location."
    },
    {
      question: "How do you handle intellectual property and confidentiality?",
      answer: "We take intellectual property and confidentiality seriously. All our clients sign comprehensive NDAs before project discussions begin. We ensure that all work produced belongs to the client upon final payment, and we maintain strict confidentiality protocols."
    },
    {
      question: "What makes your agency different from others?",
      answer: "We differentiate ourselves through our comprehensive approach, technical expertise, and commitment to client success. Our team combines creative design with technical excellence, and we focus on delivering solutions that drive real business results."
    },
    {
      question: "How do you stay current with industry trends and technologies?",
      answer: "Our team regularly participates in industry conferences, workshops, and training programs. We invest in continuous learning and experimentation with new technologies. This ensures we can recommend and implement the most effective and current solutions."
    },
    {
      question: "What happens if I need changes or revisions to the project?",
      answer: "We understand that requirements can evolve during a project. Our agile methodology allows for flexibility and iterations. We have a clear process for handling change requests, which includes impact assessment, timeline adjustments if needed, and transparent communication."
    },
    {
      question: "Do you offer training for my team?",
      answer: "Yes, we provide comprehensive training for your team on any solutions we develop. This includes documentation, hands-on training sessions, and ongoing support. We ensure your team is comfortable and confident in using and maintaining the solutions we create."
    },
    {
      question: "How do you measure project success?",
      answer: "We establish clear KPIs and success metrics at the beginning of each project. These might include performance metrics, user engagement statistics, conversion rates, or other business-specific goals. We provide regular reports and analytics to track progress."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-technor mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and approach.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base font-technor">{item.question}</span>
                <ChevronDown 
                  className={`w-4 h-4 text-primary transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;