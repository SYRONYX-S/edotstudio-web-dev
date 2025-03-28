/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C75000',
          50: '#FFE8D6',
          100: '#FFD0B5',
          200: '#FFA97F',
          300: '#FF7B35',
          400: '#FF6B00',
          500: '#C75000', // Burnt Orange - Key Color
          600: '#A34000',
          700: '#7A3000',
          800: '#522000',
          900: '#301300',
        },
        secondary: {
          DEFAULT: '#1B1B1B',
          light: '#444444',
          dark: '#000000',
        },
        light: {
          DEFAULT: '#FFFFFF',
          100: '#FCFCFC',
          200: '#F7F7F7',
          300: '#F0F0F0',
          400: '#E0E0E0',
        },
        dark: {
          DEFAULT: '#1B1B1B',
          100: '#2A2A2A',
          200: '#222222',
          300: '#1F1F1F',
          400: '#181818',
          500: '#0F0F0F',
        },
      },
      fontFamily: {
        technor: ['var(--font-technor)'],
        supreme: ['var(--font-supreme)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero/hero-bg.svg')",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(199, 80, 0, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(199, 80, 0, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
        'inner-dark': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow-primary': '0 0 15px rgba(199, 80, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 