import { COLLECTIONS, FILMS } from '@/lib/constants';
import { transformToFilm } from '@/lib/utils/api';

import type { CollectionType } from '@/types';

export async function GET() {
    const collections: CollectionType[] = COLLECTIONS.map(collection => {
        const filteredFilms = FILMS.filter(film =>
            collection.films.includes(film.id)
        );
        const films = filteredFilms.map(transformToFilm);

        return {
            ...collection,
            films
        };
    });

    return new Response(JSON.stringify(collections), { status: 200 });
}
