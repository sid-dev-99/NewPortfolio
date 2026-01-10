import React from 'react';

const projects = [
    {
        id: 1,
        title: 'OneURL',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 2,
        title: 'Mind Mentor AI',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 3,
        title: 'Lazy Commit',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 4,
        title: 'Doable',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
];

const ProjectGrid = () => {
    return (
        <div className="section">
            <h2 className="section-title">Proof of Work</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                    </div>
                ))}
            </div>
            <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .project-card {
          background: rgba(255,255,255,0.03);
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s ease;
        }
        .project-card:hover {
          transform: translateY(-2px);
        }
        .project-image {
          height: 160px;
          overflow: hidden;
        }
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .project-title {
          padding: 1rem;
          font-size: 1rem;
          color: var(--text-secondary);
          font-family: var(--font-sans);
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default ProjectGrid;
