import { FILMS } from '@/lib/constants';
import { transformToFilm } from '@/lib/utils/api';

import type { FilmDBType } from '@/types';

const getFilteredFilms = (films: FilmDBType[], url: string): FilmDBType[] => {
    const { searchParams, search } = new URL(url);
    if (!search) return films;

    return films.filter(film => {
        const filtered = [true];

        const searchedCountries = searchParams.get('countries')?.split(',');
        const searchedGenres = searchParams.get('genres')?.split(',');

        if (searchedCountries) {
            filtered.push(
                searchedCountries.every(searchedCountry =>
                    film.countries.includes(searchedCountry)
                )
            );
        }

        if (searchedGenres) {
            filtered.push(
                searchedGenres.every(searchedGenre =>
                    film.genres.includes(searchedGenre)
                )
            );
        }

        if (filtered.every(filter => filter)) return film;
    });
};

export async function GET(request: Request) {
    const filteredFilms = getFilteredFilms(FILMS, request.url);
    const films = filteredFilms.map(transformToFilm);

    return new Response(JSON.stringify(films), { status: 200 });
}
