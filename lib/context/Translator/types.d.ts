import { translationRu } from '@/lib/translations';
import type { ReactNode } from 'react';
import type { LanguageType } from '@/types';

export interface TranslatorContextType {
    language: LanguageType;
    switchLanguage: () => void;
    translateName: ({ name_ru: string, name_en: string }) => string;
    translateItemLabel: ({ label_ru: string, label_en: string }) => string;
    translateMenuTitle: ({ title_ru: string, title_en: string }) => string;
    getTranslation: () => typeof translationRu;
}

export interface TranslatorProviderProps {
    language: LanguageType;
    children: ReactNode;
}
