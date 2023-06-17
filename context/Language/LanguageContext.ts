'use client'

import { createContext } from 'react'

import type { LanguageContextType } from '@/types/context'

export const LanguageContext = createContext<LanguageContextType>({
    language: 'ru',
    setLanguage: () => {},
})
