import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | EdotStudio',
  description: 'Learn about how EdotStudio collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and your rights.',
  keywords: [
    'privacy policy',
    'data protection',
    'personal information',
    'data security',
    'privacy rights',
    'data collection',
    'data usage',
    'EdotStudio privacy',
    'website privacy',
    'online privacy'
  ],
  openGraph: {
    title: 'Privacy Policy | EdotStudio',
    description: 'Learn about how EdotStudio collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and your rights.',
    url: 'https://edotstudio.com/privacy',
    siteName: 'EdotStudio',
    images: [
      {
        url: '/images/privacy-policy-og.jpg',
        width: 1200,
        height: 630,
        alt: 'EdotStudio Privacy Policy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | EdotStudio',
    description: 'Learn about how EdotStudio collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and your rights.',
    images: ['/images/privacy-policy-og.jpg']
  },
  alternates: {
    canonical: 'https://edotstudio.com/privacy'
  }
}; 