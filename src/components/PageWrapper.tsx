'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from 'lenis';

// Import custom cursor component
import FixedCursor from './FixedCursor';

// Move GSAP registration to useEffect to avoid server/client mismatch
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();
  const router = useRouter();
  const pageRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [pageContent, setPageContent] = useState<ReactNode>(null); // Initialize as null to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const lenisRef = useRef<Lenis | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Use useEffect to set initial content to avoid hydration errors
  useEffect(() => {
    // Register GSAP plugins only on client-side
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    setPageContent(children);
  }, [children]);
  
  // Update content when pathname changes
  useEffect(() => {
    setPageContent(children);
  }, [children, pathname]);

  // Check if device is mobile - client-side only
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 991);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize smooth scrolling with device-specific settings
  useEffect(() => {
    // detect if is mobile device
    const isMobileDevice = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);

    // Initialize smooth scrolling with LENIS
    if (typeof window !== 'undefined' && !shouldReduceMotion && !lenisRef.current) {
      gsap.registerPlugin(ScrollTrigger);

      // Adjust scroll configuration based on device
      const duration = isMobileDevice ? 2.4 : 1.2;
      const lerp = isMobileDevice ? 0.04 : 0.1;
      const touchMultiplier = isMobileDevice ? 2.4 : 2;
      const wheelMultiplier = isMobileDevice ? 0.3 : 1;

      // Create a more native-like scroll experience on mobile
      lenisRef.current = new Lenis({
        duration: duration,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        wheelMultiplier: wheelMultiplier,
        touchMultiplier: touchMultiplier,
        smoothWheel: !isMobileDevice, // Disable smooth wheel on mobile for better performance
        // Mobile-specific optimizations
        lerp: lerp,
        infinite: false,
        syncTouch: isMobileDevice // Synchronize with native touch on mobile
      });

      // Detect specific mobile browsers that need special handling
      const isOperaOrChrome = /OPR|Chrome/.test(navigator.userAgent) && /Android/.test(navigator.userAgent);
      const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
      
      if (isOperaOrChrome && isMobileDevice) {
        // Add native scrolling on mobile Chrome/Opera
        document.documentElement.style.overscrollBehavior = 'touch';
        // Force more native-like behavior
        if (lenisRef.current) {
          lenisRef.current.destroy();
          // Use almost-native scrolling for Opera and Chrome on Android
          lenisRef.current = new Lenis({
            duration: 2.2,        // Very short duration
            lerp: 0.01,           // Very responsive
            touchMultiplier: 2.4, // Reduced to prevent overscrolling
            wheelMultiplier: 0.3, // Further reduced for mobile
            smoothWheel: false,   // Disable smooth wheel completely
            syncTouch: true       // Synchronize with native touch
          });
        }
      }
      
      // iOS Safari specific optimizations
      if (isSafari && isMobileDevice) {
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = new Lenis({
            duration: 2.3,
            lerp: 0.03,
            touchMultiplier: 2.3,
            wheelMultiplier: 0.3,
            smoothWheel: false,
            syncTouch: true
          });
        }
        // Improve iOS Safari performance with CSS properties
        const htmlStyle = document.documentElement.style as any;
        htmlStyle.webkitOverflowScrolling = 'touch';
      }
    }

    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Update ScrollTrigger when Lenis scrolls
    lenisRef.current?.on('scroll', ScrollTrigger.update);

    // Check for reduced motion preference - if enabled, use native scrolling
    if (shouldReduceMotion) {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    }

    return () => {
      cancelAnimationFrame(rafId);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      document.documentElement.style.overscrollBehavior = '';
      // Clean up Safari-specific styles
      const htmlStyle = document.documentElement.style as any;
      if (htmlStyle.webkitOverflowScrolling) {
        htmlStyle.webkitOverflowScrolling = '';
      }
    };
  }, [shouldReduceMotion, isMobile]); // Re-initialize when motion preferences or mobile state changes

  // Setup scroll progress bar with optimized RAF
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
          ? (scrollPosition / totalScrollableDistance) * 200 
          : 0;
      
      // Simplified update for mobile
      if (isMobile) {
        progressBarRef.current.style.width = `${scrollPercentage}%`;
      } else {
        // Use GSAP for smoother animation on desktop
        gsap.to(progressBarRef.current, {
          width: `${scrollPercentage}%`,
          duration: 0.1,
          ease: "power1.out",
          overwrite: true
        });
      }
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
  }, [pathname, isMobile]);

  // Reset navigation state after page change
  useEffect(() => {
    setIsNavigating(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  // Simplified page transition for better performance
  const variants = {
    hidden: { opacity: 0 },
    enter: { 
      opacity: 1,
      transition: {
        duration: isMobile ? 0.2 : 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: isMobile ? 0.15 : 0.2,
        ease: "easeInOut"
      }
    },
  };

  return (
    <>
      {/* Custom Cursor - Only shown on non-touch devices */}
      {typeof window !== 'undefined' && !isMobile && <FixedCursor />}
      
      {/* Progress Bar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-black/10 dark:bg-white/10 z-[60]">
        <div 
          ref={progressBarRef}
          className="h-full bg-primary-light"
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