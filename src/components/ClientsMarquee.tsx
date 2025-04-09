'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import AnimatedTitle from '@/components/AnimatedTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Client {
  name: string;
  logo: string;
  website: string;
  padding?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  width?: number;
  height?: number;
  grayscaleLight?: boolean;
  grayscaleDark?: boolean;
}

const CARD_WIDTH = 240;
const GAP = 8;
const MOVE_OFFSET = CARD_WIDTH + GAP; // 248

const ClientsMarquee = () => {
  const [isMobile, setIsMobile] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const currentOffset = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const hasDragged = useRef(false);
  const isButtonAnimating = useRef(false);
  const animationDuration = isMobile ? 30000 : 50000; // 30s mobile, 50s desktop (in ms)

  const clients: Client[] = [
    { 
      name: 'Al-Khuloud', 
      logo: '/images/clients/Al-Khuloud.png', 
      website: 'https://alkhuloud.com',
      padding: { top: 10, bottom: 10 },
      width: 190,
      height: 60,
    },
    { 
      name: 'Ayamon Polymers', 
      logo: '/images/clients/Ayamon-polymers.png', 
      website: 'https://dunes.com',
      padding: { top: 12, bottom: 12 },
      width: 140,
      height: 20,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Brandlifte', 
      logo: '/images/clients/brandlifte.png', 
      website: 'https://dunes.com',
      padding: { top: 12, bottom: 12 },
      width: 220,
      height: 20,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Ecoscape', 
      logo: '/images/clients/carbon.png', 
      website: 'https://ecoscape.com',
      padding: { left: 15, right: 15 },
      width: 160,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Frostbite', 
      logo: '/images/clients/Celecca.png', 
      website: 'https://frostbite.com',
      width: 80,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Glow', 
      logo: '/images/clients/Dplus.png', 
      website: 'https://glow.com',
      padding: { top: 8, bottom: 8 },
      width: 160,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Luminary', 
      logo: '/images/clients/DU-website.png', 
      website: 'https://luminary.com',
      width: 160,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Nexus', 
      logo: '/images/clients/Greenvior.png', 
      website: 'https://nexus.com',
      padding: { top: 15, bottom: 15 },
      width: 160,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Hikeins', 
      logo: '/images/clients/Hikeins.png', 
      website: 'https://hikeins.com',
      width: 160,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Indigo', 
      logo: '/images/clients/Indigo-tmt.png', 
      website: 'https://indigo.com',
      padding: { left: 10, right: 10 },
      width: 160,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Minar', 
      logo: '/images/clients/Minar-TMT.png', 
      website: 'https://minar.com',
      width: 70,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'NadanCamp', 
      logo: '/images/clients/nadancamp.png', 
      website: 'https://nadancamp.com',
      padding: { top: 12, bottom: 12 },
      width: 140,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
    { 
      name: 'Shazzam', 
      logo: '/images/clients/Shazzam.png', 
      website: 'https://shazzam.com',
      width: 190,
      height: 60,
      grayscaleLight: false,
      grayscaleDark: false,
    },
  ];

  const allClients = [...clients, ...clients, ...clients];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 991);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const setupContinuousAnimation = useCallback(() => {
    const marquee = marqueeRef.current;
    if (!marquee || animationRef.current) return;

    const totalWidth = marquee.scrollWidth / 3;
    if (totalWidth === 0) return; 

    // Ensure starting offset is within bounds for seamless loop
    currentOffset.current = currentOffset.current % totalWidth;
    if (currentOffset.current > 0) {
        currentOffset.current -= totalWidth;
    }

    const keyframes = [
      { transform: `translateX(${currentOffset.current}px)` },
      { transform: `translateX(${currentOffset.current - totalWidth}px)` }
    ];

    const animation = marquee.animate(keyframes, {
      duration: animationDuration,
      iterations: Infinity,
      easing: 'linear',
    });

    animationRef.current = animation;
    
    // Sync currentOffset when animation naturally loops or finishes (though it's infinite)
    animation.onfinish = () => { 
        // This might not be strictly needed for infinite, but good practice
        currentOffset.current = (currentOffset.current - totalWidth) % totalWidth;
    };

  }, [animationDuration]);

  useEffect(() => {
    // Initial setup
    setupContinuousAnimation();
    // Cleanup on unmount
    return () => animationRef.current?.cancel(); 
  }, [setupContinuousAnimation]);

  const updateCurrentOffsetFromAnimation = () => {
      if (!animationRef.current || !marqueeRef.current) return;
      const style = window.getComputedStyle(marqueeRef.current);
      const matrix = new DOMMatrix(style.transform);
      currentOffset.current = matrix.m41;
  };

  const pauseAnimation = () => {
    if (animationRef.current && animationRef.current.playState === 'running') {
        updateCurrentOffsetFromAnimation();
        animationRef.current.pause();
    }
  };

  const playAnimation = () => {
    if (animationRef.current && animationRef.current.playState !== 'running') {
        // Restart from the potentially updated currentOffset
        animationRef.current.cancel();
        animationRef.current = null;
        setupContinuousAnimation(); 
    }
  };

  // Controls
  const moveByOffset = (offset: number) => {
    if (!marqueeRef.current || isButtonAnimating.current) return;
    isButtonAnimating.current = true;

    pauseAnimation(); // Pause continuous loop
    const startOffset = currentOffset.current;
    const targetOffset = startOffset + offset;

    const buttonAnim = marqueeRef.current.animate(
      [{ transform: `translateX(${startOffset}px)` }, { transform: `translateX(${targetOffset}px)` }],
      { duration: 300, easing: 'ease-out', fill: 'forwards' }
    );

    buttonAnim.onfinish = () => {
      currentOffset.current = targetOffset; // Update ref after animation
      isButtonAnimating.current = false;
      playAnimation(); // Resume continuous loop from new position
    };
  };

  const moveLeft = () => moveByOffset(MOVE_OFFSET);
  const moveRight = () => moveByOffset(-MOVE_OFFSET);

  // Dragging Logic
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const onPointerDown = (clientX: number, isTouchEvent: boolean) => {
        if (isButtonAnimating.current) return;
        isDragging.current = true;
        hasDragged.current = false;
        dragStartX.current = clientX;
        pauseAnimation(); // Pause on drag start
        dragStartOffset.current = currentOffset.current;
        marquee.style.cursor = 'grabbing';
        if (isTouchEvent) marquee.style.touchAction = 'none';
    };

    const onPointerMove = (clientX: number) => {
        if (!isDragging.current) return;
        hasDragged.current = true;
        const diff = clientX - dragStartX.current;
        const newOffset = dragStartOffset.current + diff;
        marquee.style.transform = `translateX(${newOffset}px)`;
        // Do NOT update currentOffset.current here, only on finish
    };

    const onPointerUp = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        marquee.style.cursor = 'grab';
        marquee.style.removeProperty('touch-action');

        // Get final position from transform and update ref
        const style = window.getComputedStyle(marquee);
        const matrix = new DOMMatrix(style.transform);
        currentOffset.current = matrix.m41;

        playAnimation(); // Resume continuous loop
    };

    const handleMouseDown = (e: MouseEvent) => {
        e.preventDefault();
        onPointerDown(e.clientX, false);
    };
    const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX);
    const handleMouseUp = () => onPointerUp();

    const handleTouchStart = (e: TouchEvent) => onPointerDown(e.touches[0].clientX, true);
    const handleTouchMove = (e: TouchEvent) => {
        if (isDragging.current) {
            e.preventDefault();
            onPointerMove(e.touches[0].clientX);
        }
    };
    const handleTouchEnd = () => onPointerUp();
    
    const handleClickCapture = (e: MouseEvent) => {
        if (hasDragged.current) {
            e.stopPropagation();
            e.preventDefault();
        }
    };

    marquee.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    marquee.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    marquee.addEventListener('click', handleClickCapture, true); 

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
        if (marquee) {
            marquee.removeEventListener('mousedown', handleMouseDown);
            marquee.removeEventListener('touchstart', handleTouchStart);
            marquee.removeEventListener('click', handleClickCapture, true);
        }
        animationRef.current?.cancel(); // Clean up animation on unmount
    };
  }, [setupContinuousAnimation]); // Add setupContinuousAnimation dependency

  return (
    <section className="py-20 bg-transparent relative">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            BRANDS COLLABORATIONS
          </div>
          <AnimatedTitle 
            title="Brands that trust us"
            className="text-2xl md:text-4xl mb-4 font-technor text-white"
          />
        </div>
      </div>

      <div className="relative group">
        {/* Controls */} 
        <button 
          onClick={moveLeft}
          disabled={isButtonAnimating.current}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-gradient-to-r from-black/30 to-transparent hover:from-black/50 rounded-r-md flex items-center justify-center text-white/60 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>
        <button 
          onClick={moveRight}
          disabled={isButtonAnimating.current}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-gradient-to-l from-black/30 to-transparent hover:from-black/50 rounded-l-md flex items-center justify-center text-white/60 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>

        {/* Marquee container */} 
        <div 
          ref={containerRef} 
          className="relative w-full overflow-hidden"
          onMouseEnter={pauseAnimation}
          onMouseLeave={() => {
            if (!isDragging.current && !isButtonAnimating.current) {
              playAnimation();
            }
          }}
        >
          <div 
            ref={marqueeRef}
            className="flex gap-8 cursor-grab clients-marquee select-none"
            style={{
              willChange: 'transform',
              transform: 'translateX(0px)', // Start at 0, animation will take over
            }}
          >
            {allClients.map((client, index) => (
              <a
                key={`${client.name}-${index}`}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="relative min-w-[240px] h-24 group bg-[#1A1A1A]/10 hover:bg-white opacity-90 hover:opacity-100 dark:bg-white/80 dark:opacity-50 dark:hover:opacity-100 hover:dark:bg-white/100 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0"
                draggable={false} 
                style={{
                  padding: client.padding ? 
                    `${client.padding.top || 0}px ${client.padding.right || 0}px ${client.padding.bottom || 0}px ${client.padding.left || 0}px` 
                    : '0px',
                }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width || 180}
                  height={client.height || 60}
                  className="object-contain group-hover:scale-110 transition duration-500 pointer-events-none"
                  loading="eager"
                  priority={index < 6}
                  draggable={false}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Remove CSS animation styles */}
      <style jsx global>{`
        .clients-marquee {
          /* Prevent text selection during drag */
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `}</style>
    </section>
  );
};

export default ClientsMarquee;