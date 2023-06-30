import { COUNTRIES, GENRES } from '@/lib/constants';

import type { FilmType, FilmDBType } from '@/types';

export function transformToFilm(film: FilmDBType): FilmType {
    const countries = COUNTRIES.filter(country =>
        film.countries.includes(country.slug)
    );
    const genres = GENRES.filter(genre => film.genres.includes(genre.slug));
    return {
        ...film,
        countries,
        genres
    };
}
