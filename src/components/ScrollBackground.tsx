'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollBackground() {
  const { scrollYProgress } = useScroll();
  const timeRef = useRef(0);
  const moveRef = useRef({ x: 0, y: 0 });
  
  // Create multiple transform values for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  // Spring configurations for smooth animations
  const springConfig = { stiffness: 60, damping: 15, restDelta: 0.001 };
  const springY1 = useSpring(y1, springConfig);
  const springY2 = useSpring(y2, springConfig);
  const springRotate1 = useSpring(rotate1, springConfig);
  const springRotate2 = useSpring(rotate2, springConfig);
  const springScale1 = useSpring(scale1, springConfig);

  // Continuous animation
  useAnimationFrame((time) => {
    timeRef.current = time * 0.001; // Convert to seconds
    moveRef.current = {
      x: Math.sin(timeRef.current * 0.5) * 20,
      y: Math.cos(timeRef.current * 0.5) * 20
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0">
        {/* Definite shapes with continuous motion */}
        <motion.div
          animate={{
            x: [0, 20, 0, -20, 0],
            y: [0, -20, 0, 20, 0],
            rotate: [0, 45, 0, -45, 0]
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute top-[15%] left-[20%] w-32 h-32 border border-primary/10 rounded-lg"
        />

        <motion.div
          animate={{
            x: [0, -30, 0, 30, 0],
            y: [0, 30, 0, -30, 0],
            rotate: [0, -60, 0, 60, 0]
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute bottom-[20%] right-[15%] w-40 h-40 border border-primary/10 rounded-full"
        />

        {/* Subtle lines with scroll and continuous motion */}
        <motion.div
          style={{ 
            y: springY1,
            rotate: springRotate1,
          }}
          animate={{
            x: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute top-[30%] left-[25%] w-[20vw] h-[1px] bg-primary/10"
        />

        <motion.div
          style={{ 
            y: springY2,
            rotate: springRotate2,
          }}
          animate={{
            x: [0, -15, 0, 15, 0],
          }}
          transition={{
            duration: 18,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute top-[45%] right-[20%] w-[15vw] h-[1px] bg-primary/10"
        />

        {/* Triangle shape */}
        <motion.div
          style={{ scale: springScale1 }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute top-[60%] left-[40%] w-0 h-0 border-l-[30px] border-l-transparent border-b-[52px] border-b-primary/10 border-r-[30px] border-r-transparent"
        />

        {/* Random subtle lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, (i % 2 === 0 ? 20 : -20), 0],
              y: [0, (i % 3 === 0 ? -15 : 15), 0],
            }}
            transition={{
              duration: 10 + i * 2,
              ease: "linear",
              repeat: Infinity,
            }}
            className={`absolute w-[10vw] h-[1px] bg-primary/${i % 2 === 0 ? '8' : '5'}`}
            style={{
              top: `${25 + (i * 10)}%`,
              left: `${20 + (i * 10)}%`,
              transform: `rotate(${i * 45}deg)`
            }}
          />
        ))}

        {/* Rectangle with continuous rotation */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute top-[70%] right-[35%] w-24 h-16 border border-primary/10"
        />
      </div>
    </div>
  );
} 