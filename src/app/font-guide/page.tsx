'use client';

import React from 'react';
import Link from 'next/link';
import FontFix from '@/components/FontFix';
import { motion } from 'framer-motion';

export default function FontGuidePage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass dark:glass-dark text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            DEVELOPER GUIDE
          </div>
          <h1 className="text-4xl md:text-6xl mb-6 !font-roundo">
            Font Usage Guide
          </h1>
          <p className="text-muted-foreground dark:text-white/70 max-w-2xl mx-auto text-lg">
            A comprehensive guide on how to use fonts in the EdotStudio website.
          </p>
        </motion.div>
        
        <FontFix />
        
        <div className="my-16">
          <div className="bg-white dark:bg-dark-200 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl mb-6 !font-roundo text-primary">
              Why Font Classes Might Not Apply
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-3 !font-roundo">1. CSS Specificity Wars</h3>
                <p>
                  When multiple CSS rules target the same element, browsers use specificity 
                  to determine which rule takes precedence. Component libraries or frameworks 
                  might have higher specificity rules overriding your classes.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl mb-3 !font-roundo">2. Inheritance Issues</h3>
                <p>
                  Font properties can be inherited from parent elements. If a parent element 
                  has a font-family with higher specificity, child elements will inherit it 
                  unless explicitly overridden.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl mb-3 !font-roundo">3. CSS Order Matters</h3>
                <p>
                  CSS rules are applied in the order they appear in the stylesheet. Later rules 
                  override earlier ones with the same specificity. Check if your font class is 
                  being overridden by a later rule.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl mb-3 !font-roundo">4. Components with Hardcoded Fonts</h3>
                <p>
                  Components like AnimatedTitle might have hardcoded font classes that override 
                  your className props. We've updated these components to respect your font choices.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="bg-white dark:bg-dark-200 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl mb-6 !font-roundo text-primary">
              Our Font Family
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl mb-3 !font-roundo">Roundo</h3>
                <p className="mb-2">Default for headings. A rounded, modern sans-serif.</p>
                <div className="p-4 bg-gray-100 dark:bg-dark-300 rounded !font-roundo">
                  <p className="text-2xl">Roundo Regular</p>
                  <p className="text-2xl font-bold">Roundo Bold</p>
                  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p>abcdefghijklmnopqrstuvwxyz</p>
                  <p>1234567890!@#$%^&*()</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl mb-3 !font-roundo">Pilcrow</h3>
                <p className="mb-2">Default for body text. A clean, readable sans-serif.</p>
                <div className="p-4 bg-gray-100 dark:bg-dark-300 rounded !font-pilcrow">
                  <p className="text-2xl">Pilcrow Regular</p>
                  <p className="text-2xl font-bold">Pilcrow Bold</p>
                  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p>abcdefghijklmnopqrstuvwxyz</p>
                  <p>1234567890!@#$%^&*()</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl mb-3 !font-roundo">Technor</h3>
                <p className="mb-2">Optional for technical or futuristic sections.</p>
                <div className="p-4 bg-gray-100 dark:bg-dark-300 rounded !font-technor">
                  <p className="text-2xl">Technor Regular</p>
                  <p className="text-2xl font-bold">Technor Bold</p>
                  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p>abcdefghijklmnopqrstuvwxyz</p>
                  <p>1234567890!@#$%^&*()</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl mb-3 !font-roundo">Supreme</h3>
                <p className="mb-2">Optional for elegant, sophisticated sections.</p>
                <div className="p-4 bg-gray-100 dark:bg-dark-300 rounded !font-supreme">
                  <p className="text-2xl">Supreme Regular</p>
                  <p className="text-2xl font-bold">Supreme Bold</p>
                  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p>abcdefghijklmnopqrstuvwxyz</p>
                  <p>1234567890!@#$%^&*()</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 inline-block"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 