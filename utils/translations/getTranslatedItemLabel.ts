import type { LanguageType } from '@/types'

export function getTranslatedItemLabel(lang: LanguageType, item: { label_ru: string, label_en: string }): string {
    switch (lang) {
        case 'ru':
            return item.label_ru
        case 'en':
            return item.label_en
        default:
            return ''
    }
}