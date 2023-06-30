'use client';

import { createContext } from 'react';
import { translationRu } from '@/lib/translations';

import type { TranslatorContextType } from './types';

export const TranslatorContext = createContext<TranslatorContextType>({
    language: 'ru',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    switchLanguage: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    translateName: () => '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    translateItemLabel: () => '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    translateMenuTitle: () => '',
    getTranslation: () => translationRu
});
