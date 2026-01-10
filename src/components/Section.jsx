import React from 'react';

const Section = ({ id, title, children, className = '' }) => {
    return (
        <section id={id} className={`section ${className}`}>
            {title && <h2 className="section-title">{title}</h2>}
            <div className="section-content">
                {children}
            </div>
            <style>{`
        .section {
          padding: var(--spacing-lg) 0;
        }
        .section-content {
          color: var(--text-secondary);
        }
      `}</style>
        </section>
    );
};

export default Section;
