'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiRocketLine, RiCodeSLine, RiTeamLine, RiLightbulbLine, RiShieldLine, RiComputerLine } from 'react-icons/ri';
import { Users } from 'lucide-react';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/Button';
import { AbstractBackground } from '@/components/AbstractBackground';

export default function About() {
  const achievements = [
    { number: '15+', label: 'Projects Completed', icon: <RiRocketLine className="text-3xl text-primary-light" /> },
    { number: '8+', label: 'Active Projects', icon: <RiCodeSLine className="text-3xl text-primary-light" /> },
    { number: '3+', label: 'Years Experience', icon: <RiLightbulbLine className="text-3xl text-primary-light" /> },
    { number: '90%', label: 'Client Satisfaction', icon: <RiShieldLine className="text-3xl text-primary-light" /> },
  ];

  const technologies = [
    {
      category: 'Frontend',
      icon: <RiCodeSLine className="text-3xl text-primary-light" />,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend',
      icon: <RiTeamLine className="text-3xl text-primary-light" />,
      items: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    {
      category: 'Tools & AI',
      icon: <RiComputerLine className="text-3xl text-primary-light" />,
      items: ['GitHub Copilot', 'ChatGPT', 'Midjourney', 'Figma', 'AWS']
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & Developer",
      image: "/images/team/team1.jpg",
      bio: "Creative technologist with expertise in modern web development and a passion for user-centered design."
    },
    {
      name: "Sarah Chen",
      role: "Design Lead",
      image: "/images/team/team2.jpg",
      bio: "UI/UX specialist who transforms complex problems into intuitive digital experiences."
    },
    {
      name: "Michael Rivera",
      role: "Technical Consultant",
      image: "/images/team/team3.jpg",
      bio: "Full-stack developer who ensures our solutions are scalable, performant and future-proof."
    }
  ];

  return (
    <main className="min-h-screen relative dark:bg-black">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AbstractBackground />
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              ABOUT US
            </div>
            <AnimatedTitle
              title="Our Story of Innovation"
              className="text-4xl md:text-7xl mb-6 font-technor text-black dark:text-white"
            />
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg mb-12 font-pilcrow">
              From ambitious beginnings to industry leadership, we're on a mission to transform digital experiences with creativity, technology, and strategic insight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 dark:border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  OUR JOURNEY
                </div>
                <h2 className="text-3xl md:text-4xl font-technor text-black dark:text-white">Creative Vision, Technical Excellence</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 font-pilcrow">
                  <p>
                    Founded in February 2022, EdotStudio began with a singular vision to bridge technical innovation with creative design. Our journey started with crafting exceptional websites and applications, and has expanded to encompass comprehensive brand experiences.
                  </p>
                  <p>
                    Today, our small but mighty team partners with ambitious businesses to create digital products that stand apart through their technical excellence, visual distinction, and strategic insight. Every project we undertake is approached as an opportunity to push boundaries and deliver work that exceeds expectations.
                  </p>
                  <p>
                    With three years of collective experience and a relentless drive to remain at the forefront of digital trends and technologies, we create solutions that are not just current—they're ahead of the curve.
                  </p>
                </div>
              </motion.div>
              <div className="relative rounded-xl overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative h-[500px] w-full rounded-xl overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <Image
                    src="/images/hero/about-hero.jpg"
                    alt="EdotStudio Journey"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-8 left-8 z-20">
                    <h3 className="text-white text-2xl font-technor mb-2">10+ Years Combined Experience</h3>
                    <p className="text-white/80 font-pilcrow">Building digital excellence</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              OUR IMPACT
            </div>
            <AnimatedTitle
              title="Numbers That Define Us"
              className="text-3xl md:text-5xl mb-6 font-technor text-black dark:text-white"
            />
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-pilcrow">
              Behind every statistic is a success story—a digital experience that exceeded expectations and delivered measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 dark:border-white/5 hover:border-primary-light/20 transition-all duration-300 group"
              >
                <div className="mb-4">{achievement.icon}</div>
                <h3 className="text-4xl md:text-5xl font-technor text-primary-light mb-2 group-hover:scale-110 origin-left transition-transform duration-300">{achievement.number}</h3>
                <p className="text-gray-700 dark:text-gray-300 font-pilcrow">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              OUR TEAM
            </div>
            <AnimatedTitle
              title="Meet the Experts"
              className="text-3xl md:text-5xl mb-6 font-technor text-black dark:text-white"
            />
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-pilcrow">
              Our diverse team brings together expertise across technology, design, and strategy to deliver exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-[300px] w-full rounded-2xl overflow-hidden mb-4 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 group-hover:from-primary/70 transition-all duration-500"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <h3 className="text-white text-xl font-technor mb-1 group-hover:text-white transition-colors duration-300">{member.name}</h3>
                    <p className="text-primary-light font-pilcrow text-sm font-semibold">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-pilcrow text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              OUR TECH STACK
            </div>
            <AnimatedTitle
              title="Powered by Innovation"
              className="text-3xl md:text-5xl mb-6 font-technor text-black dark:text-white"
            />
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-pilcrow">
              We leverage cutting-edge technologies and forward-thinking methodologies to create future-proof digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 dark:border-white/5 hover:border-primary-light/20 transition-all duration-300 group"
              >
                <div className="mb-4">{tech.icon}</div>
                <h3 className="text-xl font-technor text-primary-light mb-4 group-hover:translate-x-2 transition-transform duration-300">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-sm font-pilcrow transition-colors duration-300 hover:bg-primary-light/20 hover:text-black dark:hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  PARTNER PROGRAM
                </div>
                <AnimatedTitle
                  title="Grow Together With Us"
                  className="text-3xl md:text-4xl mb-6 font-technor text-black dark:text-white"
                />
                <p className="text-gray-700 dark:text-gray-300 mb-8 font-pilcrow">
                  Join our network of partners and earn competitive commissions by referring clients to our services. We believe in creating mutually beneficial relationships that help your business grow alongside ours.
                </p>
                <Button
                  href="/partner"
                  className="bg-primary-light text-white hover:bg-primary-light/90 font-technor transition-all duration-300"
                  icon={<Users className="w-5 h-5 mr-2" />}
                >
                  Become a Partner
                </Button>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/10">
                  <h3 className="text-xl font-technor text-black dark:text-white mb-3">Referral Program</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-pilcrow">
                    Earn competitive commissions for each successful client referral. Commissions are issued once the client completes full payment.
                  </p>
                </div>
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/10">
                  <h3 className="text-xl font-technor text-black dark:text-white mb-3">Agency Partnership</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-pilcrow">
                    Expand your agency's service offerings without increasing overhead. We work as your white-label development team to deliver exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-black/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-16 border border-white/10 dark:border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <svg className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 text-primary-light" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M48.8,-52.2C61.9,-37.4,71,-18.7,72.1,1.1C73.3,20.9,66.6,41.8,53.5,57.2C40.3,72.6,20.1,82.5,-0.9,83.4C-21.9,84.4,-43.8,76.5,-59.3,61.2C-74.9,45.9,-84.1,23,-81.8,2.2C-79.5,-18.5,-65.8,-37,-49.9,-51.7C-33.9,-66.4,-17,-77.2,1.2,-78.4C19.3,-79.7,38.6,-71.3,48.8,-52.2Z" transform="translate(100 100)"></path>
              </svg>
            </div>
            <AnimatedTitle
              title="Ready to Transform Your Digital Presence?"
              className="text-3xl md:text-5xl mb-6 font-technor text-white"
            />
            <p className="text-white/80 max-w-2xl mx-auto mb-8 font-pilcrow">
              Let's collaborate to bring your vision to life with innovative solutions that drive engagement, growth, and lasting impact.
            </p>
            <Button
              href="/contact"
              className="bg-primary-light text-white hover:bg-primary-light/90 font-technor transition-all duration-300 hover:shadow-glow-lg"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 