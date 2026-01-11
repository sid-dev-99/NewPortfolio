import React from 'react';

const MapCard = () => {
    return (
        <div className="card map-card">
            <div className="map-bg"></div>
            <div className="location-pin">
                <div className="pin-dot"></div>
                <div className="pin-pulse"></div>
            </div>
            <div className="location-text">
                <h3>Bangalore, India</h3>
                <p>Local time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            <style>{`
        .map-card {
          background: #111;
          position: relative;
          min-height: 200px;
          justify-content: flex-end;
        }
        .map-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(#333 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.2;
        }
        .location-pin {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .pin-dot {
          width: 12px;
          height: 12px;
          background: #3b82f6;
          border-radius: 50%;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 10px #3b82f6;
        }
        .pin-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          background: rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          animation: mapPulse 2s infinite;
        }
        @keyframes mapPulse {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        .location-text {
          position: relative;
          z-index: 2;
        }
        .location-text h3 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }
        .location-text p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
      `}</style>
        </div>
    );
};

export default MapCard;
