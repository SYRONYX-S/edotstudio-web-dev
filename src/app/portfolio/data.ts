import { Project } from './utils';

export const projects: Record<string, Project> = {
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
  'project-2': {
    title: 'Project Two',
    category: 'Mobile Development',
    description: 'A cross-platform mobile app built with React Native.',
    image: '/images/portfolio/project-2.jpg',
    technologies: ['React Native', 'TypeScript', 'Redux'],
    features: [
      'Cross-platform Support',
      'Offline Functionality',
      'Push Notifications'
    ],
    results: [
      'Over 100,000 downloads',
      'Average rating of 4.8 stars'
    ]
  }
}; 