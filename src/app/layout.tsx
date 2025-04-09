import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Inter } from 'next/font/google';
import ClientLayout from "@/components/ClientLayout";

// Load local fonts
const roundo = localFont({
  src: [
    {
      path: '../../public/fonts/Roundo-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roundo-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roundo-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roundo-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-roundo',
});

const pilcrow = localFont({
  src: [
    {
      path: '../../public/fonts/PilcrowRounded-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PilcrowRounded-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PilcrowRounded-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PilcrowRounded-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-pilcrow',
});

const technor = localFont({
  src: [
    {
      path: '../../public/fonts/Technor-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Technor-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-technor',
});

const supreme = localFont({
  src: [
    {
      path: '../../public/fonts/Supreme-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Supreme-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Supreme-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-supreme',
});

const inter = Inter({ subsets: ['latin'] });

// Enhanced SEO metadata
export const metadata: Metadata = {
  title: {
    template: '%s | EdotStudio - Custom Web & App Development Agency',
    default: 'EdotStudio - Premium Web Development & Digital Solutions Agency',
  },
  description: 'EdotStudio is a premier website development agency specializing in custom web design, responsive development, app creation, branding & digital strategy. Our expert team builds conversion-focused websites that drive business growth.',
  keywords: [
    'website development',
    'professional web design',
    'custom website development',
    'responsive web design',
    'premium web development',
    'app development',
    'mobile applications',
    'website design services',
    'digital agency',
    'branding services',
    'UI/UX design',
    'EdotStudio',
    'enterprise web solutions',
    'digital transformation',
    'e-commerce websites',
  ],
  authors: [{ name: 'EdotStudio Team' }],
  metadataBase: new URL('https://edotstudio.com'),
  applicationName: 'EdotStudio',
  creator: 'EdotStudio',
  publisher: 'EdotStudio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://edotstudio.com/',
    title: 'EdotStudio - Premium Web & App Development Agency',
    description: 'EdotStudio is a top-tier digital solutions agency specializing in branding, marketing, web/app/software development, and graphic design.',
    siteName: 'EdotStudio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EdotStudio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EdotStudio - Premium Web & App Development Agency',
    description: 'EdotStudio is a top-tier digital solutions agency specializing in branding, marketing, web/app/software development, and graphic design.',
    images: ['/images/twitter-image.jpg'],
    creator: '@edotstudio',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#FF4D00',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

// Viewport and theme color configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://edotstudio.com" />
      </head>
      <body className={`${roundo.variable} ${pilcrow.variable} ${technor.variable} ${supreme.variable} antialiased relative`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
