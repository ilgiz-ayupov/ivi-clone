import { FilmStatusType } from "../FilmType"

export interface FilmCardProps {
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
    className?: string
}