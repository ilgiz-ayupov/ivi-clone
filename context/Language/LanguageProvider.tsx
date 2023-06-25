'use client';

import React, { FC, useState, useMemo } from 'react';

import { LanguageContext } from './LanguageContext';

import type { LanguageType } from '@/types';
import type {
    LanguageContextType,
    LanguageProviderProps
} from '@/types/context';

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<LanguageType>('ru');

    const context: LanguageContextType = useMemo(
        () => ({
            language,
            setLanguage
        }),
        [language]
    );

    return (
        <LanguageContext.Provider value={context}>
            {children}
        </LanguageContext.Provider>
    );
};
