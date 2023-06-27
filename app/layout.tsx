'use client';

import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';

import { Header, Footer } from '@/components';
import { LanguageProvider } from '@/context';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    title: 'ivi',
    description: 'Онлайн-кинотеатр Иви'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <LanguageProvider>
            <html lang="en">
                <body className={inter.className}>
                    <Header />
                    {children}

                    <Footer />
                </body>
            </html>
        </LanguageProvider>
    );
}
