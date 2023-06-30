import { COLLECTIONS, FILMS } from '@/lib/constants';
import { transformToFilm } from '@/lib/utils/api';

import type { CollectionType } from '@/types';

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug;

    const foundCollection = COLLECTIONS.find(
        collection => collection.slug === slug
    );
    if (!foundCollection) {
        return new Response(
            JSON.stringify({ status: 404, message: 'Collection not found' }),
            { status: 404 }
        );
    }

    const filteredFilms = FILMS.filter(film =>
        foundCollection.films.includes(film.id)
    );
    const films = filteredFilms.map(transformToFilm);

    const collection: CollectionType = {
        ...foundCollection,
        films
    };
    return new Response(JSON.stringify(collection), { status: 200 });
}
