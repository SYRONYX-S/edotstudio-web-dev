'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Briefcase, Code, FileSpreadsheet, DollarSign, Globe, Clock, Shield } from 'lucide-react';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/Button';
import { AbstractBackground } from '@/components/AbstractBackground';
import { hapticFeedback } from '@/utils/haptics';

// Skills options for the form
const skillOptions = [
  "Web Development", "Frontend Development", "Backend Development", 
  "Mobile App Development", "UI/UX Design", "Graphic Design", 
  "Branding", "Digital Marketing", "SEO", "Content Writing"
];

// Project types
const projectTypes = [
  "Web Development", "App Development", "Software Development", 
  "Branding", "Digital Marketing", "Graphic Design"
];

// Experience levels
const experienceLevels = [
  "1-2 years", "3-5 years", "5+ years", "Agency (multiple skill levels)"
];

// How it works steps
const howItWorks = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Flexible Collaboration",
    description: "We work with freelancers and agencies only when required—for extra workload or specialized tasks."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "Revenue Sharing",
    description: "Payments are made on a per-project basis rather than fixed salaries."
  },
  {
    icon: <FileSpreadsheet className="w-8 h-8 text-primary" />,
    title: "Quote-Based Pricing",
    description: "Individuals/teams can set their charges and terms, and we will negotiate with the client to finalize the deal."
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "No External Branding",
    description: "All work is done under our brand, but freelancers can still showcase completed projects in their portfolios."
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Opportunities for Growth",
    description: "A chance to work on real projects, gain experience, and build a strong portfolio."
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Project-Based Timeline",
    description: "Commitment only for the duration of specific projects, with flexibility for future collaborations."
  }
];

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    portfolioLink: '',
    skills: [],
    projectTypes: [],
    experienceLevel: '',
    availability: '',
    paymentTerms: '',
    notes: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    hapticFeedback.light();
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: 'skills' | 'projectTypes') => {
    const { value, checked } = e.target;
    
    setFormData(prev => {
      if (checked) {
        hapticFeedback.light();
        return {
          ...prev,
          [category]: [...prev[category], value]
        };
      } else {
        hapticFeedback.light();
        return {
          ...prev,
          [category]: prev[category].filter(item => item !== value)
        };
      }
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    try {
      // Send form data to the API endpoint
      const response = await fetch('/api/submit-freelancer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        hapticFeedback.success();
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          location: '',
          portfolioLink: '',
          skills: [],
          projectTypes: [],
          experienceLevel: '',
          availability: '',
          paymentTerms: '',
          notes: ''
        });
      } else {
        hapticFeedback.error();
        throw new Error(result.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              CAREERS
            </div>
            <h1 className="text-4xl md:text-6xl font-technor mb-6 text-black dark:text-white">
              Work With Us
            </h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-pilcrow mb-8">
              Join our network of talented freelancers and agencies to collaborate on exciting projects. We connect skilled professionals with opportunities that match their expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#apply" variant="default">
                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button href="#how-it-works" variant="outline">
                How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedTitle
              title="How It Works"
              className="text-3xl md:text-5xl mb-6 font-technor text-black dark:text-white"
            />
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-pilcrow">
              Understanding our collaboration model is key to a successful partnership. Here's what you need to know about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-technor text-black dark:text-white mb-4">{step.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What We Look For */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary/10 dark:bg-primary/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-primary/20 relative overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-primary/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full filter blur-2xl translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  IDEAL CANDIDATES
                </div>
                <h2 className="text-3xl md:text-4xl font-technor text-black dark:text-white mb-6">
                  What We Look For
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                  We seek skilled professionals who can deliver high-quality work and share our commitment to excellence. Our ideal collaborators are:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Experienced in their field with demonstrable skills</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Reliable, with excellent communication skills</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Adaptable and able to work within our brand guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Committed to deadlines and quality deliverables</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/10">
                  <h3 className="text-xl font-technor text-center text-black dark:text-white mb-4">Our Top Needs</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Web Development", "Mobile Apps", "UI/UX Design", "Branding", "Digital Marketing", "Content Creation"].map((skill, index) => (
                      <div key={index} className="bg-primary/5 dark:bg-primary/10 rounded-lg p-3 text-center">
                        <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/10">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-technor text-black dark:text-white">Typical Project Timeline</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our projects typically range from 2 weeks to 3 months depending on scope. We'll contact you when we have projects matching your skills and availability.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Application Form */}
      <section id="apply" className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedTitle
              title="Apply to Join Our Network"
              className="text-3xl md:text-5xl mb-6 font-technor text-black dark:text-white"
            />
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-pilcrow">
              Fill out the form below to apply. We'll reach out when projects matching your skills become available.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 dark:border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-technor text-black dark:text-white mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                      Name / Agency Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-black/30 dark:text-white"
                      placeholder="John Doe / Agency Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                      Email Address <span className="text-primary">*</span>
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
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                    Location (Optional)
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-black/30 dark:text-white"
                    placeholder="City, Country"
                  />
                </div>
                <div>
                  <label htmlFor="portfolioLink" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                    Portfolio Link <span className="text-primary">*</span>
                  </label>
                  <input
                    id="portfolioLink"
                    name="portfolioLink"
                    type="url"
                    required
                    value={formData.portfolioLink}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-black/30 dark:text-white"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>
              
              {/* Skills & Experience */}
              <div>
                <h3 className="text-xl font-technor text-black dark:text-white mb-4">Skills & Experience</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 font-pilcrow">
                      Skills & Specializations <span className="text-primary">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2 bg-white/5 dark:bg-black/30 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
                      {skillOptions.map((skill) => (
                        <div key={skill} className="flex items-center">
                          <div className="relative flex items-center">
                            <input
                              type="checkbox"
                              id={`skill-${skill}`}
                              name="skills"
                              value={skill}
                              checked={formData.skills.includes(skill)}
                              onChange={(e) => handleCheckboxChange(e, 'skills')}
                              className="w-4 h-4 opacity-0 absolute"
                            />
                            <div className={`w-5 h-5 flex items-center justify-center border ${formData.skills.includes(skill) ? 'bg-[#FF4D00] border-[#FF4D00]' : 'border-gray-300 dark:border-gray-600 bg-white/5 dark:bg-black/30'} rounded transition-colors duration-200`}>
                              {formData.skills.includes(skill) && (
                                <Check className="w-3.5 h-3.5 text-white" />
                              )}
                            </div>
                          </div>
                          <label 
                            htmlFor={`skill-${skill}`} 
                            className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer"
                          >
                            {skill}
                          </label>
                        </div>
                      ))}
                    </div>
                    {formData.skills.length === 0 && (
                      <p className="mt-1 text-sm text-red-500">Please select at least one skill</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 font-pilcrow">
                      Preferred Project Types <span className="text-primary">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2 bg-white/5 dark:bg-black/30 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
                      {projectTypes.map((type) => (
                        <div key={type} className="flex items-center">
                          <div className="relative flex items-center">
                            <input
                              type="checkbox"
                              id={`type-${type}`}
                              name="projectTypes"
                              value={type}
                              checked={formData.projectTypes.includes(type)}
                              onChange={(e) => handleCheckboxChange(e, 'projectTypes')}
                              className="w-4 h-4 opacity-0 absolute"
                            />
                            <div className={`w-5 h-5 flex items-center justify-center border ${formData.projectTypes.includes(type) ? 'bg-[#FF4D00] border-[#FF4D00]' : 'border-gray-300 dark:border-gray-600 bg-white/5 dark:bg-black/30'} rounded transition-colors duration-200`}>
                              {formData.projectTypes.includes(type) && (
                                <Check className="w-3.5 h-3.5 text-white" />
                              )}
                            </div>
                          </div>
                          <label 
                            htmlFor={`type-${type}`} 
                            className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                    {formData.projectTypes.length === 0 && (
                      <p className="mt-1 text-sm text-red-500">Please select at least one project type</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                    Experience Level <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="experienceLevel"
                      name="experienceLevel"
                      required
                      value={formData.experienceLevel}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 dark:bg-black/30 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#FF4D00] focus:border-[#FF4D00] outline-none transition-all duration-300 appearance-none text-gray-700 dark:text-white hover:shadow-md"
                    >
                      <option value="" className="bg-white dark:bg-gray-900">Select your experience level</option>
                      {experienceLevels.map((level) => (
                        <option key={level} value={level} className="bg-white dark:bg-gray-900">{level}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#FF4D00]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                    Availability <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="availability"
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 dark:bg-black/30 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#FF4D00] focus:border-[#FF4D00] outline-none transition-all duration-300 appearance-none text-gray-700 dark:text-white hover:shadow-md"
                    >
                      <option value="" className="bg-white dark:bg-gray-900">Select your availability</option>
                      <option value="Full-time" className="bg-white dark:bg-gray-900">Full-time</option>
                      <option value="Part-time" className="bg-white dark:bg-gray-900">Part-time</option>
                      <option value="Per Project" className="bg-white dark:bg-gray-900">Per Project</option>
                      <option value="Weekends Only" className="bg-white dark:bg-gray-900">Weekends Only</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#FF4D00]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment & Additional Information */}
              <div>
                <h3 className="text-xl font-technor text-black dark:text-white mb-4">Payment & Additional Information</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="paymentTerms" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                      Expected Payment Terms & Quotation <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="paymentTerms"
                      name="paymentTerms"
                      rows={3}
                      required
                      value={formData.paymentTerms}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 dark:bg-black/30 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#FF4D00] focus:border-[#FF4D00] outline-none transition-all duration-300 text-gray-700 dark:text-white"
                      placeholder="Please describe your expected payment terms, rates, or quotation process..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-pilcrow">
                      Additional Notes / Cover Letter
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 dark:bg-black/30 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#FF4D00] focus:border-[#FF4D00] outline-none transition-all duration-300 text-gray-700 dark:text-white"
                      placeholder="Tell us a bit more about yourself and why you'd like to work with us..."
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-pilcrow">
                  By submitting this form, you understand that we'll contact you only when a suitable project arises. Your information will be stored in our database and handled according to our privacy policy.
                </p>
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
                    'Submit Application'
                  )}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg text-sm font-pilcrow">
                    Thank you for your application! We've received your information and will contact you when a suitable project arises.
                  </div>
                )}
                
                {submitError && (
                  <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg text-sm font-pilcrow">
                    There was an error submitting your application. Please try again or contact us directly at info@edotstudio.com.
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>
      
      {/* Career Policy Section */}
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
                <Shield className="w-8 h-8 text-primary-light mr-4" />
                <h2 className="text-2xl font-technor text-white">Career Policy</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-technor text-white mb-4">Freelancer & Agency Collaboration</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Project-based collaboration for additional support.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Work assigned based on availability and expertise.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-technor text-white mb-4">Payment & Terms</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Project-based payments with clear quotes upfront.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Commission structure based on project type and value.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Payments processed after successful project completion.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Financial agreements and terms finalized before work begins.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-technor text-white mb-4">Work & Branding Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Work delivered under our branding only.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Portfolio display allowed for completed work.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-technor text-white mb-4">Code of Conduct</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Professionalism and quality work required.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">No unauthorized subcontracting allowed.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-technor text-white mb-4">Data & Confidentiality</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Strict confidentiality of project details required.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Breach may result in termination and legal action.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-technor text-white mb-4">Application & Updates</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Structured application process required.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Policy subject to updates based on needs.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-white/80 font-pilcrow">Quality standards must be maintained.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 