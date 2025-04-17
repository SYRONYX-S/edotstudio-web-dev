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

  // Initialize smooth scrolling - Reverted touchMultiplier to 1
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1, 
      touchMultiplier: 1, // *** Reverted to 1 ***
      smoothWheel: true, 
      lerp: 0.1, 
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
  }, []); // Empty dependency array

  // Setup scroll progress bar with RAF for smoother updates
  useEffect(() => {
    if (!progressBarRef.current) return;
    
    let ticking = false;
    let scrollPercentage = 0;
    let animationFrame: number;

    const updateProgressBar = () => {
      if (!progressBarRef.current) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalScrollableDistance = documentHeight - windowHeight;
      
      scrollPercentage = 
        totalScrollableDistance > 0 
          ? (scrollPosition / totalScrollableDistance) * 100 
          : 0;
          
      // Use GSAP for smoother animation
      gsap.to(progressBarRef.current, {
        width: `${scrollPercentage}%`,
        duration: 0.1,
        ease: "power1.out",
        overwrite: true
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(() => {
          updateProgressBar();
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial update
    updateProgressBar();
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrame);
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
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname} // Ensure animation triggers on path change
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
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