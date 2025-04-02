export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  partnership?: {
    name: string;
    url: string;
  };
  technologies: string[];
  features: string[];
  results: string[];
}

const projects: Record<string, Project> = {
  'project-1': {
    title: 'Project One',
    category: 'Web Development',
    description: 'A modern web application built with Next.js and TypeScript.',
    image: '/images/portfolio/project-1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Responsive Design',
      'Dark Mode Support',
      'SEO Optimization'
    ],
    results: [
      'Increased user engagement by 50%',
      'Improved page load times by 30%'
    ]
  },
  // Add more projects as needed
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projects[slug];
}

export function getAllProjectSlugs() {
  return Object.keys(projects);
} 