'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { hapticFeedback } from '@/utils/haptics';

// Components
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import StructuredData from '@/components/StructuredData';
import FAQ from '@/components/FAQ';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    hapticFeedback.selection();
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    hapticFeedback.impactMedium();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        hapticFeedback.notificationSuccess();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError(true);
      hapticFeedback.notificationError();
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email Us', details: 'info@edotstudio.com', link: 'mailto:info@edotstudio.com' },
    { icon: Phone, title: 'Call Us', details: '+1 (234) 567-890', link: 'tel:+1234567890' },
    { icon: MapPin, title: 'Find Us', details: '123 Business St, New York, NY', link: '#' }, // Link to map placeholder or actual map
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://edotstudio.com/contact",
    "name": "Contact EdotStudio",
    "description": "Get in touch with EdotStudio for web development, app development, branding, and marketing services.",
    "mainEntity": {
      "@type": "Organization",
      "name": "EdotStudio",
      "telephone": "+1-123-456-7890",
      "email": "info@edotstudio.com"
    }
  };

  return (
    <main className="relative contact-page">
      <PageHero
        badge="Get In Touch"
        title="Let's Build Something Great Together"
        description="Reach out to discuss your project, ask questions, or just say hello. We're here to help you succeed."
      />

      <section className="py-16 md:py-20 -mt-10 md:-mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <StructuredData data={contactStructuredData} />

          {/* Main Content Grid (Form Left, Info Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start mb-16 md:mb-24">
            
            {/* Left Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 glass-card p-6 sm:p-8 md:p-10 shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl font-technor mb-2 text-gray-800 dark:text-white">Send Your Inquiry</h2>
              <p className="text-gray-600 dark:text-gray-400 font-pilcrow mb-6">Fill out the form and we'll get back to you shortly.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="form-group">
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      className="contact-input" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      className="contact-input" 
                      placeholder="Your Email" 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required 
                    value={formData.subject} 
                    onChange={handleInputChange} 
                    className="contact-input" 
                    placeholder="Subject" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    className="contact-input" 
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    size="lg" 
                    className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
                  </Button>
                  <div className="text-center sm:text-right mt-2 sm:mt-0 h-5"> {/* Status Message Area */}
                    {submitSuccess && <p className="text-sm text-green-600 dark:text-green-500">Sent successfully!</p>}
                    {submitError && <p className="text-sm text-red-600 dark:text-red-500">Submission error.</p>}
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Right Column: Contact Details & Socials */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 glass-card p-6 sm:p-8 md:p-10 shadow-xl h-full"
            >
              <div>
                <h3 className="text-xl font-semibold font-technor mb-4 text-gray-800 dark:text-white">Contact Details</h3>
                <ul className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 mt-1 text-primary">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-md font-semibold text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:underline transition-all duration-300 font-pilcrow break-all"
                        >
                          {item.details}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-gray-200 dark:border-gray-700/50" />

              <div>
                 <h3 className="text-xl font-semibold font-technor mb-4 text-gray-800 dark:text-white">Follow Us</h3>
                 <div className="flex items-center gap-4">
                   {socialLinks.map((social) => (
                    <a 
                      key={social.label} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={social.label}
                      className="p-2 rounded-full text-gray-500 dark:text-gray-400 bg-white/10 hover:bg-primary/10 hover:text-primary dark:bg-black/20 dark:hover:bg-primary/10 dark:hover:text-primary transform hover:scale-110 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Optional: Map Placeholder or Graphic */}
              {/* <div className="mt-6 aspect-video bg-gray-200 dark:bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-500">
                Map Placeholder
              </div> */}

            </motion.div>
          </div>

          {/* FAQ Section - Full Width Below Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }} 
            className="mt-16 md:mt-24 glass-card shadow-xl"
          >
            <FAQ />
          </motion.div>
        </div>
      </section>
    </main>
  );
} 