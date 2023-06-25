'use client';

import { createContext } from 'react';

import type { LanguageContextType } from '@/types/context';

export const LanguageContext = createContext<LanguageContextType>({
    language: 'ru',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setLanguage: () => {}
});
