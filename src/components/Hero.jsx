import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="name">Hi, I'm Siddharth.</h1>
        <p className="intro">
          A Full Stack Developer building products that solve real-world problems.
        </p>
      </div>
      <style>{`
        .hero {
          padding: 2rem 0 4rem;
        }
        .name {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .intro {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 500px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
