import React from 'react';

const BentoLayout = ({ children }) => {
    return (
        <div className="bento-grid">
            {children}
        </div>
    );
};

export default BentoLayout;
