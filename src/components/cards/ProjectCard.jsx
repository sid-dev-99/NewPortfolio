import React from 'react';

const ProjectCard = ({ title, description, tags, color = '#3b82f6' }) => {
    return (
        <div className="card project-card">
            <div className="project-content">
                <div className="project-icon" style={{ backgroundColor: color }}></div>
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{description}</p>
                <div className="project-tags">
                    {tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
            </div>
            <div className="hover-reveal">
                <span>View Project ↗</span>
            </div>
            <style>{`
        .project-card {
          justify-content: space-between;
          min-height: 240px;
        }
        .project-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          margin-bottom: 1rem;
          opacity: 0.8;
        }
        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        .project-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }
        .project-tags {
          display: flex;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
          opacity: 0.7;
        }
        .hover-reveal {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(2px);
        }
        .project-card:hover .hover-reveal {
          opacity: 1;
        }
        .hover-reveal span {
          color: white;
          font-weight: 600;
          transform: translateY(10px);
          transition: transform 0.3s ease;
        }
        .project-card:hover .hover-reveal span {
          transform: translateY(0);
        }
      `}</style>
        </div>
    );
};

export default ProjectCard;
