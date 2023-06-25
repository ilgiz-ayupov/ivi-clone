import { transformToFilmAPI } from '@/utils/api';
import { COLLECTIONS, FILMS } from '@/constants';

import type { CollectionAPIType, FilmAPIType } from '@/types';

export async function GET() {
    const collections: CollectionAPIType[] = COLLECTIONS.map(collection => {
        const filteredFilms = FILMS.filter(film =>
            collection.films.includes(film.id)
        );
        const films: FilmAPIType[] = filteredFilms.map(transformToFilmAPI);

        return {
            ...collection,
            films
        };
    });

    return new Response(JSON.stringify(collections), { status: 200 });
}
