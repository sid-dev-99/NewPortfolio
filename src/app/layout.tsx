import './globals.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Siddharth Sharma | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and AI integration. Building fast, scalable, and beautiful web applications.',
    keywords: ['Full Stack Developer', 'React Developer', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'Web Development', 'Siddharth Sharma', 'Portfolio', 'Software Engineer'],
    authors: [{ name: 'Siddharth Sharma', url: 'https://siddharth.dev' }],
    creator: 'Siddharth Sharma',
    publisher: 'Siddharth Sharma',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://siddharth.dev',
        siteName: 'Siddharth Sharma Portfolio',
        title: 'Siddharth Sharma | Full Stack Developer',
        description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building fast, scalable applications.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Siddharth Sharma - Full Stack Developer Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@rawsid',
        title: 'Siddharth Sharma | Full Stack Developer',
        description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
        images: ['/og-image.png'],
    },
    icons: {
        icon: '/favicon.ico',
    },
};

// JSON-LD structured data for Person schema
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Siddharth Sharma',
    url: 'https://siddharth.dev',
    image: 'https://siddharth.dev/profile.jpeg',
    jobTitle: 'Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and AI integration.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
    },
    sameAs: [
        'https://github.com/sid-dev-99',
        'https://linkedin.com/in/siddharth-sharma',
        'https://twitter.com/rawsid',
    ],
    knowsAbout: ['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'Full Stack Development', 'Web Development'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="bg-neutral-950 text-white antialiased">
                {children}
            </body>
        </html>
    );
}
