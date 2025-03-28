'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiSendPlane2Line, RiArrowRightLine } from 'react-icons/ri';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/Button';

// FAQ data
const faqs = [
  {
    question: 'What services does EdotStudio offer?',
    answer: 'EdotStudio offers a comprehensive range of digital services including branding, web development, app development, graphic design, and digital marketing. We provide end-to-end solutions to help businesses establish a strong digital presence and achieve their goals.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing varies based on the specific requirements of each project. We provide customized quotes after understanding your needs and project scope. Contact us for a free consultation to discuss your project and get a tailored quote.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer: "Project timelines depend on the complexity and scope of work. A simple website might take 4-6 weeks, while more complex projects like custom web applications or comprehensive branding packages can take 2-4 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: 'Do you work with clients internationally?',
    answer: 'Yes, we work with clients worldwide. Our team is experienced in collaborating remotely, and we use efficient communication tools to ensure smooth project management regardless of geographical location.',
  },
  {
    question: 'What is your design process like?',
    answer: "Our design process typically involves discovery (understanding your needs and goals), research (analyzing your industry and competitors), concept development, design creation, revisions based on your feedback, and finalization. We ensure you're involved throughout the process.",
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer ongoing support and maintenance services to keep your digital assets running smoothly. We provide various support packages to suit different needs and budgets.',
  },
];

export default function ContactPage() {
  // Form states
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [showFaq, setShowFaq] = useState<number | null>(null);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form step navigation
  const nextStep = () => {
    if (formStep === 1 && (!formData.name || !formData.email)) {
      setFormError('Please fill in all required fields');
      return;
    }
    setFormError('');
    setFormStep(prev => prev + 1);
  };

  const prevStep = () => {
    setFormStep(prev => prev - 1);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically connect to your backend or email service
    
    // For demo purposes, we'll just simulate a successful submission
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-light dark:bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedTitle
              title="Let's Connect"
              as="h1"
              type="staggered"
              color="primary"
              className="text-4xl md:text-6xl mb-6 font-technor"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 font-supreme"
            >
              Ready to start your project? Get in touch with our team to discuss how we can help bring your vision to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white dark:bg-secondary-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-200 shadow-xl rounded-2xl p-8 md:p-10"
            >
              {formSubmitted ? (
                // Form Submitted Successfully
                <div className="text-center py-12">
                  <div className="text-primary text-6xl mb-6">
                    <RiSendPlane2Line className="mx-auto" />
                  </div>
                  <h3 className="text-2xl font-technor text-primary mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 font-supreme">
                    Thank you for reaching out to us. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormStep(1);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: '',
                        message: '',
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                // Multi-step Form
                <div>
                  <h2 className="text-2xl font-technor text-primary mb-2">Get in Touch</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 font-supreme">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                  
                  {/* Form Steps Indicator */}
                  <div className="flex mb-8">
                    <div className="flex-1">
                      <div className={`w-full h-1 ${formStep >= 1 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                      <div className="text-xs text-center mt-1 text-gray-500 dark:text-gray-400 font-supreme">Personal Info</div>
                    </div>
                    <div className="flex-1">
                      <div className={`w-full h-1 ${formStep >= 2 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                      <div className="text-xs text-center mt-1 text-gray-500 dark:text-gray-400 font-supreme">Project Details</div>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Personal Information */}
                    {formStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="font-supreme"
                      >
                        <div className="mb-6">
                          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-dark-300 dark:text-white transition-colors"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-dark-300 dark:text-white transition-colors"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-dark-300 dark:text-white transition-colors"
                            placeholder="+1 234 567 890"
                          />
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="company" className="block text-gray-700 dark:text-gray-300 mb-2">Company Name</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-dark-300 dark:text-white transition-colors"
                            placeholder="Your Company"
                          />
                        </div>
                        
                        {formError && (
                          <p className="text-red-500 mb-6">{formError}</p>
                        )}
                        
                        <div className="flex justify-end">
                          <Button onClick={nextStep} icon={<RiArrowRightLine />}>
                            Next Step
                          </Button>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Step 2: Project Details */}
                    {formStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="font-supreme"
                      >
                        <div className="mb-6">
                          <label htmlFor="service" className="block text-gray-700 dark:text-gray-300 mb-2">Service You're Interested In</label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-dark-300 dark:text-white transition-colors"
                          >
                            <option value="">Select a service</option>
                            <option value="Branding">Branding</option>
                            <option value="Web Development">Web Development</option>
                            <option value="App Development">App Development</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Project Details</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-dark-300 dark:text-white transition-colors"
                            placeholder="Tell us about your project and what you're looking to achieve..."
                          ></textarea>
                        </div>
                        
                        <div className="flex justify-between">
                          <Button variant="outline" onClick={prevStep}>
                            Back
                          </Button>
                          <button type="submit" className="bg-primary text-white font-technor rounded-full transition-all duration-300 inline-flex items-center justify-center text-base py-3 px-6 hover:bg-primary-dark">
                            Send Message
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </div>
              )}
            </motion.div>
            
            {/* Contact Information & FAQ */}
            <div>
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-primary text-white rounded-2xl p-8 md:p-10 mb-10"
              >
                <h3 className="text-2xl font-technor mb-6">Contact Information</h3>
                
                <div className="space-y-6 font-supreme">
                  <div className="flex items-start">
                    <RiMailLine className="text-2xl mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <a href="mailto:info@edotstudio.com" className="text-white/80 hover:text-white transition-colors">
                        info@edotstudio.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <RiPhoneLine className="text-2xl mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <a href="tel:+1234567890" className="text-white/80 hover:text-white transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <RiMapPinLine className="text-2xl mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Visit Us</p>
                      <address className="text-white/80 not-italic">
                        123 Creative Street,<br />
                        Innovation City, 12345<br />
                        United States
                      </address>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* FAQ Accordion */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-supreme"
              >
                <h3 className="text-2xl font-technor text-primary mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setShowFaq(showFaq === index ? null : index)}
                        className="w-full text-left px-6 py-4 font-medium bg-gray-50 dark:bg-dark-300 dark:text-white flex justify-between items-center"
                      >
                        <span className="pr-2">{faq.question}</span>
                        <span className="text-primary text-xl transition-transform duration-300 transform flex-shrink-0 ml-2">
                          {showFaq === index ? '−' : '+'}
                        </span>
                      </button>
                      
                      <AnimatePresence>
                        {showFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 py-4 bg-white dark:bg-dark-200 text-gray-700 dark:text-gray-300">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-100 dark:bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-technor text-primary mb-8">Find Us</h3>
          
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] max-w-5xl mx-auto">
            {/* This would be a real Google Maps embed in production */}
            <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <p className="text-gray-600 dark:text-gray-400 font-supreme">
                Google Maps Embed Would Appear Here
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 