import { LanguageType } from "@/types";

export function getTranslatedName(language: LanguageType, item: { name_ru: string, name_en: string }): string {
    switch (language) {
        case 'ru':
            return item.name_ru
        case 'en':
            return item.name_en
        default:
            return ''
    }
}