import type { GenreSlugType } from './GenreType'
import type { CollectionSlugType } from './CollectionType'
import type { CountrySlugType } from './CountryType'

export type FilmStatusType = 'subscribe' | 'free' | 'buy'

export interface FilmType {
    id: number
    nameRu: string
    nameEn: string
    preview: string
    rating: number
    year: number
    countries: CountrySlugType[]
    genres: GenreSlugType[]
    duration: string
    collections: CollectionSlugType[]
    status: FilmStatusType
}