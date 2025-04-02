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
  const [isMobile, setIsMobile] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  // Capture the initial children on mount and when path changes
  useEffect(() => {
    setPageContent(children);
  }, [children, pathname]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 991);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize smooth scrolling only on desktop
  useEffect(() => {
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isMobile]);

  // Setup scroll progress bar with debouncing
  useEffect(() => {
    if (!progressBarRef.current) return;

    const updateProgressBar = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        if (!progressBarRef.current) return;
        
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const totalScrollableDistance = documentHeight - windowHeight;
        
        const scrollPercentage = 
          totalScrollableDistance > 0 
            ? (scrollPosition / totalScrollableDistance) * 100 
            : 0;
            
        progressBarRef.current.style.width = `${scrollPercentage}%`;
      }, 10); // Debounce scroll events
    };

    window.addEventListener('scroll', updateProgressBar, { passive: true });
    // Initial update
    updateProgressBar();
    
    return () => {
      window.removeEventListener('scroll', updateProgressBar);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
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
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
  };

  return (
    <>
      {/* Custom Cursor - Only shown on non-touch devices */}
      {!isMobile && <FixedCursor />}
      
      {/* Progress Bar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-black/10 dark:bg-white/10 z-[60]">
        <div 
          ref={progressBarRef}
          className="h-full bg-primary-light transition-all ease-out duration-200"
          style={{
            willChange: 'width',
            transform: 'translate3d(0,0,0)',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>
      
      {/* Page Content with Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={pageRef}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          className="min-h-screen"
          style={{
            willChange: 'opacity',
            transform: 'translate3d(0,0,0)',
            backfaceVisibility: 'hidden'
          }}
        >
          {pageContent}
        </motion.div>
      </AnimatePresence>
    </>
  );
} 