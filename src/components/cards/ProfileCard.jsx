import React from 'react';

const ProfileCard = () => {
    return (
        <div className="card col-span-2 row-span-2 profile-card">
            <div className="profile-content">
                <div className="avatar-placeholder"></div>
                <div className="profile-text">
                    <h2 className="greeting">Hello, I'm</h2>
                    <h1 className="name">Siddharth Sharma</h1>
                    <p className="bio">
                        Full Stack Developer & UI/UX Enthusiast. I build digital products that look good and work even better.
                    </p>
                    <div className="status-badge">
                        <span className="dot"></span> Available for work
                    </div>
                </div>
            </div>
            <style>{`
        .profile-card {
          background: linear-gradient(to bottom right, #1a1a1a, #0a0a0a);
          justify-content: center;
        }
        .profile-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .avatar-placeholder {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(45deg, #333, #666);
          border: 2px solid rgba(255,255,255,0.1);
        }
        .greeting {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        .name {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #fff, #aaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bio {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 90%;
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 255, 0, 0.1);
          border: 1px solid rgba(0, 255, 0, 0.2);
          border-radius: 50px;
          color: #4ade80;
          font-size: 0.875rem;
          font-weight: 500;
          width: fit-content;
        }
        .dot {
          width: 8px;
          height: 8px;
          background-color: currentColor;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default ProfileCard;
