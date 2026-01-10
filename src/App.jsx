import React from 'react';
import Header from './components/Header';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="app-container">
      <Header />
      <TechStack />

      <footer className="footer">
        <p>© 2026 Siddharth Sharma</p>
      </footer>
      <style>{`
        .footer {
          margin-top: 4rem;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-family: var(--font-mono);
        }
      `}</style>
    </div>
  );
}

export default App;
