import { projects } from './data';

export function getProjectBySlug(slug: string) {
  // Convert slug to a format that matches the project link
  const projectPath = `/portfolio/${slug}`;
  
  // Find the project that matches the slug
  const project = projects.find(p => p.link === projectPath);
  
  if (!project) {
    throw new Error(`Project with slug "${slug}" not found`);
  }
  
  return project;
}

export function getAllProjectSlugs() {
  return projects.map(project => ({
    slug: project.link.replace('/portfolio/', '')
  }));
} 