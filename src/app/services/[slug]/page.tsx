'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiArrowLeftLine, RiCheckLine, RiArrowRightLine } from 'react-icons/ri';
import { FaCode, FaMobileAlt, FaCogs, FaPalette, FaMegaport, FaBalanceScale } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { getServiceById, type Service } from '../utils';
import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/Button';
import StructuredData from '@/components/StructuredData';
import { projects } from '@/app/portfolio/data';

interface Props {
  params: {
    slug: string;
  };
}

// Map icon strings to actual icon components
const iconMap: Record<string, IconType> = {
  'FaCode': FaCode,
  'FaMobileAlt': FaMobileAlt,
  'FaCogs': FaCogs,
  'FaPalette': FaPalette,
  'RiMegaphoneLine': FaMegaport,
  'FaBalanceScale': FaBalanceScale
};

// Generate SEO-optimized metadata for service pages
export async function generateMetadata({ params }: Props) {
  const service = getServiceById(params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found | EdotStudio',
      description: 'The requested service page could not be found.'
    };
  }

  const seoTitle = `${service.title} Services | EdotStudio - Complete Business Solutions`;
  const seoDescription = `Professional ${service.title.toLowerCase()} services by EdotStudio. ${service.subtitle} ${service.overview.substring(0, 100)}...`;
  
  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      `${service.title.toLowerCase()} services`,
      `professional ${service.title.toLowerCase()}`,
      `${service.title.toLowerCase()} company`,
      `${service.title.toLowerCase()} agency`,
      'business solutions',
      'EdotStudio',
      ...service.features.map(f => f.toLowerCase()),
      ...(service.technologies || []).map(t => t.toLowerCase())
    ].join(', '),
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'website',
      url: `https://edotstudio.com/services/${params.slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.title} Services by EdotStudio`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [service.image],
    },
    alternates: {
      canonical: `https://edotstudio.com/services/${params.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceById(params.slug);
  
  if (!service) {
    return <div>Service not found</div>;
  }

  // Get related projects if they exist
  const relatedProjectsData = service.relatedProjects?.map(slug => projects[slug]).filter(Boolean) || [];
  
  // Get icon component
  const IconComponent = iconMap[service.icon] || FaCode;

  // Generate structured data for the service
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.overview,
    "provider": {
      "@type": "Organization",
      "name": "EdotStudio",
      "url": "https://edotstudio.com",
      "telephone": ["+916282381374", "+918304081013", "+919188108310"],
      "email": "contact.edotstudio@gmail.com"
    },
    "serviceType": service.title,
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.title} Services`,
      "itemListElement": service.features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "EdotStudio Clients"
      }
    }
  };

  return (
    <>
      <StructuredData data={serviceStructuredData} />
      
      <main className="min-h-screen relative pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-8">
          <Link href="/services" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
            <RiArrowLeftLine className="mr-2" />
            <span>Back to Services</span>
          </Link>
        </div>
        
        {/* Hero Section */}
        <section className="pt-8 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {service.isInHouse ? 'In-House Service' : 'Partner Service'}
                  </span>
                </div>
                
                <AnimatedTitle
                  title={service.title}
                  className="text-4xl md:text-5xl font-technor mb-4"
                />
                
                <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-6 font-pilcrow">{service.subtitle}</h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
                  {service.overview}
                </p>

                {service.technologies && (
                  <div className="mt-8">
                    <h4 className="text-sm text-neutral-400 mb-2">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits Section */}
        <section className="py-20 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Features */}
              <div className="relative">
                <div className="absolute -top-10 left-0 text-8xl font-black text-primary/10 font-technor">01</div>
                <div className="relative">
                  <h2 className="text-3xl font-technor text-primary mb-6">What We Offer</h2>
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <RiCheckLine className="text-primary mt-1 mr-2 flex-shrink-0 text-xl" />
                        <span className="text-gray-700 dark:text-gray-300 font-pilcrow">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="relative">
                <div className="absolute -top-10 left-0 text-8xl font-black text-primary/10 font-technor">02</div>
                <div className="relative">
                  <h2 className="text-3xl font-technor text-primary mb-6">Key Benefits</h2>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <RiCheckLine className="text-primary mt-1 mr-2 flex-shrink-0 text-xl" />
                        <span className="text-gray-700 dark:text-gray-300 font-pilcrow">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="relative mb-12">
              <div className="absolute -top-10 left-0 text-8xl font-black text-primary/10 font-technor">03</div>
              <h2 className="text-3xl font-technor text-primary relative">Our Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/5 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-medium mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-technor text-black dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Model Section */}
        <section className="py-20 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="relative mb-12">
              <div className="absolute -top-10 left-0 text-8xl font-black text-primary/10 font-technor">04</div>
              <h2 className="text-3xl font-technor text-primary relative">Delivery Models</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.deliveryModel.map((model, index) => (
                <div
                  key={index}
                  className="bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/5"
                >
                  <h3 className="text-xl font-technor text-black dark:text-white mb-3">{model.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {service.faq && service.faq.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="relative mb-12">
                <div className="absolute -top-10 left-0 text-8xl font-black text-primary/10 font-technor">05</div>
                <h2 className="text-3xl font-technor text-primary relative">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-6 max-w-4xl mx-auto">
                {service.faq.map((item, index) => (
                  <div key={index} className="bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/5">
                    <h3 className="text-xl font-technor text-black dark:text-white mb-3">{item.question}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Projects Section */}
        {relatedProjectsData.length > 0 && (
          <section className="py-20 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="relative mb-12">
                <div className="absolute -top-10 left-0 text-8xl font-black text-primary/10 font-technor">{service.faq && service.faq.length > 0 ? '06' : '05'}</div>
                <h2 className="text-3xl font-technor text-primary relative">Related Projects</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjectsData.map((project) => (
                  <div key={project.title} className="group">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-xl shadow-md">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-technor text-black dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    <Link 
                      href={`/portfolio/${Object.keys(projects).find(key => projects[key].title === project.title)}`}
                      className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
                    >
                      <span>View Case Study</span>
                      <RiArrowRightLine className="ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/80 to-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-technor mb-6">
              {service.callToAction?.title || 'Ready to Get Started?'}
            </h2>
            <p className="text-white/90 mb-8 max-w-3xl mx-auto">
              {service.callToAction?.description || 'Let\'s discuss how we can help bring your vision to life with innovative technology solutions.'}
            </p>
            <Link 
              href={service.callToAction?.buttonLink || '/contact'} 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {service.callToAction?.buttonText || 'Contact Us'}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 