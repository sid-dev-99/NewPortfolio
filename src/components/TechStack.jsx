import React from 'react';

const TechStack = () => {
  const languages = [
    { name: 'JavaScript', icon: 'JS', color: '#f7df1e' },
    { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
    { name: 'C', icon: 'C', color: '#555555' },
    { name: 'C++', icon: 'C++', color: '#00599c' },
    { name: 'HTML', icon: 'HTML', color: '#e34f26' },
    { name: 'CSS', icon: 'CSS', color: '#1572b6' }
  ];

  return (
    <div className="section">
      <div className="section-title">
        <span className="mono-title">Skills</span>
        <span className="section-subtitle">Which I use/know</span>
      </div>

      <p className="skills-desc">
        These are the technologies I've learned and worked with. This list is constantly evolving as I continue to learn and grow as a developer.
      </p>

      <div className="skills-category">
        <div className="category-label">&lt; LANGUAGES /&gt;</div>
        <div className="skills-grid">
          {languages.map((tech) => (
            <div key={tech.name} className="skill-pill">
              <span className="skill-icon" style={{ color: tech.color }}>●</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-desc {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 0.95rem;
          max-width: 600px;
        }
        .category-label {
          font-family: var(--font-mono);
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .skill-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: #111;
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-family: var(--font-sans);
        }
        .skill-icon {
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
};

export default TechStack;
