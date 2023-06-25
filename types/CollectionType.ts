import type { FilmAPIType } from './FilmType';

export type CollectionSlugType =
    | 'actions-trailers'
    | 'historical-dramas'
    | 'based-on-real-events';

export interface CollectionType {
    slug: CollectionSlugType;
    name_ru: string;
    name_en: string;
    films: number[];
}

export interface CollectionAPIType {
    slug: CollectionSlugType;
    name_ru: string;
    name_en: string;
    films: FilmAPIType[];
}
