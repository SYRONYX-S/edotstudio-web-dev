'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowLeftLine, RiHome4Line } from 'react-icons/ri';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* 404 Section */}
      <section className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02] -z-10" />
        
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF4D00]/5 dark:bg-[#FF4D00]/10 rounded-full filter blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF4D00]/5 dark:bg-[#FF4D00]/10 rounded-full filter blur-[128px]" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <h1 className="text-[8rem] md:text-[12rem] font-technor font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF3800] via-[#FF5500] to-[#FF6B00]/90">
                404
              </h1>
              <div className="absolute -inset-1 border-2 border-dashed border-[#FF4D00]/20 dark:border-[#FF4D00]/30 rounded-xl -z-10 animate-pulse-slow" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-medium font-technor mb-6">
            Page Not Found
          </h2>
          
          <p className="max-w-lg mx-auto text-gray-700 dark:text-gray-300 mb-10 font-pilcrow">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="javascript:history.back()"
              className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 overflow-hidden relative border-2 border-[#FF4D00]/40 dark:border-[#FF4D00]/40 text-[#FF4D00] dark:text-[#FF4D00] hover:border-[#FF4D00] hover:text-white dark:hover:text-white hover:bg-[#FF4D00] dark:hover:bg-[#FF4D00] h-11 px-6 text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                <RiArrowLeftLine className="mr-2" />
                Go Back
              </span>
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 overflow-hidden relative bg-[#FF4D00] dark:bg-[#FF4D00] text-white dark:text-white hover:bg-[#FF6B00] dark:hover:bg-[#FF6B00] font-pilcrow h-11 px-6 text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                <RiHome4Line className="mr-2" />
                Back to Home
              </span>
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-10 bg-[#FF4D00]/5 dark:bg-[#FF4D00]/10 rounded-full filter blur-[40px]" />
            <Image
              src="/logo-dark.svg"
              width={180}
              height={180}
              alt="EdotStudio Logo" 
              className="w-36 h-36 object-contain opacity-20 block dark:hidden"
            />
            <Image
              src="/logo-light.svg"
              width={180}
              height={180}
              alt="EdotStudio Logo" 
              className="w-36 h-36 object-contain opacity-20 hidden dark:block"
            />
          </div>
        </div>
        
        <div className="absolute top-10 left-10 hidden lg:block">
          <div className="w-32 h-32 rounded-full border-2 border-dashed border-[#FF4D00]/10 dark:border-[#FF4D00]/20 animate-spin-slow" />
        </div>
      </section>
    </div>
  );
} 