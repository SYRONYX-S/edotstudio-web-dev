import {
  RiPaletteLine,
  RiCodeSSlashLine,
  RiSmartphoneLine,
  RiPaintBrushLine,
  RiLineChartLine,
  RiDatabase2Line,
  RiLayoutLine,
  RiBarChartBoxLine
} from 'react-icons/ri';

// Services
export const services = [
  {
    id: 1,
    title: 'Branding',
    description: 'We create distinctive brand identities that resonate with your target audience and set you apart from competitors.',
    icon: RiPaletteLine,
    link: '/services#branding',
    color: '#C75000',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Our expert team builds responsive, high-performance websites that deliver exceptional user experiences.',
    icon: RiCodeSSlashLine,
    link: '/services#web-development',
    color: '#FF6B00',
  },
  {
    id: 3,
    title: 'App Development',
    description: 'We develop innovative mobile applications that solve problems and engage users across platforms.',
    icon: RiSmartphoneLine,
    link: '/services#app-development',
    color: '#7A3000',
  },
  {
    id: 4,
    title: 'Graphic Design',
    description: 'Our creative team crafts visually stunning designs that communicate your message effectively.',
    icon: RiPaintBrushLine,
    link: '/services#graphic-design',
    color: '#A34000',
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'We develop data-driven strategies to increase your online visibility and drive conversions.',
    icon: RiLineChartLine,
    link: '/services#marketing',
    color: '#FF7B35',
  },
  {
    id: 6,
    title: 'Software Development',
    description: 'Custom software solutions that automate processes and solve complex business challenges.',
    icon: RiDatabase2Line,
    link: '/services#software',
    color: '#522000',
  },
];

// Stats
export const stats = [
  {
    id: 1,
    value: 200,
    suffix: '+',
    label: 'Projects Completed',
  },
  {
    id: 2,
    value: 10,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    id: 3,
    value: 50,
    suffix: '+',
    label: 'Team Members',
  },
  {
    id: 4,
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    author: 'Sarah Johnson',
    position: 'CEO',
    company: 'GrowthMasters',
    avatar: '/images/testimonials/avatar-1.jpg',
    quote: 'Working with EdotStudio has been transformative for our business. Their team understood our vision and delivered a website that perfectly represents our brand. The results have exceeded our expectations!',
    rating: 5,
  },
  {
    id: 2,
    author: 'David Rodriguez',
    position: 'Marketing Director',
    company: 'InnovateHub',
    avatar: '/images/testimonials/avatar-2.jpg',
    quote: 'The team at EdotStudio is incredibly talented and professional. They developed a mobile app for our company that has received outstanding feedback from our users. Their attention to detail and commitment to quality is unmatched.',
    rating: 5,
  },
  {
    id: 3,
    author: 'Emily Thompson',
    position: 'Founder',
    company: 'ArtisanCrafts',
    avatar: '/images/testimonials/avatar-3.jpg',
    quote: 'EdotStudio created a brand identity that perfectly captures the essence of our business. Their creative approach and strategic thinking have helped us stand out in a competitive market. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    author: 'Michael Chen',
    position: 'CTO',
    company: 'TechNova',
    avatar: '/images/testimonials/avatar-4.jpg',
    quote: 'I\'ve worked with many development agencies, but EdotStudio stands apart. Their technical expertise and ability to solve complex problems made our project a success. They deliver high-quality work within tight deadlines.',
    rating: 5,
  },
];

// Client Logos
export const clients = [
  {
    name: 'TechCorp',
    logo: '/images/clients/client-1.svg',
  },
  {
    name: 'InnovateLabs',
    logo: '/images/clients/client-2.svg',
  },
  {
    name: 'GrowthMax',
    logo: '/images/clients/client-3.svg',
  },
  {
    name: 'FutureWorks',
    logo: '/images/clients/client-4.svg',
  },
  {
    name: 'GlobalBrand',
    logo: '/images/clients/client-5.svg',
  },
  {
    name: 'NextLevel',
    logo: '/images/clients/client-6.svg',
  },
];

