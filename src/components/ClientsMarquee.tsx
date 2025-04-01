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
  grayscaleLight?: boolean;
  grayscaleDark?: boolean;
}

const ClientsMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [animationOffset, setAnimationOffset] = useState(0);

  const clients: Client[] = [
    { 
      name: 'Al-Khuloud', 
      logo: '/images/clients/Al-Khuloud.png', 
      website: 'https://alkhuloud.com',
      padding: { top: 10, bottom: 10 },
      width: 190,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Brandlifte', 
      logo: '/images/clients/Brandlifte.png', 
      website: 'https://brandlifte.com',
      width: 160,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Ayamon Polymers', 
      logo: '/images/clients/Ayamon-polymers.png', 
      website: 'https://dunes.com',
      padding: { top: 12, bottom: 12 },
      width: 140,
      height: 20,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Ecoscape', 
      logo: '/images/clients/carbon.png', 
      website: 'https://ecoscape.com',
      padding: { left: 15, right: 15 },
      width: 160,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Frostbite', 
      logo: '/images/clients/Celecca.png', 
      website: 'https://frostbite.com',
      width: 80,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Glow', 
      logo: '/images/clients/Dplus.png', 
      website: 'https://glow.com',
      padding: { top: 8, bottom: 8 },
      width: 160,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Luminary', 
      logo: '/images/clients/DU-website.png', 
      website: 'https://luminary.com',
      width: 160,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Nexus', 
      logo: '/images/clients/Greenvior.png', 
      website: 'https://nexus.com',
      padding: { top: 15, bottom: 15 },
      width: 160,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Hikeins', 
      logo: '/images/clients/Hikeins.png', 
      website: 'https://hikeins.com',
      width: 160,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Indigo', 
      logo: '/images/clients/Indigo-tmt.png', 
      website: 'https://indigo.com',
      padding: { left: 10, right: 10 },
      width: 160,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Minar', 
      logo: '/images/clients/Minar-TMT.png', 
      website: 'https://minar.com',
      width: 70,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'NadanCamp', 
      logo: '/images/clients/nadancamp.png', 
      website: 'https://nadancamp.com',
      padding: { top: 12, bottom: 12 },
      width: 140,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Shazzam', 
      logo: '/images/clients/Shazzam.png', 
      website: 'https://shazzam.com',
      width: 190,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
  ];

  // Triple the array to ensure seamless looping
  const allClients = [...clients, ...clients, ...clients];

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 3);
    }
  }, []);

  // This approach uses a single animation with dynamic controls
  // instead of switching between variants that cause jumping
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
          animate={{ 
            x: [-width, -width * 2]
          }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
              repeatDelay: 0,
            }
          }}
          // This is the key fix - we're pausing the animation in place
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {allClients.map((client, index) => (
            <a
              key={`${client.name}-${index}`}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="relative min-w-[240px] h-24 group bg-[#1A1A1A]/10 hover:bg-white opacity-90 hover:opacity-100 dark:bg-white/80 dark:opacity-50 dark:hover:opacity-100 hover:dark:bg-white/100 rounded-2xl flex items-center justify-center transition-all duration-500"
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
                className={`object-contain group-hover:scale-110 transition duration-500`}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsMarquee;