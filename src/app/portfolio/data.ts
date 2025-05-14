import { Project } from './utils';

export const projects: Record<string, Project> = {
  'minar-tmt': {
    title: 'Minar TMT - Corporate Website Revamp',
    category: 'Web Development',
    description: 'A modern, responsive website redesign for a leading steel manufacturing company focused on showcasing products and improving lead generation.',
    image: '/portfolio/minartmt.webp',
    clientName: 'Minar TMT',
    industry: 'Manufacturing',
    servicesProvided: ['Web Development', 'UI/UX Design'],
    partnership: {
      name: 'Brandlifté',
      url: 'https://brandlifte.com'
    },
    challenge: "Minar TMT needed a modern, responsive website to showcase their steel products and manufacturing capabilities. Their existing site had poor mobile responsiveness, outdated design, and wasn't effectively generating leads.",
    solution: "We developed a custom WordPress site with a focus on user experience and SEO. The new site features a product catalog with detailed specifications, a dynamic gallery of manufacturing facilities, and integrated contact forms for lead generation. Our partner, Brandlifté, provided UI/UX design mockups.",
    technologies: ['WordPress', 'PHP', 'JavaScript', 'SCSS'],
    features: [
      'Responsive product catalog with filtering capabilities',
      'Interactive manufacturing process overview',
      'Multilingual support for regional customers',
      'Integrated lead generation forms with CRM integration',
      'Performance optimization for fast page loading'
    ],
    results: [
      'Achieved a 50% increase in online inquiries within 3 months of launch',
      'Improved site speed by 40%, reducing bounce rate by 25%',
      'Enhanced mobile conversion rate by 35%',
      'Increased organic search traffic by 45% due to improved SEO structure'
    ],
    testimonial: {
      quote: "EdotStudio delivered exactly what we needed, on time and within budget. The new website has significantly improved our online presence and lead generation capabilities.",
      author: "Rajesh Kumar",
      position: "Marketing Director, Minar TMT"
    },
    images: [
      '/portfolio/minartmt.webp',
      '/portfolio/minartmt-detail-1.webp',
      '/portfolio/minartmt-detail-2.webp'
    ],
    completed: 'January 2023'
  },
  'mindful-ksa': {
    title: 'Mindful KSA - Mental Health Platform',
    category: 'Software Development',
    description: 'A comprehensive mental health platform connecting therapists with clients and providing self-help resources for the Saudi Arabian market.',
    image: '/portfolio/mindfulksa.webp',
    clientName: 'Mindful KSA',
    industry: 'Healthcare',
    servicesProvided: ['Web Development', 'App Development', 'Software Solutions'],
    challenge: "Mindful KSA needed a secure, culturally-appropriate platform to connect mental health professionals with clients in Saudi Arabia. They required features for appointment scheduling, secure video sessions, payment processing, and resource libraries - all while ensuring compliance with healthcare regulations and cultural sensitivities.",
    solution: "We built a comprehensive platform with React.js for the frontend and Node.js for the backend, featuring end-to-end encrypted video sessions, secure payment processing, and a resource library. The platform included separate portals for therapists and clients, with a matching algorithm to connect users with appropriate professionals.",
    technologies: ['React.js', 'Node.js', 'MongoDB', 'WebRTC', 'Stripe API'],
    features: [
      'End-to-end encrypted video consultation system',
      'AI-powered therapist matching algorithm',
      'Appointment scheduling with timezone detection',
      'Secure payment processing',
      'Multilingual support (Arabic/English)',
      'Mobile-responsive design for all devices'
    ],
    results: [
      'Successfully onboarded 50+ certified therapists within first month',
      'Facilitated 500+ therapy sessions in the first quarter',
      'Achieved 92% user satisfaction rate based on post-session surveys',
      'Reduced admin workload by 70% through automated scheduling and payment processing'
    ],
    testimonial: {
      quote: "EdotStudio created a platform that perfectly balances technical sophistication with cultural sensitivity. Their understanding of both the technical and cultural requirements made this project a success.",
      author: "Dr. Fatima Al-Saud",
      position: "Founder, Mindful KSA"
    },
    images: [
      '/portfolio/mindfulksa.webp',
      '/portfolio/mindfulksa-detail-1.webp',
      '/portfolio/mindfulksa-detail-2.webp'
    ],
    completed: 'March 2023'
  },
  'khayal-media': {
    title: 'Khayal Media - Content Creator Platform',
    category: 'Web Development',
    description: 'A digital platform for content creators to showcase their work, connect with brands, and manage collaborations.',
    image: '/portfolio/khayal.webp',
    clientName: 'Khayal Media Group',
    industry: 'Media & Entertainment',
    servicesProvided: ['Web Development', 'UI/UX Design'],
    partnership: {
      name: 'ContentPro',
      url: 'https://contentpro.com'
    },
    challenge: "Khayal Media needed a platform where content creators could showcase their portfolios, connect with brands for sponsorships, and manage their collaborations. They required features for analytics, contract management, and secure payment processing, all with a highly visual, engaging interface.",
    solution: "We developed a custom web application using Next.js and Tailwind CSS, with a Node.js backend. The platform includes portfolio management, collaboration management, analytics dashboards, and secure messaging. Our partner, ContentPro, provided content strategy and specialized features for content metrics.",
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS'],
    features: [
      'Visual portfolio builder with media optimization',
      'Brand matchmaking algorithm',
      'Real-time analytics dashboard',
      'Collaboration management system',
      'Contract generation and e-signatures',
      'Secure messaging and file sharing'
    ],
    results: [
      'Platform launched with 200+ content creators from Saudi Arabia and UAE',
      'Facilitated over 50 brand partnerships in the first two months',
      'Average portfolio creation time of just 15 minutes, beating industry average of 2+ hours',
      'Achieved 40% growth in user base month-over-month since launch'
    ],
    testimonial: {
      quote: "The platform EdotStudio built has revolutionized how we connect creators with brands. The intuitive design and powerful features have exceeded our expectations and created real value for our community.",
      author: "Ahmad Al-Rashid",
      position: "CEO, Khayal Media Group"
    },
    images: [
      '/portfolio/khayal.webp',
      '/portfolio/khayal-detail-1.webp',
      '/portfolio/khayal-detail-2.webp'
    ],
    completed: 'September 2023'
  }
}; 