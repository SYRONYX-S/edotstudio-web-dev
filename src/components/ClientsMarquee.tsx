'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedTitle from '@/components/AnimatedTitle';

interface Client {
  name: string;
  logo: string;
  website: string;
  padding?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  width?: number;
  height?: number;
}

const ClientsMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const clients: Client[] = [
    { 
      name: 'Al-Khuloud', 
      logo: '/images/clients/Al-Khuloud.png', 
      website: 'https://alkhuloud.com',
      padding: { top: 10, bottom: 10 },
      width: 190,
      height: 60
    },
    { 
      name: 'Brandlifte', 
      logo: '/images/clients/Brandlifte.png', 
      website: 'https://brandlifte.com',
      width: 160,
      height: 60
    },
    { 
      name: 'Ayamon Polymers', 
      logo: '/images/clients/Ayamon-polymers.png', 
      website: 'https://dunes.com',
      padding: { top: 12, bottom: 12 },
      width: 140,
      height: 20
    },
    { 
      name: 'Ecoscape', 
      logo: '/images/clients/carbon.png', 
      website: 'https://ecoscape.com',
      padding: { left: 15, right: 15 },
      width: 160,
      height: 60
    },
    { 
      name: 'Frostbite', 
      logo: '/images/clients/Celecca.png', 
      website: 'https://frostbite.com',
      width: 80,
      height: 60
    },
    { 
      name: 'Glow', 
      logo: '/images/clients/Dplus.png', 
      website: 'https://glow.com',
      padding: { top: 8, bottom: 8 },
      width: 160,
      height: 60
    },
    { 
      name: 'Luminary', 
      logo: '/images/clients/DU-website.png', 
      website: 'https://luminary.com',
      width: 160,
      height: 60
    },
    { 
      name: 'Nexus', 
      logo: '/images/clients/Greenvior.png', 
      website: 'https://nexus.com',
      padding: { top: 15, bottom: 15 },
      width: 160,
      height: 60
    },
    { 
      name: 'Hikeins', 
      logo: '/images/clients/Hikeins.png', 
      website: 'https://hikeins.com',
      width: 160,
      height: 60
    },
    { 
      name: 'Indigo', 
      logo: '/images/clients/Indigo-tmt.png', 
      website: 'https://indigo.com',
      padding: { left: 10, right: 10 },
      width: 160,
      height: 60
    },
    { 
      name: 'Minar', 
      logo: '/images/clients/Minar-TMT.png', 
      website: 'https://minar.com',
      width: 70,
      height: 60
    },
    { 
      name: 'NadanCamp', 
      logo: '/images/clients/nadancamp.png', 
      website: 'https://nadancamp.com',
      padding: { top: 12, bottom: 12 },
      width: 140,
      height: 60
    },
    { 
      name: 'Shazzam', 
      logo: '/images/clients/Shazzam.png', 
      website: 'https://shazzam.com',
      width: 190,
      height: 60
    },
  ];

  // Triple the array to ensure seamless looping
  const allClients = [...clients, ...clients, ...clients];

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 3);
    }
  }, []);

  const marqueeVariants = {
    animate: {
      x: [-width, -width * 2],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 30,
          ease: "linear",
          repeatDelay: 0,
        }
      }
    },
    paused: {
      x: isPaused ? [0, 0] : [-width, -width * 2],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 30,
          ease: "linear",
          repeatDelay: 0,
        }
      }
    }
  };

  return (
    <section className="py-20 bg-transparent relative">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            BRANDS COLLABORATIONS
          </div>
          <AnimatedTitle 
            title="Brands that trust us"
            className="text-2xl md:text-4xl mb-4 font-technor text-white"
          />
        </div>
      </div>

      <div 
        ref={containerRef} 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          ref={marqueeRef}
          className="flex gap-8"
          variants={marqueeVariants}
          animate={isPaused ? "paused" : "animate"}
        >
          {allClients.map((client, index) => (
            <a
              key={`${client.name}-${index}`}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="relative min-w-[240px] h-24 group bg-[#1A1A1A]/10 dark:bg-white/20 rounded-2xl flex items-center justify-center hover:bg-[#252525] transition-colors"
              style={{
                padding: client.padding ? 
                  `${client.padding.top || 0}px ${client.padding.right || 0}px ${client.padding.bottom || 0}px ${client.padding.left || 0}px` 
                  : '0px'
              }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.width || 180}
                height={client.height || 60}
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