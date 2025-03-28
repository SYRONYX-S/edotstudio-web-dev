'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Client {
  name: string;
  logo: string;
}

interface MarqueeClientsProps {
  clients: Client[];
  direction?: 'left' | 'right';
  speed?: number;
  pauseOnHover?: boolean;
}

const MarqueeClients: React.FC<MarqueeClientsProps> = ({
  clients,
  direction = 'left',
  speed = 20,
  pauseOnHover = true,
}) => {
  // Duplicate the clients array to create a seamless loop
  const duplicatedClients = [...clients, ...clients];
  
  return (
    <div 
      className="overflow-hidden w-full py-10 relative"
      style={{
        mask: 'linear-gradient(90deg, transparent, white 10%, white 90%, transparent)',
        WebkitMask: 'linear-gradient(90deg, transparent, white 10%, white 90%, transparent)'
      }}
    >
      <motion.div
        className="flex items-center"
        animate={{
          x: direction === 'left' ? [0, -clients.length * 220] : [-clients.length * 220, 0]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: clients.length * speed,
            ease: 'linear',
          }
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
      >
        {duplicatedClients.map((client, index) => (
          <motion.div
            key={`${client.name}-${index}`}
            className="mx-10 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative h-12 w-[160px]">
              <Image 
                src={client.logo} 
                alt={`${client.name} logo`} 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeClients; 