'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from 'lenis';

// Import custom cursor component
import FixedCursor from './FixedCursor';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();
  const router = useRouter();
  const pageRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [pageContent, setPageContent] = useState<ReactNode>(children);

  // Capture the initial children on mount and when path changes
  useEffect(() => {
    setPageContent(children);
  }, [children, pathname]);

  // Initialize smooth scrolling
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    const lenis = new Lenis({
      duration: isMobile ? 1 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: isMobile ? 0.8 : 1,
      touchMultiplier: 1,
      infinite: false,
      smoothWheel: !isMobile, // Disable smooth scrolling for touch devices
      smoothTouch: false // Disable smooth touch scrolling
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Setup scroll progress bar
  useEffect(() => {
    if (!progressBarRef.current) return;

    const updateProgressBar = () => {
      if (!progressBarRef.current) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalScrollableDistance = documentHeight - windowHeight;
      
      const scrollPercentage = 
        totalScrollableDistance > 0 
          ? (scrollPosition / totalScrollableDistance) * 100 
          : 0;
          
      progressBarRef.current.style.transform = `translateX(${scrollPercentage - 100}%)`;
    };

    // Use requestAnimationFrame for smoother updates
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgressBar();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial update
    updateProgressBar();
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // Reset navigation state after page change
  useEffect(() => {
    setIsNavigating(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  // Simple page transition that doesn't intercept navigation
  const variants = {
    hidden: { opacity: 0 },
    enter: { 
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "linear"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.15,
        ease: "linear"
      }
    },
  };

  return (
    <>
      {/* Custom Cursor - Only shown on non-touch devices */}
      <FixedCursor />
      
      {/* Progress Bar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-black/10 dark:bg-white/10 z-[60] overflow-hidden">
        <div 
          ref={progressBarRef}
          className="h-full w-full bg-primary-light transform -translate-x-full will-change-transform"
          style={{ transition: 'transform 0.1s linear' }}
        />
      </div>
      
      {/* Page Content with Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          ref={pageRef}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          className="min-h-screen"
          style={{ willChange: 'opacity' }}
        >
          {pageContent}
        </motion.div>
      </AnimatePresence>
    </>
  );
} 