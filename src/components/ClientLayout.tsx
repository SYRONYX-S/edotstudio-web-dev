'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from "./Navigation";
import Footer from "./Footer";
import CursorFollower from "./CursorFollower";
import FloatingButtons from "./FloatingButtons";
import Preloader from "./Preloader";
import Providers from "../app/providers";
import ScrollBackground from "./ScrollBackground";
import PageWrapper from "./PageWrapper";
import { useState } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [images] = useState([
    '/logo-dark.svg',
    '/logo-light.svg',
    '/images/hero/hero-graphic.svg',
    '/images/clients/Al-Khuloud.png',
    '/images/clients/Brandlifte.png',
    '/images/clients/Ayamon-polymers.png',
    '/images/clients/carbon.png',
    '/images/clients/Celecca.png',
    '/images/clients/Dplus.png',
    '/images/clients/DU-website.png',
    '/images/clients/Greenvior.png',
    '/images/clients/Hikeins.png',
    '/images/clients/Indigo-tmt.png',
    '/images/clients/Minar-TMT.png',
    '/images/clients/nadancamp.png',
    '/images/clients/Shazzam.png',
  ]);

  return (
    <Providers>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader 
            onLoadingComplete={() => setIsLoading(false)}
            images={images}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <CursorFollower />
        <Navigation />
        <PageWrapper>
          <main id="main-content" className="min-h-screen pt-20">{children}</main>
        </PageWrapper>
        <Footer />
        <FloatingButtons />
      </div>

      {/* Background layer */}
      <div className="fixed inset-0 z-[-1]">
        <ScrollBackground />
      </div>
    </Providers>
  );
} 