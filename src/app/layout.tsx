import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Inter } from 'next/font/google';
import ClientLayout from "@/components/ClientLayout";
import { ThemeProvider } from "next-themes";

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
      path: '../../public/fonts/Roundo-Semibold.woff2',
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
  display: 'swap',
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/PilcrowRounded-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Technor-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roundo-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${roundo.variable} ${pilcrow.variable} ${technor.variable} ${supreme.variable} font-roundo antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
