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

    // Fix for mobile viewport height issues with address bar
    const setAppHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    
    // Set initial height
    setAppHeight();
    
    // Update height on resize and on page load
    window.addEventListener('resize', setAppHeight);
    window.addEventListener('orientationchange', setAppHeight);
    
    // Handle iOS safari's toolbar appearance/disappearance
    let lastScrollPosition = window.scrollY;
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      // If scrolled more than 100px, we can assume the toolbar might have changed
      if (Math.abs(currentScrollPosition - lastScrollPosition) > 100) {
        setAppHeight();
        lastScrollPosition = currentScrollPosition;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', setAppHeight);
      window.removeEventListener('orientationchange', setAppHeight);
      window.removeEventListener('scroll', handleScroll);
    };
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

    // *** Disable Lenis entirely for mobile devices to use native scrolling ***
    if (typeof window !== 'undefined' && !shouldReduceMotion && !isMobileDevice && !lenisRef.current) {
      // Initialize smooth scrolling with LENIS ONLY FOR DESKTOP
      gsap.registerPlugin(ScrollTrigger);

      // Adjust scroll configuration based on device (Desktop settings only now)
      const duration = 1.2; // Desktop value
      const lerp = 0.1;    // Desktop value
      const touchMultiplier = 2; // Desktop value (less relevant now, but keep)
      const wheelMultiplier = 1; // Desktop value

      // Create scroll experience for Desktop
      lenisRef.current = new Lenis({
        duration: duration,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        wheelMultiplier: wheelMultiplier,
        touchMultiplier: touchMultiplier, // Keep for potential touchpads on desktop
        smoothWheel: true, // Enable for desktop
        lerp: lerp,
        infinite: false,
        syncTouch: false // No need to sync touch if only for desktop
      });

      // // --- Removed mobile-specific browser checks --- 
      // const isOperaOrChrome = ...
      // const isSafari = ...
      // if (isOperaOrChrome && isMobileDevice) { ... }
      // if (isSafari && isMobileDevice) { ... }
    }

    // // --- RAF loop only needed if Lenis is active --- 
    let rafId: number | null = null;
    function raf(time: number) {
      lenisRef.current?.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    // Start RAF loop only if Lenis was initialized (i.e., on Desktop)
    if (lenisRef.current) {
        rafId = requestAnimationFrame(raf);
    }

    // Update ScrollTrigger when Lenis scrolls (only if Lenis exists)
    lenisRef.current?.on('scroll', ScrollTrigger.update);

    // Check for reduced motion preference - if enabled, destroy Lenis if it exists
    if (shouldReduceMotion && lenisRef.current) {
      lenisRef.current.destroy();
      lenisRef.current = null;
    }

    return () => {
      // Cancel RAF only if it was started
      if (rafId !== null) {
           cancelAnimationFrame(rafId);
      }
      // Destroy Lenis instance only if it exists
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      // // --- Clean up mobile-specific styles (no longer needed as they weren't applied) --- 
      // document.documentElement.style.overscrollBehavior = '';
      // const htmlStyle = document.documentElement.style as any;
      // if (htmlStyle.webkitOverflowScrolling) {
      //   htmlStyle.webkitOverflowScrolling = '';
      // }
    };
  }, [shouldReduceMotion, isMobile]); // Keep dependency on isMobile to re-evaluate if needed

  // Setup scroll progress bar with optimized RAF
  useEffect(() => {
    if (!progressBarRef.current) return;

    let ticking = false;
    let scrollPercentage = 0;
    let animationFrame: number;

    const updateProgressBar = () => {
      if (!progressBarRef.current) return;

      let scrollPosition = 0;
      let windowHeight = 0;
      let documentHeight = 0;

      if (lenisRef.current) {
        // Use Lenis properties if available (Desktop)
        scrollPosition = lenisRef.current.scroll;
        windowHeight = lenisRef.current.dimensions.height;
        documentHeight = lenisRef.current.dimensions.scrollHeight;
      } else {
        // Use window properties (Mobile or reduced motion)
        scrollPosition = window.scrollY;
        windowHeight = window.innerHeight;
        // Use the max of several height calculations to ensure accuracy
        documentHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight,
          document.documentElement.offsetHeight,
          document.body.offsetHeight
        );
      }

      // Ensure scrollable distance is positive and not including phantom space
      const totalScrollableDistance = Math.max(documentHeight - windowHeight, 0);

      scrollPercentage =
        totalScrollableDistance > 0
          ? (scrollPosition / totalScrollableDistance) * 100
          : 0;

      // Use GSAP only on Desktop (where Lenis exists), direct style for mobile
      if (lenisRef.current) {
        gsap.to(progressBarRef.current, {
          width: `${scrollPercentage}%`,
          duration: 0.1,
          ease: "power1.out",
          overwrite: true
        });
      } else {
        progressBarRef.current.style.width = `${scrollPercentage}%`;
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

    // Attach listener correctly based on whether Lenis is active
    if (lenisRef.current) {
      // Use Lenis event system
      lenisRef.current.on('scroll', onScroll);
    } else {
      // Use native window event system
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Initial update
    updateProgressBar();

    return () => {
      // Remove listener correctly
      if (lenisRef.current) {
        lenisRef.current.off('scroll', onScroll);
      } else {
        window.removeEventListener('scroll', onScroll);
      }
      cancelAnimationFrame(animationFrame);
    };
    // Depend on lenisRef.current to re-attach listeners if Lenis gets initialized/destroyed
  }, [pathname, isMobile, lenisRef.current]); 

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
          className="relative" // Add relative positioning if needed, remove min-h-screen
          style={{
            // Use our custom viewport height variable on mobile, normal dvh on desktop
            minHeight: isMobile ? 'var(--app-height)' : '100dvh',
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