'use client';

import React, { FC, useCallback, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { translationRu, translationEn } from '@/lib/translations';

import { TranslatorContext } from './TranslatorContext';
import type { TranslatorContextType, TranslatorProviderProps } from './types';

export const TranslatorProvider: FC<TranslatorProviderProps> = ({
    language,
    children
}) => {
    const pathname = usePathname();
    const router = useRouter();

    const switchLanguage = useCallback(() => {
        switch (language) {
            case 'ru': {
                const url = pathname.replace('ru', 'en');
                router.push(url);
                break;
            }
            case 'en': {
                const url = pathname.replace('en', 'ru');
                router.push(url);
                break;
            }
        }
    }, [language]);

    const translateName = useCallback(
        ({ name_ru, name_en }: { name_ru: string; name_en: string }) => {
            switch (language) {
                case 'ru':
                    return name_ru;
                case 'en':
                    return name_en;
                default:
                    return '';
            }
        },
        []
    );

    const translateMenuTitle = useCallback(
        ({ title_ru, title_en }: { title_ru: string; title_en: string }) => {
            switch (language) {
                case 'ru':
                    return title_ru;
                case 'en':
                    return title_en;
                default:
                    return '';
            }
        },
        []
    );

    const translateItemLabel = useCallback(
        ({ label_ru, label_en }: { label_ru: string; label_en: string }) => {
            switch (language) {
                case 'ru':
                    return label_ru;
                case 'en':
                    return label_en;
                default:
                    return '';
            }
        },
        []
    );

    const getTranslation = useCallback(() => {
        switch (language) {
            case 'ru':
                return translationRu;
            case 'en':
                return translationEn;
        }
    }, []);

    const context: TranslatorContextType = useMemo(
        () => ({
            language,
            switchLanguage,
            translateName,
            translateItemLabel,
            translateMenuTitle,
            getTranslation
        }),
        [language]
    );

    return (
        <TranslatorContext.Provider value={context}>
            {children}
        </TranslatorContext.Provider>
    );
};
