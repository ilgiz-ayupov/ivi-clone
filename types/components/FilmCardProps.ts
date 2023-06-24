import type { FilmStatusType } from '../FilmType'
import type { CountryType } from '../CountryType'
import type { GenreType } from '../GenreType'

export interface FilmCardProps {
    id: number
    nameRu: string
    nameEn: string
    preview: string
    rating: number
    year: number
    countries: CountryType[]
    genres: GenreType[]
    duration: string
    status: FilmStatusType
    className?: string
}