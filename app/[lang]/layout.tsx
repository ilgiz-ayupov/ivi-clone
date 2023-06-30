import React, { ReactNode } from 'react';

import { TranslatorProvider } from '@/lib/context';
import { Header, Footer } from '@/lib/components/layout';

import type { LanguageType } from '@/types';

export default function layout({
    params: { lang },
    children
}: {
    params: { lang: LanguageType };
    children: ReactNode;
}) {
    return (
        <TranslatorProvider language={lang}>
            <Header />
            {children}
            <Footer />
        </TranslatorProvider>
    );
}
