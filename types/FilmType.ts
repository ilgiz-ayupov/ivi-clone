export type FilmStatusType = 'subscribe' | 'free' | 'buy'

export interface FilmType {
    id: number
    nameRu: string
    nameEn: string
    preview: string
    rating: number
    year: number
    countries: string[]
    genres: string[]
    duration: string
    status: FilmStatusType
}