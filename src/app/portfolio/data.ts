export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  client: string;
  services: string[];
  year: string;
  partnership?: {
    name: string;
    url: string;
  };
  challenge?: string;
  solution?: string;
  results?: string;
  images?: {
    src: string;
    alt: string;
  }[];
}

export const projects: Project[] = [
  {
    title: 'Enterprise Resource Planning System',
    description: 'Custom ERP solution with real-time analytics and automated workflows for streamlined business operations.',
    image: '/portfolio/erp.jpg',
    category: 'Software Development',
    link: '/portfolio/erp-system',
    client: 'TechCorp Industries',
    services: ['Software Development', 'UI/UX Design', 'System Integration'],
    year: '2024'
  },
  {
    title: 'Healthcare Management Platform',
    description: 'Comprehensive healthcare platform enabling telemedicine, patient management, and medical record tracking.',
    image: '/portfolio/healthcare.jpg',
    category: 'Web Development',
    link: '/portfolio/healthcare-platform',
    client: 'MedTech Solutions',
    services: ['Web Development', 'Mobile App', 'Cloud Infrastructure'],
    year: '2023'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time analytics platform with predictive insights and interactive data visualization.',
    image: '/portfolio/analytics.jpg',
    category: 'Software Development',
    link: '/portfolio/analytics-dashboard',
    client: 'DataSense Corp',
    services: ['AI Development', 'Data Analytics', 'Dashboard Design'],
    year: '2023'
  },
  {
    title: 'E-commerce Brand Identity',
    description: 'Complete brand identity and marketing strategy for a luxury fashion e-commerce platform.',
    image: '/portfolio/brand.jpg',
    category: 'Branding',
    link: '/portfolio/ecommerce-brand',
    client: 'StyleHub',
    services: ['Brand Strategy', 'Visual Identity', 'Marketing Collateral'],
    year: '2023',
    partnership: {
      name: 'Brandlifté',
      url: 'https://brandlifte.com'
    }
  },
  {
    title: 'Digital Marketing Campaign',
    description: 'Integrated digital marketing campaign with social media strategy and content creation.',
    image: '/portfolio/marketing.jpg',
    category: 'Marketing',
    link: '/portfolio/marketing-campaign',
    client: 'GrowthMax',
    services: ['Digital Marketing', 'Content Strategy', 'Social Media'],
    year: '2023',
    partnership: {
      name: 'Brandlifté',
      url: 'https://brandlifte.com'
    }
  },
  {
    title: 'Product Launch Campaign Posters',
    description: 'Series of eye-catching posters for a major product launch campaign.',
    image: '/portfolio/posters.jpg',
    category: 'Posters',
    link: '/portfolio/launch-posters',
    client: 'InnovateTech',
    services: ['Graphic Design', 'Print Design', 'Campaign Strategy'],
    year: '2023',
    partnership: {
      name: 'DesignStudio',
      url: 'https://designstudio.com'
    }
  },
  {
    title: 'Event Marketing Materials',
    description: 'Comprehensive set of marketing materials for a tech conference.',
    image: '/portfolio/event.jpg',
    category: 'Posters',
    link: '/portfolio/event-materials',
    client: 'TechConf',
    services: ['Event Design', 'Print Design', 'Digital Assets'],
    year: '2023'
  },
  {
    title: 'Mobile Banking App',
    description: 'Modern banking application with advanced security features and intuitive UX.',
    image: '/portfolio/banking.jpg',
    category: 'Software Development',
    link: '/portfolio/banking-app',
    client: 'SecureBank',
    services: ['Mobile Development', 'UX Design', 'Security Implementation'],
    year: '2023'
  },
  {
    title: 'Restaurant Website & Ordering System',
    description: 'Full-featured restaurant website with online ordering and reservation system.',
    image: '/portfolio/restaurant.jpg',
    category: 'Web Development',
    link: '/portfolio/restaurant-platform',
    client: 'Gourmet Group',
    services: ['Web Development', 'E-commerce', 'System Integration'],
    year: '2023'
  },
  {
    title: 'Corporate Brand Refresh',
    description: 'Complete corporate rebranding including logo, guidelines, and marketing materials.',
    image: '/portfolio/corporate.jpg',
    category: 'Branding',
    link: '/portfolio/corporate-rebrand',
    client: 'Enterprise Solutions',
    services: ['Brand Strategy', 'Visual Identity', 'Guidelines'],
    year: '2024',
    partnership: {
      name: 'Brandlifté',
      url: 'https://brandlifte.com'
    }
  }
]; 