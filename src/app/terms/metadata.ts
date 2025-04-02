import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | EdotStudio',
  description: 'Read our terms of service to understand our project workflow, payment terms, intellectual property rights, and client responsibilities. Clear guidelines for working with EdotStudio.',
  keywords: [
    'terms of service',
    'service terms',
    'project workflow',
    'payment terms',
    'intellectual property',
    'client responsibilities',
    'legal terms',
    'EdotStudio terms',
    'development terms',
    'service agreement'
  ],
  openGraph: {
    title: 'Terms of Service | EdotStudio',
    description: 'Read our terms of service to understand our project workflow, payment terms, intellectual property rights, and client responsibilities. Clear guidelines for working with EdotStudio.',
    url: 'https://edotstudio.com/terms',
    siteName: 'EdotStudio',
    images: [
      {
        url: '/images/terms-of-service-og.jpg',
        width: 1200,
        height: 630,
        alt: 'EdotStudio Terms of Service'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | EdotStudio',
    description: 'Read our terms of service to understand our project workflow, payment terms, intellectual property rights, and client responsibilities. Clear guidelines for working with EdotStudio.',
    images: ['/images/terms-of-service-og.jpg']
  },
  alternates: {
    canonical: 'https://edotstudio.com/terms'
  }
}; 