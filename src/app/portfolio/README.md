# Portfolio Documentation

This document explains how to add new works and case studies to the portfolio section.

## File Structure

```
src/app/portfolio/
├── data.ts           # Contains all project data
├── utils.ts          # Helper functions for handling project data
├── page.tsx          # Main portfolio page
├── [slug]/           # Dynamic case study pages
│   └── page.tsx      # Case study template
└── README.md         # This documentation
```

## Adding a New Project

1. Open `data.ts` and add a new project to the `projects` array:

```typescript
{
  title: 'Project Title',
  description: 'Brief project description',
  image: '/portfolio/project-image.jpg',    // Add image to public/portfolio/
  category: 'Category',                     // e.g., 'Web Development'
  link: '/portfolio/project-slug',          // URL-friendly slug
  client: 'Client Name',
  services: ['Service 1', 'Service 2'],
  year: '2024',
  partnership: 'Partner Name',              // Optional
  challenge: `
    Detailed description of the project challenge.
    Use multiple paragraphs if needed.
  `,
  solution: `
    Detailed description of your solution.
    - Key feature 1
    - Key feature 2
    - Key feature 3
  `,
  results: `
    Detailed description of the project results.
    Include metrics and achievements.
  `,
  images: [                                 // Optional gallery images
    {
      src: '/portfolio/project/image1.jpg',
      alt: 'Image description'
    }
  ]
}
```

2. Add project images:
   - Main image: `public/portfolio/project-image.jpg`
   - Gallery images: `public/portfolio/project/image1.jpg`, etc.

## Project Fields

- `title`: Project name (required)
- `description`: Short summary (required)
- `image`: Main project image path (required)
- `category`: Project category (required)
- `link`: URL path for case study (required)
- `client`: Client name (required)
- `services`: Array of services provided (required)
- `year`: Project year (required)
- `partnership`: Partner agency name (optional)
- `challenge`: Project challenge description (optional)
- `solution`: Solution description (optional)
- `results`: Project outcomes (optional)
- `images`: Additional project images (optional)

## Image Guidelines

- Use high-quality images (recommended: 1920x1080px)
- Optimize images for web (compress without losing quality)
- Use descriptive filenames
- Place images in appropriate folders:
  - Main images: `public/portfolio/`
  - Project galleries: `public/portfolio/project-name/`

## URL Structure

- Main portfolio: `/portfolio`
- Case studies: `/portfolio/project-slug`
- Use URL-friendly slugs (lowercase, hyphens instead of spaces)

## Best Practices

1. **Content Writing**:
   - Write clear, concise descriptions
   - Use bullet points for features and results
   - Include specific metrics and achievements
   - Proofread all content

2. **Images**:
   - Maintain consistent aspect ratios
   - Use professional, high-quality visuals
   - Include relevant screenshots/mockups
   - Optimize for web performance

3. **Categories**:
   - Use consistent category names
   - Choose from existing categories when possible
   - Add new categories only when necessary

4. **Maintenance**:
   - Keep project information up-to-date
   - Remove outdated projects
   - Update images periodically
   - Check all links regularly 