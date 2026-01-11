import React from 'react';
import Section from './Section';

const About = () => {
  return (
    <Section id="me" title="Me">
      <div className="about-text">
        <p>
          I'm a Full Stack Developer based in India. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
        </p>
        <p>
          Currently, I'm focused on building accessible, inclusive products and digital experiences.
        </p>
      </div>

      <div className="connect-links">
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:hello@example.com">Email</a>
      </div>

      <style>{`
        .about-text p {
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }
        .connect-links {
          margin-top: 1.5rem;
          display: flex;
          gap: 1rem;
        }
        .connect-links a {
          color: var(--text-primary);
          font-size: 0.9rem;
          text-decoration: underline;
          text-decoration-color: var(--border-color);
          text-underline-offset: 4px;
        }
        .connect-links a:hover {
          text-decoration-color: var(--text-primary);
        }
      `}</style>
    </Section>
  );
};

export default About;
