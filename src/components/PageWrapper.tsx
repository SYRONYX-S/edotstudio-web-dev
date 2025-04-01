'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from 'lenis';

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
    let lenis: Lenis | null = null;

    // Only initialize Lenis on the client side
    if (typeof window !== 'undefined') {
      // Give a small delay to ensure everything is loaded
      const timer = setTimeout(() => {
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          if (lenis) {
            lenis.raf(time);
          }
          requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);
      }, 100);

      // Cleanup
      return () => {
        clearTimeout(timer);
        if (lenis) {
          lenis.destroy();
        }
      };
    }
    
    return undefined;
  }, [pathname]);

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
          
      progressBarRef.current.style.width = `${scrollPercentage}%`;
    };

    window.addEventListener('scroll', updateProgressBar);
    // Initial update
    updateProgressBar();
    
    return () => window.removeEventListener('scroll', updateProgressBar);
  }, [pathname]);

  // Intercept navigation actions
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const linkElement = target.closest('a');
      
      if (linkElement && 
          linkElement.href && 
          linkElement.href.startsWith(window.location.origin) && 
          !linkElement.target && 
          !linkElement.hasAttribute('download') &&
          !e.ctrlKey && 
          !e.metaKey) {
        e.preventDefault();
        setIsNavigating(true);
        
        // Extract the pathname
        const url = new URL(linkElement.href);
        
        // Wait for animation out to finish
        setTimeout(() => {
          router.push(url.pathname);
        }, 300);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [router]);

  // Reset navigation state after page change
  useEffect(() => {
    setIsNavigating(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  // Page transition variants
  const variants = {
    hidden: { opacity: 0, x: isNavigating ? -100 : 100 },
    enter: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.5 
      }
    },
    exit: { 
      opacity: 0, 
      x: isNavigating ? 100 : -100,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
  };

  return (
    <>
      {/* Progress Bar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-black/10 dark:bg-white/10 z-[60]">
        <div 
          ref={progressBarRef}
          className="h-full bg-primary-light transition-all ease-out duration-200"
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
        >
          {pageContent}
        </motion.div>
      </AnimatePresence>
    </>
  );
} 