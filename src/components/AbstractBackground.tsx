'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
  className?: string;
}

export function AbstractBackground({ className = '' }: Props) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.2]);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
      
      {/* Shapes */}
      <motion.div 
        style={{ y: y1, opacity }} 
        className="absolute top-20 left-[15%] w-[30rem] h-[30rem] bg-[radial-gradient(circle_at_center,#FF4D0025,transparent_70%)] blur-xl"
      />
      <motion.div 
        style={{ y: y2, opacity }} 
        className="absolute top-40 right-[15%] w-[25rem] h-[25rem] bg-[radial-gradient(circle_at_center,#FF4D0020,transparent_70%)] blur-xl"
      />
    </div>
  );
} 