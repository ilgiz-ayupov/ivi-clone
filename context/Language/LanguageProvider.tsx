'use client'

import { FC, useState, useMemo } from 'react'

import { LanguageContext } from './LanguageContext'

import type { Language } from '@/types'
import type { LanguageContextType, LanguageProviderProps } from '@/types/context'

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('ru');

    const context: LanguageContextType = useMemo(() => ({
        language,
        setLanguage,
    }), [language]);

    return <LanguageContext.Provider value={context}>
        {children}
    </LanguageContext.Provider>
}
