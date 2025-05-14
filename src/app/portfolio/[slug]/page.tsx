'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowLeftLine, RiCalendarLine, RiBuilding3Line, RiGroupLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { getProjectBySlug, type Project } from '../utils';
import AnimatedTitle from '@/components/AnimatedTitle';

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return <div>Project not found</div>;
  }

  const hasMultipleImages = project.images && project.images.length > 1;

  return (
    <main className="min-h-screen relative dark:bg-transparent">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-24">
        <Link href="/portfolio" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
          <RiArrowLeftLine className="mr-2" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {project.category}
                </span>
                {project.completed && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium inline-flex items-center">
                    <RiCalendarLine className="mr-1" />
                    {project.completed}
                  </span>
                )}
              </div>
              
              <AnimatedTitle
                title={project.title}
                className="text-4xl md:text-5xl font-technor mb-4"
              />
              
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <RiBuilding3Line className="mr-2 text-primary" />
                  <span className="font-medium mr-2">Client:</span> {project.clientName} ({project.industry})
                </div>
                <div className="flex items-start text-gray-700 dark:text-gray-300">
                  <RiGroupLine className="mr-2 mt-1 text-primary" />
                  <div>
                    <span className="font-medium mr-2">Services Provided:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.servicesProvided.map((service, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
                {project.description}
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm text-neutral-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.partnership && (
                  <div>
                    <h4 className="text-sm text-neutral-400 mb-2">Partnership</h4>
                    <a
                      href={project.partnership.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:text-primary-light transition-colors"
                    >
                      {project.partnership.name}
                    </a>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={project.images[selectedImage] || project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              {hasMultipleImages && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-24 h-24 rounded-lg overflow-hidden transition-all ${
                        selectedImage === idx ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} thumbnail ${idx + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-20 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Challenge */}
            <div className="relative">
              <div className="absolute -top-10 left-0 text-8xl font-black text-primary/10 font-technor">01</div>
              <div className="relative">
                <h2 className="text-3xl font-technor text-primary mb-6">The Challenge</h2>
                <div className="dark:bg-black/30 bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {project.challenge}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Solution */}
            <div className="relative">
              <div className="absolute -top-10 left-0 text-8xl font-black text-primary/10 font-technor">02</div>
              <div className="relative">
                <h2 className="text-3xl font-technor text-primary mb-6">Our Solution</h2>
                <div className="dark:bg-black/30 bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <div className="absolute -top-10 left-0 text-8xl font-black text-primary/10 font-technor">03</div>
            <h2 className="text-3xl font-technor text-primary relative">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/5 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-start">
                  <RiCheckboxCircleLine className="text-primary text-xl mr-3 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <div className="absolute -top-10 left-0 text-8xl font-black text-primary/10 font-technor">04</div>
            <h2 className="text-3xl font-technor text-primary relative">Results & Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="flex items-start bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/5"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-medium mr-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {project.testimonial && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white/10 dark:bg-black/30 backdrop-blur-xl rounded-xl p-8 border border-white/20 dark:border-white/5 relative overflow-hidden">
              {/* Quote Mark */}
              <div className="absolute -top-8 -left-8 text-[200px] text-primary/10 font-serif">"</div>
              <div className="relative">
                <p className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                  "{project.testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="font-medium text-primary">{project.testimonial.author}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-technor mb-6 text-primary">Ready to Start Your Project?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help bring your vision to life with innovative technology solutions.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary-dark transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 