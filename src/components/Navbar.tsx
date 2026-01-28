import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="nav-links">
          <a href="#me">Me</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>
      </div>
      <style>{`
        .navbar {
          padding: 2rem 0;
          margin-bottom: 2rem;
        }
        .navbar-content {
          display: flex;
          justify-content: flex-start;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-links a {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .nav-links a:hover {
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 1rem 0;
            margin-bottom: 1rem;
          }
          .navbar-content {
            justify-content: center;
          }
          .nav-links {
            gap: 1rem;
          }
          .nav-links a {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
