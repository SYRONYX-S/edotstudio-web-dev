'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiSendPlane2Line, RiArrowRightLine } from 'react-icons/ri';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { AbstractBackground } from '@/components/AbstractBackground';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [showFaq, setShowFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    // Simulate form submission
    try {
      // In a real application, you would submit the form data to your backend or a form service
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email Us',
      details: 'info@edotstudio.com',
      link: 'mailto:info@edotstudio.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Call Us',
      details: '+1 (234) 567-890',
      link: 'tel:+1234567890'
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Location',
      details: '123 Business Street, New York, NY 10001',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <main className="min-h-screen relative dark:bg-black pt-32 pb-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AbstractBackground />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            CONTACT US
          </div>
          <h1 className="text-4xl md:text-6xl font-technor mb-6 text-black dark:text-white">
            Let's Work Together
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-pilcrow">
            Have a project in mind? We'd love to hear about it. Reach out to discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10"
          >
            <h2 className="text-2xl font-technor mb-6 text-black dark:text-white">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-black/30 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-black/30 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-black/30 dark:text-white"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-black/30 dark:text-white"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-all duration-300 font-technor ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg text-sm font-pilcrow">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                
                {submitError && (
                  <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg text-sm font-pilcrow">
                    Oops! Something went wrong. Please try again or contact us directly.
                  </div>
                )}
              </div>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10">
              <h2 className="text-2xl font-technor mb-6 text-black dark:text-white">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.title === 'Location' ? '_blank' : ''}
                    rel={info.title === 'Location' ? 'noopener noreferrer' : ''}
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <div className="bg-white/10 dark:bg-black/20 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-black dark:text-white font-technor">{info.title}</p>
                      <p className="text-gray-600 dark:text-gray-400 font-pilcrow group-hover:text-primary transition-all duration-300">
                        {info.details}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10">
              <h2 className="text-2xl font-technor mb-4 text-black dark:text-white">Business Hours</h2>
              <div className="space-y-2 font-pilcrow">
                <p className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                  <span className="font-medium text-black dark:text-white">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                  <span className="font-medium text-black dark:text-white">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                  <span className="font-medium text-black dark:text-white">Closed</span>
                </p>
              </div>
            </div>
            
            <div className="bg-primary/10 dark:bg-primary/20 backdrop-blur-xl rounded-2xl p-8 border border-primary/30 dark:border-primary/30">
              <h2 className="text-2xl font-technor mb-4 text-black dark:text-white">Partner With Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 font-pilcrow">
                Are you an agency owner or freelancer? Join our partner program to earn competitive commissions by referring clients or expand your service offerings through our white-label solutions.
              </p>
              <Button 
                href="/partner" 
                className="bg-primary-light text-white hover:bg-primary w-full md:w-auto"
              >
                Explore Partnership Opportunities
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Map Section (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl overflow-hidden h-[400px] relative"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1614352141742!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy"
            title="Our Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border border-white/20 dark:border-white/10 rounded-2xl"></div>
        </motion.div>
      </div>
    </main>
  );
} 