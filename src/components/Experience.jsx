import React from 'react';
import Section from './Section';

const experiences = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2023 - Present',
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Creative Agency',
    period: '2021 - 2023',
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'StartUp Hub',
    period: '2020 - 2021',
  }
];

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="exp-main">
              <span className="role">{exp.role}</span>
              <span className="company">, {exp.company}</span>
            </div>
            <span className="period">{exp.period}</span>
          </div>
        ))}
      </div>
      <style>{`
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .experience-item {
          display: flex;
          justify-content: space-between;
          color: var(--text-secondary);
        }
        .role {
          color: var(--text-primary);
        }
        @media (max-width: 600px) {
          .experience-item {
            flex-direction: column;
          }
        }
      `}</style>
    </Section>
  );
};

export default Experience;
