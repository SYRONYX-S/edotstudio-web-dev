export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  image: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  deliveryModel: {
    title: string;
    description: string;
  }[];
  technologies?: string[];
  faq?: {
    question: string;
    answer: string;
  }[];
  relatedProjects?: string[];
  callToAction?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
  isInHouse: boolean;
}

// This is a placeholder for the actual service data
// Services are categorized as in-house or partnered
const services: Record<string, Service> = {
  'web-development': {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'Creating exceptional web experiences',
    description: 'We build modern, responsive, and high-performance websites that deliver exceptional user experiences.',
    overview: 'Our web development team combines technical expertise with creative design to create websites that engage your audience and achieve your business goals. We specialize in building custom websites, web applications, and e-commerce solutions that are tailored to your specific needs.',
    image: '/images/services/web-dev.jpg',
    icon: 'FaCode',
    features: [
      'Custom Website Design & Development',
      'E-commerce Solutions',
      'Content Management Systems',
      'Web Applications',
      'Progressive Web Apps',
      'Website Optimization & Maintenance',
      'API Development & Integration',
      'Custom WordPress Development',
      'Headless CMS Solutions',
      'Web Performance Optimization'
    ],
    benefits: [
      'Improved user experience leading to higher engagement',
      'Mobile-responsive design for all devices',
      'SEO-friendly code structure for better search rankings',
      'Fast loading speeds for reduced bounce rates',
      'Scalable architecture that grows with your business',
      'Secure coding practices to protect your data'
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'We start by understanding your goals, target audience, and technical requirements.' },
      { step: 2, title: 'Planning', description: 'We create wireframes, sitemaps, and technical specifications to guide the development process.' },
      { step: 3, title: 'Design', description: 'Our team develops visual mockups and user interface designs for your approval.' },
      { step: 4, title: 'Development', description: 'We build your website with clean, efficient, and maintainable code.' },
      { step: 5, title: 'Testing', description: 'Rigorous testing ensures perfect functionality across devices and browsers.' },
      { step: 6, title: 'Launch', description: 'We deploy your website and provide training and support for your team.' }
    ],
    deliveryModel: [
      { 
        title: 'Fixed-Price Projects', 
        description: 'For well-defined projects with clear requirements, we offer fixed-price contracts with agreed-upon deliverables and timelines.' 
      },
      { 
        title: 'Time & Material', 
        description: 'For projects with evolving requirements or ongoing development needs, our time and material model provides flexibility and transparency.' 
      },
      { 
        title: 'Retainer Services', 
        description: 'For ongoing maintenance and support, our retainer services ensure your website remains updated, secure, and optimized.' 
      }
    ],
    technologies: [
      'React.js',
      'Next.js',
      'Vue.js',
      'Node.js',
      'PHP',
      'WordPress',
      'Shopify',
      'Tailwind CSS',
      'TypeScript',
      'GraphQL'
    ],
    faq: [
      {
        question: 'How long does it take to build a website?',
        answer: 'The timeline for a website project depends on its complexity. A basic informational website might take 4-6 weeks, while a complex e-commerce platform or web application could take 3-6 months. We\'ll provide a detailed timeline during the planning phase.'
      },
      {
        question: 'Do you offer website maintenance services?',
        answer: 'Yes, we offer comprehensive website maintenance services including security updates, performance optimization, content updates, and technical support. Our maintenance packages are customizable to meet your specific needs.'
      },
      {
        question: 'Can you redesign my existing website?',
        answer: 'Absolutely! We specialize in website redesigns that improve both aesthetics and functionality. We\'ll evaluate your current website, identify areas for improvement, and develop a plan to enhance your online presence while preserving your brand identity.'
      }
    ],
    relatedProjects: ['minar-tmt', 'khayal-media'],
    callToAction: {
      title: 'Ready to Build Your Dream Website?',
      description: 'Let\'s discuss how we can create a website that elevates your brand, engages your audience, and drives business growth.',
      buttonText: 'Start Your Project',
      buttonLink: '/contact'
    },
    isInHouse: true
  },
  'app-development': {
    id: 'app-development',
    title: 'App Development',
    subtitle: 'Creating powerful mobile solutions',
    description: 'Our team creates intuitive and feature-rich mobile applications for iOS and Android platforms.',
    overview: 'We focus on creating seamless user experiences, optimized performance, and scalable architecture to ensure your app stands out in the market. Our app development services cover everything from concept to launch, with ongoing support to ensure your app\'s success.',
    image: '/images/services/app-dev.jpg',
    icon: 'FaMobileAlt',
    features: [
      'Native iOS & Android Development',
      'Cross-Platform Development',
      'UI/UX Design for Mobile',
      'App Strategy & Consulting',
      'App Maintenance & Updates',
      'App Store Optimization',
      'Push Notification Integration',
      'Offline Functionality',
      'Analytics & Tracking',
      'App Security & Testing'
    ],
    benefits: [
      'Reach your audience on their preferred devices',
      'Create new revenue streams and business opportunities',
      'Improve customer engagement and loyalty',
      'Gather valuable user data and insights',
      'Enhance brand recognition and visibility',
      'Provide personalized user experiences'
    ],
    process: [
      { step: 1, title: 'Strategy', description: 'We define your app\'s purpose, features, and target platform based on your business goals and user needs.' },
      { step: 2, title: 'Design', description: 'Our team creates wireframes and user interface designs optimized specifically for mobile experiences.' },
      { step: 3, title: 'Development', description: 'We build your app with robust code and efficient architecture using the appropriate technologies.' },
      { step: 4, title: 'Testing', description: 'Comprehensive testing across devices and operating systems ensures a flawless user experience.' },
      { step: 5, title: 'Deployment', description: 'We handle the submission process to launch your app on the App Store or Google Play Store.' },
      { step: 6, title: 'Maintenance', description: 'Ongoing support, updates, and feature enhancements keep your app relevant and performant.' }
    ],
    deliveryModel: [
      { 
        title: 'MVP Development', 
        description: 'We can build a Minimum Viable Product to validate your app idea quickly and cost-effectively before full development.' 
      },
      { 
        title: 'Full-Cycle Development', 
        description: 'From concept to launch, we handle every aspect of development with regular milestones and deliverables.' 
      },
      { 
        title: 'Ongoing Enhancement', 
        description: 'Post-launch services to add features, optimize performance, and respond to user feedback.' 
      }
    ],
    technologies: [
      'Swift',
      'Kotlin',
      'React Native',
      'Flutter',
      'Firebase',
      'Node.js',
      'GraphQL',
      'AWS',
      'Google Cloud',
      'Azure'
    ],
    faq: [
      {
        question: 'Should I build a native or cross-platform app?',
        answer: 'The choice depends on your specific requirements. Native apps offer the best performance and access to platform-specific features but require separate development for iOS and Android. Cross-platform solutions like React Native or Flutter provide cost efficiency and faster development while still delivering near-native experiences. We\'ll help you determine the best approach based on your goals, budget, and timeline.'
      },
      {
        question: 'How much does it cost to develop a mobile app?',
        answer: 'App development costs vary widely based on complexity, features, and platforms. Simple apps might start at $25,000, while complex applications with extensive features can range from $100,000 to $500,000+. We provide detailed estimates after understanding your specific requirements.'
      },
      {
        question: 'How long does it take to develop a mobile app?',
        answer: 'Development timelines typically range from 3-9 months depending on complexity. A simple app might take 3-4 months, while a feature-rich application could take 6-9 months or more. We break down projects into sprints with regular deliverables to ensure transparent progress.'
      }
    ],
    relatedProjects: ['mindful-ksa'],
    callToAction: {
      title: 'Ready to Bring Your App Idea to Life?',
      description: 'Let\'s discuss how we can transform your concept into a successful mobile application that users will love.',
      buttonText: 'Start Your App Project',
      buttonLink: '/contact'
    },
    isInHouse: true
  },
  'software-solutions': {
    id: 'software-solutions',
    title: 'Software Solutions',
    subtitle: 'Custom enterprise software development',
    description: 'We develop robust, scalable software solutions tailored to your business needs.',
    overview: 'Our enterprise software development services help streamline operations, improve efficiency, and drive innovation across your organization. We specialize in creating custom software solutions that address specific business challenges and provide a competitive advantage.',
    image: '/images/services/software.jpg',
    icon: 'FaCogs',
    features: [
      'Custom Software Development',
      'Enterprise Resource Planning (ERP)',
      'Customer Relationship Management (CRM)',
      'Business Intelligence Solutions',
      'Cloud Migration Services',
      'Legacy System Modernization',
      'API Development & Integration',
      'Database Design & Optimization',
      'Workflow Automation',
      'Security Implementation'
    ],
    benefits: [
      'Streamlined business processes for improved efficiency',
      'Reduced operational costs through automation',
      'Improved data visibility and decision-making',
      'Enhanced employee productivity and collaboration',
      'Better customer service and satisfaction',
      'Scalable solutions that grow with your business'
    ],
    process: [
      { step: 1, title: 'Requirements Analysis', description: 'We gather and analyze business requirements and technical specifications to understand your needs.' },
      { step: 2, title: 'Architecture Design', description: 'Our team designs a scalable and secure software architecture that aligns with your business goals.' },
      { step: 3, title: 'Development', description: 'We build your software using best practices and modern technologies, with regular progress updates.' },
      { step: 4, title: 'Testing', description: 'Comprehensive testing ensures quality, reliability, and security across all components.' },
      { step: 5, title: 'Deployment', description: 'We deploy your solution with minimal disruption to your operations, including data migration if needed.' },
      { step: 6, title: 'Support', description: 'Ongoing maintenance and support services keep your software running smoothly and securely.' }
    ],
    deliveryModel: [
      { 
        title: 'Agile Development', 
        description: 'We use agile methodologies to deliver working software in short sprints, allowing for frequent feedback and adjustments.' 
      },
      { 
        title: 'Dedicated Team', 
        description: 'For complex, long-term projects, we provide a dedicated team of developers, designers, and project managers.' 
      },
      { 
        title: 'Hybrid Model', 
        description: 'A flexible approach combining elements of fixed-price and time-material models to balance predictability and adaptability.' 
      }
    ],
    technologies: [
      'Java',
      'Python',
      '.NET',
      'Node.js',
      'React.js',
      'Angular',
      'SQL Server',
      'PostgreSQL',
      'MongoDB',
      'AWS/Azure/GCP',
      'Docker',
      'Kubernetes'
    ],
    faq: [
      {
        question: 'How do you ensure the security of custom software?',
        answer: 'Security is integrated throughout our development process. We implement secure coding practices, conduct regular security assessments, employ encryption for sensitive data, implement robust authentication and authorization mechanisms, and perform penetration testing. Our applications comply with relevant security standards and regulations for your industry.'
      },
      {
        question: 'Can you integrate with our existing systems?',
        answer: 'Yes, we specialize in system integration. We can develop APIs and connectors to seamlessly integrate your new software with existing systems, including legacy applications, third-party services, and enterprise platforms. This ensures data flows smoothly across your organization while preserving your existing investments.'
      },
      {
        question: 'Do you provide documentation and training?',
        answer: 'Absolutely. Comprehensive documentation and training are essential for successful software adoption. We provide detailed technical documentation, user manuals, and administrative guides. We also offer customized training sessions for end-users, administrators, and IT staff to ensure everyone can effectively use and maintain the software.'
      }
    ],
    relatedProjects: ['mindful-ksa'],
    callToAction: {
      title: 'Ready to Streamline Your Business Operations?',
      description: 'Let\'s discuss how custom software can solve your business challenges and drive growth.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    },
    isInHouse: true
  },
  'ui-ux-design': {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    subtitle: 'Creating intuitive user experiences',
    description: 'Our UI/UX design services focus on creating beautiful, intuitive interfaces that enhance user engagement and satisfaction.',
    overview: 'We combine aesthetic excellence with functional design to deliver experiences that users love. Our design process is research-driven, ensuring that we create interfaces that not only look great but also deliver exceptional usability and meet your business objectives.',
    image: '/images/services/ui-ux.jpg',
    icon: 'FaPalette',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'User Interface Design',
      'User Experience Design',
      'Interaction Design',
      'Usability Testing',
      'Design Systems',
      'Responsive Design',
      'Accessibility Compliance',
      'Design Handoff'
    ],
    benefits: [
      'Increased user engagement and satisfaction',
      'Reduced development costs through early problem detection',
      'Improved conversion rates and user retention',
      'Consistent brand experience across all touchpoints',
      'Accessibility for all users, including those with disabilities',
      'Competitive advantage through superior user experience'
    ],
    process: [
      { step: 1, title: 'Research', description: 'We conduct in-depth research to understand user needs, behaviors, and pain points.' },
      { step: 2, title: 'Wireframing', description: 'We create low-fidelity wireframes to outline structure and flow before visual design begins.' },
      { step: 3, title: 'Design', description: 'Our designers develop high-fidelity designs with attention to detail and brand consistency.' },
      { step: 4, title: 'Prototyping', description: 'Interactive prototypes allow stakeholders to experience the design before development.' },
      { step: 5, title: 'Testing', description: 'We conduct usability testing with real users to gather feedback and identify improvements.' },
      { step: 6, title: 'Refinement', description: 'Designs are refined based on testing results and feedback for optimal user experience.' }
    ],
    deliveryModel: [
      { 
        title: 'Design Sprints', 
        description: 'Intensive, time-constrained sessions to rapidly design, prototype, and test ideas with stakeholders.' 
      },
      { 
        title: 'Full-Cycle Design', 
        description: 'Comprehensive design services from research to final design handoff for development.' 
      },
      { 
        title: 'Design System Creation', 
        description: 'Development of reusable components and design guidelines to ensure consistency across products.' 
      }
    ],
    technologies: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'InVision',
      'Principle',
      'Framer',
      'Zeplin',
      'Maze',
      'Hotjar',
      'UserTesting'
    ],
    faq: [
      {
        question: 'What\'s the difference between UI and UX design?',
        answer: 'UI (User Interface) design focuses on the visual elements users interact with—colors, buttons, typography, and layouts. UX (User Experience) design is broader, encompassing the entire user journey and how users feel while interacting with your product. While UI is about the look and feel, UX ensures the product is useful, usable, and enjoyable. Our approach integrates both disciplines for cohesive design solutions.'
      },
      {
        question: 'How do you measure the success of a design?',
        answer: 'We measure design success through quantitative metrics (conversion rates, task completion times, error rates) and qualitative feedback (user satisfaction scores, testimonials). We establish baseline measurements before design implementation and track improvements afterward. For each project, we define specific KPIs aligned with your business goals to ensure our designs deliver tangible results.'
      },
      {
        question: 'Do you follow accessibility standards?',
        answer: 'Yes, accessibility is a core aspect of our design process. We design to WCAG (Web Content Accessibility Guidelines) standards, ensuring our interfaces are usable by people with diverse abilities. This includes considerations for color contrast, keyboard navigation, screen reader compatibility, and more. Accessible design not only serves all users but also improves SEO and helps meet legal requirements.'
      }
    ],
    relatedProjects: ['khayal-media', 'mindful-ksa'],
    callToAction: {
      title: 'Ready to Enhance Your User Experience?',
      description: 'Let\'s create intuitive, engaging designs that delight your users and drive business results.',
      buttonText: 'Get Started',
      buttonLink: '/contact'
    },
    isInHouse: false
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'Driving growth through strategic marketing',
    description: 'Our data-driven marketing strategies help you reach your target audience and achieve your business goals.',
    overview: 'We create comprehensive marketing campaigns that increase brand awareness, generate leads, and drive conversions. Our approach combines creativity with analytics to deliver measurable results that grow your business and maximize your marketing ROI.',
    image: '/images/services/marketing.jpg',
    icon: 'RiMegaphoneLine',
    features: [
      'Digital Marketing Strategy',
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Pay-Per-Click Advertising',
      'Conversion Rate Optimization',
      'Marketing Analytics & Reporting',
      'Influencer Marketing',
      'Video Marketing'
    ],
    benefits: [
      'Increased brand visibility and recognition',
      'Higher quality leads and improved conversion rates',
      'Better ROI on marketing investments',
      'Data-driven insights for continuous improvement',
      'Consistent messaging across all channels',
      'Targeted campaigns that reach the right audience'
    ],
    process: [
      { step: 1, title: 'Analysis', description: 'We evaluate your current marketing efforts, competitors, and market opportunities.' },
      { step: 2, title: 'Strategy', description: 'We develop a tailored marketing plan aligned with your business goals and target audience.' },
      { step: 3, title: 'Execution', description: 'Our team implements marketing campaigns across the most effective channels for your audience.' },
      { step: 4, title: 'Monitoring', description: 'We continuously track performance using analytics and key performance metrics.' },
      { step: 5, title: 'Optimization', description: 'Based on data and market response, we refine strategies to improve results.' },
      { step: 6, title: 'Reporting', description: 'Transparent reports provide clear insights into results, ROI, and recommendations.' }
    ],
    deliveryModel: [
      { 
        title: 'Monthly Retainers', 
        description: 'Ongoing marketing services with a dedicated team working on your campaigns each month.' 
      },
      { 
        title: 'Project-Based Campaigns', 
        description: 'Focused marketing initiatives with specific goals, timelines, and deliverables.' 
      },
      { 
        title: 'Consultation & Strategy', 
        description: 'Expert guidance and planning services for businesses managing execution in-house.' 
      }
    ],
    technologies: [
      'Google Analytics',
      'Google Ads',
      'Facebook Ads Manager',
      'LinkedIn Campaign Manager',
      'SEMrush',
      'Ahrefs',
      'Mailchimp',
      'HubSpot',
      'Hootsuite',
      'Canva'
    ],
    faq: [
      {
        question: 'How long does it take to see results from digital marketing?',
        answer: 'Timeline varies by channel and goals. PPC advertising can show immediate results, while SEO typically takes 3-6 months to demonstrate significant impact. Social media marketing results often emerge within 1-3 months. Content marketing is a long-term strategy that builds momentum over 6-12 months. We establish realistic timelines for each strategy and provide regular progress updates.'
      },
      {
        question: 'How do you measure marketing ROI?',
        answer: 'We track key performance indicators (KPIs) specific to your goals—conversions, leads, sales, engagement metrics—and calculate return on ad spend (ROAS) or cost per acquisition (CPA). We implement proper tracking (UTM parameters, conversion pixels, call tracking) to attribute results accurately. Monthly reports show both direct ROI metrics and contributing factors like brand awareness and engagement.'
      },
      {
        question: 'Do you specialize in particular industries?',
        answer: 'While we work across various sectors, we have particular expertise in technology, healthcare, education, e-commerce, and professional services. Our team includes specialists who understand industry-specific challenges and opportunities. We quickly adapt our strategies to any industry by conducting thorough research and leveraging transferable marketing principles.'
      }
    ],
    relatedProjects: [],
    callToAction: {
      title: 'Ready to Boost Your Digital Presence?',
      description: 'Let\'s create data-driven marketing strategies that connect with your audience and drive measurable business growth.',
      buttonText: 'Start Marketing Smarter',
      buttonLink: '/contact'
    },
    isInHouse: false
  },
  'business-services': {
    id: 'business-services',
    title: 'Business Services',
    subtitle: 'Comprehensive legal and business support',
    description: 'We provide essential business services to help startups and established companies navigate legal, financial, and operational challenges.',
    overview: 'Our business services include legal solutions, financial planning, and operational support tailored to the needs of digital businesses and tech startups. We help you establish a solid foundation for growth while ensuring compliance with relevant regulations.',
    image: '/images/services/business.jpg',
    icon: 'FaBalanceScale',
    features: [
      'Business Registration & Incorporation',
      'Legal Documentation & Contracts',
      'Intellectual Property Protection',
      'Compliance & Regulatory Guidance',
      'Financial Planning & Budgeting',
      'Tax Planning & Optimization',
      'Investment & Funding Guidance',
      'Operational Process Design',
      'Risk Management',
      'Strategic Business Planning'
    ],
    benefits: [
      'Reduced legal and compliance risks',
      'Protection for intellectual property and digital assets',
      'Optimized tax structures and financial efficiency',
      'Clear contracts and agreements for partnerships and clients',
      'Solid foundation for business growth and investment',
      'Expert guidance for complex business decisions'
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'We evaluate your current business structure, legal standing, and operational needs.' },
      { step: 2, title: 'Planning', description: 'Our team develops a comprehensive plan addressing your specific business requirements.' },
      { step: 3, title: 'Implementation', description: 'We implement the recommended solutions, handling documentation and filing processes.' },
      { step: 4, title: 'Compliance', description: 'Ongoing support ensures continued compliance with changing regulations.' },
      { step: 5, title: 'Optimization', description: 'Regular reviews identify opportunities to improve efficiency and reduce costs.' },
      { step: 6, title: 'Growth Support', description: 'As your business evolves, we adapt our services to support your changing needs.' }
    ],
    deliveryModel: [
      { 
        title: 'One-Time Setup', 
        description: 'Comprehensive business establishment services including registration, documentation, and initial compliance.' 
      },
      { 
        title: 'Advisory Services', 
        description: 'Ongoing consultation and guidance for legal, financial, and operational decisions.' 
      },
      { 
        title: 'Compliance Packages', 
        description: 'Regular review and maintenance of legal and regulatory compliance requirements.' 
      }
    ],
    faq: [
      {
        question: 'What business structure is best for my digital company?',
        answer: 'The optimal structure depends on various factors including liability concerns, tax considerations, funding plans, and operational complexity. Common options include sole proprietorship, LLC, corporation, or partnership. We evaluate your specific situation and goals to recommend the most advantageous structure, considering both short-term flexibility and long-term growth potential.'
      },
      {
        question: 'How do I protect my digital products and intellectual property?',
        answer: 'Protection strategies include copyright registration for original content, trademark registration for brand elements, patent applications for unique technical inventions, and trade secret protocols for proprietary processes. We also implement robust contracts (NDAs, licensing agreements, terms of service) and digital rights management systems to safeguard your intellectual assets across all channels.'
      },
      {
        question: 'What compliance issues should digital businesses be aware of?',
        answer: 'Digital businesses must navigate various regulations including data privacy laws (GDPR, CCPA), electronic commerce regulations, advertising standards, consumer protection rules, and industry-specific compliance requirements. International businesses face additional complexity with cross-border transactions. We provide a comprehensive compliance framework tailored to your specific business model and jurisdictions.'
      }
    ],
    relatedProjects: [],
    callToAction: {
      title: 'Ready to Build a Strong Business Foundation?',
      description: 'Let\'s ensure your business is legally sound, financially optimized, and positioned for sustainable growth.',
      buttonText: 'Get Expert Guidance',
      buttonLink: '/contact'
    },
    isInHouse: false
  }
};

export function getServiceById(id: string): Service | undefined {
  return services[id];
}

export function getAllServiceIds(): string[] {
  return Object.keys(services);
}

export function getInHouseServices(): Service[] {
  return Object.values(services).filter(service => service.isInHouse);
}

export function getPartnerServices(): Service[] {
  return Object.values(services).filter(service => !service.isInHouse);
} 