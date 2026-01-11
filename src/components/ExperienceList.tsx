import React, { useState } from 'react';

interface Experience {
  id: number;
  company: string;
  role: string;
  date: string;
  logo: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Turbo ML',
    role: 'Software Engineering Intern (AI)',
    date: 'April 2025 - July 2025',
    logo: 'T'
  },
  {
    id: 2,
    company: 'StartUp Inc',
    role: 'Frontend Developer',
    date: 'Jan 2024 - Dec 2024',
    logo: 'S'
  }
];

const ExperienceList = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item" onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}>
            <div className="exp-header">
              <div className="exp-left">
                <div className="company-logo">{exp.logo}</div>
                <div className="exp-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <p className="role-name">{exp.role}</p>
                </div>
              </div>
              <div className="exp-right">
                <span className="exp-date">{exp.date}</span>
                <span className="chevron">{expandedId === exp.id ? '−' : '+'}</span>
              </div>
            </div>
            {expandedId === exp.id && (
              <div className="exp-details">
                <p>Detailed description of the role goes here. Worked on shipping features and improving performance.</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <style>{`
        .experience-item {
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          cursor: pointer;
        }
        .experience-item:last-child {
          border-bottom: none;
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .exp-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .company-logo {
          width: 40px;
          height: 40px;
          background: white;
          color: black;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        .company-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-sans);
        }
        .role-name {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .exp-right {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .exp-details {
          padding-top: 1rem;
          padding-left: 3.5rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  );
};

export default ExperienceList;
