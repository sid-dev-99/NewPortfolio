import React, { ReactNode } from 'react';

const BentoLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bento-grid">
            {children}
        </div>
    );
};

export default BentoLayout;
