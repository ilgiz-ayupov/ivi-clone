export type GenreSlugType = 'actions' | 'trailers' | 'criminal' | 'fantasy' | 'horrors' | 'foreign'

export interface GenreType {
    slug: GenreSlugType
    name_ru: string
    name_en: string
}