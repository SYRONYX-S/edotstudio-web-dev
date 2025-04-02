'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowLeftLine } from 'react-icons/ri';
import { getProjectBySlug, type Project } from '../utils';
import { AbstractBackground } from '@/components/AbstractBackground';
import AnimatedTitle from '@/components/AnimatedTitle';

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen relative dark:bg-transparent">
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedTitle
                title={project.title}
                className="text-4xl md:text-5xl font-technor mb-4"
              />
              <div className="text-primary text-sm font-medium mb-4 uppercase">
                {project.category}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {project.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
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
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {project.partnership.name}
                    </a>
                  </div>
                )}
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5 dark:bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-technor text-primary mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 dark:bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/5"
              >
                <p className="text-gray-700 dark:text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-technor text-primary mb-12">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="flex items-start"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium mr-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 