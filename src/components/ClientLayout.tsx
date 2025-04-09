'use client';

import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";
import CursorFollower from "./CursorFollower";
import FloatingButtons from "./FloatingButtons";
import Preloader from "./Preloader";
import Providers from "../app/providers";
// import ScrollBackground from "./ScrollBackground"; // Old background
import ParticleBackground from "./ParticleBackground"; // New background
import PageWrapper from "./PageWrapper";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Preloader />
      
      {/* Background layer */}
      <ParticleBackground />
      
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
    </Providers>
  );
} 