export type CountrySlugType = 'usa' | 'germany'

export interface CountryType {
    id: number
    slug: CountrySlugType
    name_ru: string
    name_en: string
}