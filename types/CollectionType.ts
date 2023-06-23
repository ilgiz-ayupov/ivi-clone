export type CollectionSlugType = 'actions-trailers' | 'historical-dramas' | 'based-on-real-events'

export interface CollectionType {
    slug: CollectionSlugType
    name_ru: string
    name_en: string
}