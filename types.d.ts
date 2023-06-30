export interface BannerType {
    name_ru: string;
    name_en: string;
    src: string;
    age: string;
    href: string;
    type: 'subscribe' | 'free' | 'collection';
}

export type CountrySlugType = 'usa' | 'germany';

export interface CountryType {
    id: number;
    slug: CountrySlugType;
    name_ru: string;
    name_en: string;
}

export type CollectionSlugType =
    | 'actions-trailers'
    | 'historical-dramas'
    | 'based-on-real-events';

export interface CollectionType {
    id: number;
    slug: CollectionSlugType;
    name_ru: string;
    name_en: string;
    films: FilmType[];
}

export interface CollectionDBType {
    id: number;
    slug: CollectionSlugType;
    name_ru: string;
    name_en: string;
    films: number[];
}

export type FilmStatusType = 'subscribe' | 'free' | 'buy';

export interface FilmType {
    id: number;
    name_ru: string;
    name_en: string;
    preview: string;
    rating: number;
    year: number;
    countries: CountryType[];
    genres: GenreType[];
    duration: string;
    status: FilmStatusType;
}

export interface FilmDBType extends FilmType {
    countries: string[];
    genres: string[];
}

export type GenreSlugType =
    | 'actions'
    | 'trailers'
    | 'criminal'
    | 'fantasy'
    | 'horrors'
    | 'foreign';

export interface GenreType {
    id: number;
    slug: GenreSlugType;
    name_ru: string;
    name_en: string;
}

export type LanguageType = 'ru' | 'en';

export interface ItemType {
    label_ru: string;
    label_en: string;
    href: string;
}

export interface MenuType {
    title_ru: string;
    title_en: string;
    items: ItemType[];
}
