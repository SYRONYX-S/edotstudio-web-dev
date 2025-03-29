'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowLeftLine } from 'react-icons/ri';
import { getProjectBySlug } from '../utils';
import { AbstractBackground } from '@/components/AbstractBackground';
import { AnimatedTitle } from '@/components/AnimatedTitle';

interface Props {
  params: {
    slug: string;
  };
}

export default function CaseStudy({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Abstract Background */}
      <AbstractBackground className="fixed inset-0 z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 md:px-8">
          <div className="container mx-auto">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-12 group"
            >
              <RiArrowLeftLine className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <AnimatedTitle
                  label={project.category.toUpperCase()}
                  title={project.title}
                  description={project.description}
                />
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm text-neutral-400 mb-2">Client</h4>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-400 mb-2">Year</h4>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-400 mb-2">Services</h4>
                    <div className="space-y-1">
                      {project.services.map((service, index) => (
                        <p key={index} className="font-medium">{service}</p>
                      ))}
                    </div>
                  </div>
                  {project.partnership && (
                    <div>
                      <h4 className="text-sm text-neutral-400 mb-2">Partnership</h4>
                      <p className="font-medium">{project.partnership}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            {/* The Challenge */}
            {project.challenge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-20"
              >
                <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
                <div className="prose prose-invert max-w-none">
                  {project.challenge.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-neutral-300">{paragraph.trim()}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* The Solution */}
            {project.solution && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-20"
              >
                <h2 className="text-3xl font-semibold mb-6">Our Solution</h2>
                <div className="prose prose-invert max-w-none">
                  {project.solution.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-neutral-300">{paragraph.trim()}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* The Results */}
            {project.results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-3xl font-semibold mb-6">The Results</h2>
                <div className="prose prose-invert max-w-none">
                  {project.results.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-neutral-300">{paragraph.trim()}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <section className="py-20 px-4 md:px-8 bg-neutral-900/50 backdrop-blur-lg">
            <div className="container mx-auto">
              <h2 className="text-3xl font-semibold mb-12 text-center">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="relative aspect-video rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
} 