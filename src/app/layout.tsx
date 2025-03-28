import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CursorFollower from "../components/CursorFollower";
import FloatingButtons from "../components/FloatingButtons";
import Preloader from "../components/Preloader";
import { cn } from "@/lib/utils";
import Providers from "./providers";

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
      path: '../../public/fonts/PilcrowRounded-SemiBold.woff2',
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

export const metadata: Metadata = {
  title: "EdotStudio | Top-Tier Digital Solutions Agency",
  description: "EdotStudio is a leading digital solutions agency specializing in branding, marketing, web/app/software development, and graphic design.",
  keywords: ["digital agency", "web development", "app development", "branding", "graphic design", "marketing"],
  authors: [{ name: "EdotStudio Team" }],
  creator: "EdotStudio",
  metadataBase: new URL("https://edotstudio.com"),
  openGraph: {
    type: "website",
    title: "EdotStudio | Top-Tier Digital Solutions Agency",
    description: "EdotStudio is a leading digital solutions agency specializing in branding, marketing, web/app/software development, and graphic design.",
    url: "https://edotstudio.com",
    siteName: "EdotStudio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EdotStudio - Digital Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EdotStudio | Top-Tier Digital Solutions Agency",
    description: "EdotStudio is a leading digital solutions agency specializing in branding, marketing, web/app/software development, and graphic design.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(
        roundo.variable,
        pilcrow.variable,
        "antialiased font-pilcrow relative"
      )}>
        <Providers>
          <Preloader />
          {/* Global animated background shapes */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden animated-bg-shapes opacity-20">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          <CursorFollower />
          <Navigation />
          <main id="main-content" className="relative z-10 pt-20">{children}</main>
          <Footer />
          <FloatingButtons />
        </Providers>
      </body>
    </html>
  );
}
