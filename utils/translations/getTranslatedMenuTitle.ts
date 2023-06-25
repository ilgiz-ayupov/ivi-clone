import type { LanguageType } from '@/types';

export function getTranslatedMenuTitle(
    lang: LanguageType,
    menu: { title_ru: string; title_en: string }
): string {
    switch (lang) {
        case 'ru':
            return menu.title_ru;
        case 'en':
            return menu.title_en;
        default:
            return '';
    }
}
