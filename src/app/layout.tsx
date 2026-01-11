import './globals.css';

export const metadata = {
    title: 'Siddharth Sharma - Portfolio',
    description: 'Portfolio of Siddharth Sharma',
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
