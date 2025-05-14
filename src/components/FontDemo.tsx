'use client';

import React from 'react';

/**
 * FontDemo - A component demonstrating all available fonts
 * 
 * Usage:
 * - Pilcrow is the default font for body text
 * - Roundo is the default font for headings
 * - Technor and Supreme can be applied with their respective classes
 */
export default function FontDemo() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="glass dark:glass-dark p-6 rounded-xl">
        <h2 className="text-2xl font-roundo mb-4">Font Guide</h2>
        
        <div className="space-y-6">
          {/* Roundo - Default for headings */}
          <div className="space-y-2">
            <h3 className="text-xl text-primary font-roundo">Roundo Font</h3>
            <p className="text-gray-700 dark:text-gray-300">Default font for all headings (h1-h6)</p>
            <div className="p-4 bg-white/50 dark:bg-dark-200/50 rounded-lg font-roundo">
              <p>The quick brown fox jumps over the lazy dog. 1234567890</p>
              <p className="font-bold">Bold: The quick brown fox jumps over the lazy dog.</p>
            </div>
          </div>

          {/* Pilcrow - Default for body text */}
          <div className="space-y-2">
            <h3 className="text-xl text-primary font-roundo">Pilcrow Font</h3>
            <p className="text-gray-700 dark:text-gray-300">Default font for body text and paragraphs</p>
            <div className="p-4 bg-white/50 dark:bg-dark-200/50 rounded-lg">
              <p>The quick brown fox jumps over the lazy dog. 1234567890</p>
              <p className="font-bold">Bold: The quick brown fox jumps over the lazy dog.</p>
            </div>
          </div>

          {/* Technor - Optional font */}
          <div className="space-y-2">
            <h3 className="text-xl text-primary font-roundo">Technor Font</h3>
            <p className="text-gray-700 dark:text-gray-300">Apply with the class <code className="bg-gray-100 dark:bg-dark-300 px-2 py-1 rounded">font-technor</code></p>
            <div className="p-4 bg-white/50 dark:bg-dark-200/50 rounded-lg font-technor">
              <p>The quick brown fox jumps over the lazy dog. 1234567890</p>
              <p className="font-bold">Bold: The quick brown fox jumps over the lazy dog.</p>
            </div>
          </div>

          {/* Supreme - Optional font */}
          <div className="space-y-2">
            <h3 className="text-xl text-primary font-roundo">Supreme Font</h3>
            <p className="text-gray-700 dark:text-gray-300">Apply with the class <code className="bg-gray-100 dark:bg-dark-300 px-2 py-1 rounded">font-supreme</code></p>
            <div className="p-4 bg-white/50 dark:bg-dark-200/50 rounded-lg font-supreme">
              <p>The quick brown fox jumps over the lazy dog. 1234567890</p>
              <p className="font-bold">Bold: The quick brown fox jumps over the lazy dog.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 