import type { GenreSlugType, GenreType } from './GenreType';
import type { CountrySlugType, CountryType } from './CountryType';

export type FilmStatusType = 'subscribe' | 'free' | 'buy';

export interface FilmType {
    id: number;
    nameRu: string;
    nameEn: string;
    preview: string;
    rating: number;
    year: number;
    countries: CountrySlugType[];
    genres: GenreSlugType[];
    duration: string;
    status: FilmStatusType;
}

export interface FilmAPIType {
    id: number;
    nameRu: string;
    nameEn: string;
    preview: string;
    rating: number;
    year: number;
    countries: CountryType[];
    genres: GenreType[];
    duration: string;
    status: FilmStatusType;
}
