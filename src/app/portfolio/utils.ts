export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  clientName: string;
  industry: string;
  servicesProvided: string[];
  partnership?: {
    name: string;
    url: string;
  };
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  images: string[];
  completed?: string; // Date or timeframe
}

const projects: Record<string, Project> = {
  'project-1': {
    title: 'Project One',
    category: 'Web Development',
    description: 'A modern web application built with Next.js and TypeScript.',
    image: '/images/portfolio/project-1.jpg',
    clientName: 'Example Client',
    industry: 'Technology',
    servicesProvided: ['Web Development', 'UI/UX Design'],
    challenge: 'The client needed a modern web application with excellent performance and SEO capabilities.',
    solution: 'We developed a custom Next.js application with TypeScript, featuring server-side rendering and optimized assets.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Responsive Design',
      'Dark Mode Support',
      'SEO Optimization'
    ],
    results: [
      'Increased user engagement by 50%',
      'Improved page load times by 30%'
    ],
    images: ['/images/portfolio/project-1.jpg']
  },
  // Add more projects as needed
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projects[slug];
}

export function getAllProjectSlugs() {
  return Object.keys(projects);
} 