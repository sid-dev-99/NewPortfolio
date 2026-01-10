import React from 'react';
import Section from './Section';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Next.js, Stripe, Tailwind',
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'React, Node.js, Socket.io',
    link: '#'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'OpenAI, React, Express',
    link: '#'
  }
];

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-list">
        {projectsData.map((project) => (
          <a key={project.id} href={project.link} className="project-item">
            <span className="project-title">{project.title}</span>
            <span className="project-desc">{project.description}</span>
          </a>
        ))}
      </div>
      <style>{`
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .project-item {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 0.5rem 0;
          border-bottom: 1px solid transparent;
        }
        .project-item:hover {
          border-bottom-color: var(--border-color);
        }
        .project-title {
          color: var(--text-primary);
          font-weight: 500;
        }
        .project-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        @media (max-width: 600px) {
          .project-item {
            flex-direction: column;
            gap: 0.2rem;
          }
        }
      `}</style>
    </Section>
  );
};

export default Projects;
