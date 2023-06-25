import { COUNTRIES, GENRES } from '@/constants';

import type { FilmType, FilmAPIType } from '@/types';

export function transformToFilmAPI(film: FilmType): FilmAPIType {
    const countries = COUNTRIES.filter(country =>
        film.countries.includes(country.slug)
    );
    const genres = GENRES.filter(genre => film.genres.includes(genre.slug));

    const filmAPI: FilmAPIType = {
        ...film,
        countries,
        genres
    };

    return filmAPI;
}
