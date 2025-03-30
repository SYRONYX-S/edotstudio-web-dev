'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-white/5 backdrop-blur-lg dark:bg-black/20 shadow-lg' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold font-roundo text-foreground dark:text-white">
            Logo
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => {
              const isActive = mounted && (href === '/' 
                ? pathname === '/'
                : pathname?.startsWith(href));

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative py-2 text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-foreground dark:text-white/70 hover:text-primary dark:hover:text-primary'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <Link
            href="/contact"
            className={`bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-glow hover:shadow-glow-lg ${
              pathname === '/contact' ? 'ring-2 ring-primary/20' : ''
            }`}
          >
            Start a Project
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </motion.header>
  );
} 