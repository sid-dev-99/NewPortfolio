import React, { useState, useEffect } from 'react';

const Header = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header-section">
      <div className="top-bar">
        <div className="time">IN {time}</div>
        <div className="location">
          <span className="location-icon">◎</span> Mumbai, India
        </div>
      </div>

      <div className="profile-section">
        <div className="avatar">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
        </div>

        <div className="identity">
          <h1 className="name">MEGH</h1>
          <p className="handle">@meghtrix</p>
        </div>
      </div>

      <div className="bio">
        <p>
          I'm <strong>Megh</strong>, a 19yo developer living in Mumbai, India. I love to code and make (break) things.
        </p>
        <p>
          I love both <strong>Development & Design</strong>. So yes, I can make things look good and actually work. (Shocking, I know)
        </p>
        <p>
          When I'm <strong>not busy</strong>, you'll usually find me watching movies, playing chess, hitting the gym, cycling, or just catching up on some much-needed sleep.
        </p>
      </div>

      <div className="status-row">
        <div className="status-badge">
          <span className="status-dot"></span> Available for new opportunities
        </div>
        <a href="#" className="cv-btn">
          <span className="icon">↓</span> Download CV
        </a>
      </div>

      <div className="social-row">
        <p className="find-me">Where to find me (digitally) if you wish to</p>
        <div className="social-buttons">
          <a href="#" className="social-btn">✉ Email Me</a>
          <a href="#" className="social-btn">Twitter</a>
          <a href="#" className="social-btn">GitHub</a>
          <a href="#" className="social-btn">LinkedIn</a>
          <a href="#" className="social-btn">Peerlist</a>
        </div>
      </div>

      <style>{`
        .header-section {
          margin-bottom: 4rem;
        }
        .top-bar {
          display: flex;
          justify-content: space-between;
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-bottom: 4rem;
          font-family: var(--font-sans);
        }
        .profile-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          background: #222;
        }
        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .name {
          font-family: var(--font-mono);
          font-size: 2rem;
          letter-spacing: 2px;
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        .handle {
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 1rem;
        }
        .bio {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }
        .bio p {
          margin-bottom: 1rem;
        }
        .bio strong {
          color: var(--text-primary);
          font-weight: 500;
        }
        .status-row {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: #111;
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--text-primary);
        }
        .status-dot {
          width: 8px;
          height: 8px;
          background: #ef4444;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.5);
        }
        .cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: #111;
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--text-primary);
          text-decoration: none;
          transition: background 0.2s;
        }
        .cv-btn:hover {
          background: #222;
        }
        .find-me {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        .social-buttons {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
        }
        .social-btn {
          padding: 0.6rem 1.2rem;
          background: #111;
          border: 1px solid #222;
          border-radius: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.2s;
        }
        .social-btn:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }
      `}</style>
    </header>
  );
};

export default Header;