// Portfolio Projects
export const portfolioProjects = [
  {
    id: 1,
    title: 'TechNova Website Redesign',
    category: 'Web Development',
    image: '/images/portfolio/project-1.jpg',
    href: '/portfolio/technova-website-redesign',
  },
  {
    id: 2,
    title: 'GreenEarth Mobile App',
    category: 'App Development',
    image: '/images/portfolio/project-2.jpg',
    href: '/portfolio/greenearth-mobile-app',
  },
  {
    id: 3,
    title: 'FreshBite Brand Identity',
    category: 'Branding',
    image: '/images/portfolio/project-3.jpg',
    href: '/portfolio/freshbite-brand-identity',
  },
  {
    id: 4,
    title: 'ArtisanCrafts E-commerce Platform',
    category: 'Web Development',
    image: '/images/portfolio/project-4.jpg',
    href: '/portfolio/artisancrafts-ecommerce',
  },
  {
    id: 5,
    title: 'UrbanStyle Marketing Campaign',
    category: 'Marketing & Design',
    image: '/images/portfolio/project-5.jpg',
    href: '/portfolio/urbanstyle-marketing',
  },
  {
    id: 6,
    title: 'FitnessPro Dashboard',
    category: 'Software Development',
    image: '/images/portfolio/project-6.jpg',
    href: '/portfolio/fitnesspro-dashboard',
  },
];

// Team Members
export const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'Founder & CEO',
    image: '/images/team/team-1.jpg',
    bio: 'Alex founded EdotStudio with a vision to create a digital agency that combines creativity with technical excellence. With over 15 years of experience in the industry, Alex leads our team with passion and innovation.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    }
  },
  {
    id: 2,
    name: 'Sophia Chen',
    position: 'Creative Director',
    image: '/images/team/team-2.jpg',
    bio: 'Sophia brings over a decade of design expertise to EdotStudio. Her creative vision and eye for detail have shaped our design philosophy and helped clients achieve their branding goals.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      dribbble: 'https://dribbble.com',
    }
  },
  {
    id: 3,
    name: 'Marcus Williams',
    position: 'Lead Developer',
    image: '/images/team/team-3.jpg',
    bio: 'Marcus leads our development team with a focus on creating performant, scalable solutions. His expertise in multiple programming languages and frameworks ensures our technical execution is always top-notch.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    }
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    position: 'Marketing Strategist',
    image: '/images/team/team-4.jpg',
    bio: 'Elena develops data-driven marketing strategies that drive results. Her analytical approach and creativity help our clients reach their target audiences effectively.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    }
  },
  {
    id: 5,
    name: 'Daniel Kim',
    position: 'UX Designer',
    image: '/images/team/team-5.jpg',
    bio: 'Daniel creates user experiences that are both beautiful and functional. His deep understanding of user behavior and design principles results in interfaces that users love.',
    social: {
      linkedin: 'https://linkedin.com',
      dribbble: 'https://dribbble.com',
    }
  },
  {
    id: 6,
    name: 'Olivia Thompson',
    position: 'Project Manager',
    image: '/images/team/team-6.jpg',
    bio: 'Olivia ensures our projects run smoothly from start to finish. Her exceptional organizational skills and client-focused approach guarantee that we deliver on time and exceed expectations.',
    social: {
      linkedin: 'https://linkedin.com',
    }
  },
  {
    id: 7,
    name: 'James Wilson',
    position: 'App Developer',
    image: '/images/team/team-7.jpg',
    bio: 'James specializes in mobile app development, creating native and cross-platform applications that provide exceptional user experiences across devices.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    }
  },
  {
    id: 8,
    name: 'Zoe Garcia',
    position: 'Content Strategist',
    image: '/images/team/team-8.jpg',
    bio: 'Zoe crafts compelling content that tells our clients\' stories and engages their audiences. Her strategic approach to content helps brands communicate effectively.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    }
  },
]; 