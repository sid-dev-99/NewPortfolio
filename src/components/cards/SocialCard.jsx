import React from 'react';

const SocialCard = ({ platform, handle, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card social-card">
            <div className="social-content">
                <span className="platform">{platform}</span>
                <span className="handle">{handle}</span>
            </div>
            <div className="arrow">↗</div>
            <style>{`
        .social-card {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          min-height: 100px;
        }
        .platform {
          display: block;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.2rem;
        }
        .handle {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .arrow {
          font-size: 1.2rem;
          color: var(--text-secondary);
          transition: transform 0.2s ease;
        }
        .social-card:hover .arrow {
          transform: translate(2px, -2px);
          color: var(--text-primary);
        }
      `}</style>
        </a>
    );
};

export default SocialCard;
