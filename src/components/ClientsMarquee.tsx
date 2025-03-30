'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import AnimatedTitle from '@/components/AnimatedTitle';

interface Client {
  name: string;
  logo: string;
  website: string;
}

const ClientsMarquee = () => {
  const controls = useAnimationControls();
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const clients: Client[] = [
    { name: 'Al-Khuloud', logo: '/clients/Al-Khuloud.png', website: 'https://alkhuloud.com' },
    { name: 'Brandlifte', logo: '/clients/Brandlifte.png', website: 'https://brandlifte.com' },
    { name: 'Dunes', logo: '/clients/Dunes.png', website: 'https://dunes.com' },
    { name: 'Ecoscape', logo: '/clients/Ecoscape.png', website: 'https://ecoscape.com' },
    { name: 'Frostbite', logo: '/clients/Frostbite.png', website: 'https://frostbite.com' },
    { name: 'Glow', logo: '/clients/Glow.png', website: 'https://glow.com' },
    { name: 'Luminary', logo: '/clients/Luminary.png', website: 'https://luminary.com' },
    { name: 'Nexus', logo: '/clients/Nexus.png', website: 'https://nexus.com' },
  ];

  // Double the array for seamless loop
  const allClients = [...clients, ...clients];

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    controls.start({
      x: -width,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, width]);

  const handleHover = (isPaused: boolean) => {
    controls.stop();
    if (!isPaused) {
      controls.start({
        x: -width,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <div className="inline-block glass dark:glass-dark text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            OUR CLIENTS
          </div>
          <AnimatedTitle 
            title="Brands that trust us"
            className="text-2xl md:text-4xl mb-4 font-technor text-white"
          />
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-8"
          animate={controls}
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          {allClients.map((client, index) => (
            <a
              key={`${client.name}-${index}`}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="relative min-w-[240px] h-24 group bg-black bg-opacity-10 rounded-2xl flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={180}
                height={60}
                className="object-contain transition-all duration-300
                  filter grayscale opacity-70
                  group-hover:grayscale-0 group-hover:opacity-100"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsMarquee;