'use client';

import React from 'react';
import Link from 'next/link';

export default function FontFix() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl mb-8 font-roundo" style={{ fontFamily: 'var(--font-roundo)' }}>
        Font Demonstration with CSS Forcing
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white dark:bg-dark-200 rounded-xl shadow">
          <h3 className="text-xl mb-4 text-primary font-roundo" style={{ fontFamily: 'var(--font-roundo)' }}>
            Method 1: Using style attribute (strongest)
          </h3>
          <p className="mb-4 font-pilcrow" style={{ fontFamily: 'var(--font-pilcrow)' }}>
            This text uses the Pilcrow font applied via inline style attribute.
          </p>
          <p className="mb-4 font-technor" style={{ fontFamily: 'var(--font-technor)' }}>
            This text uses the Technor font applied via inline style attribute.
          </p>
          <p className="font-supreme" style={{ fontFamily: 'var(--font-supreme)' }}>
            This text uses the Supreme font applied via inline style attribute.
          </p>
        </div>
        
        <div className="p-6 bg-white dark:bg-dark-200 rounded-xl shadow">
          <h3 className="text-xl mb-4 text-primary !font-roundo">
            Method 2: Using !important class
          </h3>
          <p className="mb-4 !font-pilcrow">
            This text uses the Pilcrow font with !important class modifier.
          </p>
          <p className="mb-4 !font-technor">
            This text uses the Technor font with !important class modifier.
          </p>
          <p className="!font-supreme">
            This text uses the Supreme font with !important class modifier.
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-white dark:bg-dark-200 rounded-xl shadow">
        <h3 className="text-xl mb-4 text-primary font-roundo" style={{ fontFamily: 'var(--font-roundo)' }}>
          How to Force Font Application
        </h3>
        <div className="space-y-4">
          <p className="font-pilcrow" style={{ fontFamily: 'var(--font-pilcrow)' }}>
            Option 1: Use inline style attribute (most reliable):
          </p>
          <pre className="p-4 bg-gray-100 dark:bg-dark-300 rounded overflow-x-auto">
            {`<h1 style={{ fontFamily: 'var(--font-roundo)' }} className="font-roundo">
  Heading with Roundo Font
</h1>`}
          </pre>
          
          <p className="font-pilcrow" style={{ fontFamily: 'var(--font-pilcrow)' }}>
            Option 2: Use !important class modifier (Tailwind JIT mode):
          </p>
          <pre className="p-4 bg-gray-100 dark:bg-dark-300 rounded overflow-x-auto">
            {`<h1 className="!font-roundo">
  Heading with Roundo Font
</h1>`}
          </pre>
          
          <p className="font-pilcrow" style={{ fontFamily: 'var(--font-pilcrow)' }}>
            Option 3: Update global CSS (for all components):
          </p>
          <pre className="p-4 bg-gray-100 dark:bg-dark-300 rounded overflow-x-auto">
            {`.font-roundo {
  font-family: var(--font-roundo) !important;
}`}
          </pre>
        </div>
        
        <div className="mt-8">
          <Link 
            href="/"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 