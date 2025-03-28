'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Client {
  name: string;
  logo: string;
  url: string;
}

const clients: Client[] = [
  {
    name: 'Client 1',
    logo: '/clients/client1.svg',
    url: 'https://client1.com'
  },
  {
    name: 'Client 2',
    logo: '/clients/client2.svg',
    url: 'https://client2.com'
  },
  // Add more clients here
];

export default function ClientsMarquee() {
  return (
    <section className="w-full py-20 overflow-hidden bg-background">
      <div className="container mx-auto mb-10 text-center">
        <p className="text-primary/80 font-medium mb-4">BRANDS COLLABORATIONS</p>
        <h2 className="text-4xl md:text-5xl font-display mb-8">Brands that trust us</h2>
      </div>

      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-l from-background to-transparent" />

        {/* First Marquee */}
        <div className="flex gap-8 items-center">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: [0, -1920], // Adjust based on total width
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center min-w-[200px] h-24 bg-muted/50 rounded-xl px-6 hover:bg-muted/80 transition-colors group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-[140px] max-h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </motion.div>
          
          {/* Duplicate for seamless loop */}
          <motion.div
            className="flex gap-8 items-center absolute left-0"
            animate={{
              x: [1920, 0], // Adjust based on total width
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center min-w-[200px] h-24 bg-muted/50 rounded-xl px-6 hover:bg-muted/80 transition-colors group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-[140px] max-h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 