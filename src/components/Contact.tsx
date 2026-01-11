import React from 'react';

const Contact = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">© 2026 Siddharth Sharma</p>
      </div>
      <style>{`
        .footer {
          padding: 4rem 0 2rem;
          margin-top: auto;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Contact;
