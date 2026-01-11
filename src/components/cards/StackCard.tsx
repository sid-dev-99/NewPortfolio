import React from 'react';

const StackCard = () => {
  const stack = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Figma', 'Git'];

  return (
    <div className="card col-span-2 stack-card">
      <h3 className="card-title">Tech Stack</h3>
      <div className="stack-grid">
        {stack.map((item) => (
          <div key={item} className="stack-item">
            {item}
          </div>
        ))}
      </div>
      <style>{`
        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }
        .stack-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .stack-item {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        .stack-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default StackCard;
