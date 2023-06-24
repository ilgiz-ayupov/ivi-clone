import { COLLECTIONS, FILMS } from '@/constants'

import type { CollectionAPIType, FilmAPIType } from '@/types'
import { transformToFilmAPI } from '@/utils/api'

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const slug = params.slug

    const foundCollection = COLLECTIONS.find((collection) => collection.slug === slug)
    if (!foundCollection) {
        return new Response(JSON.stringify({ status: 404, message: 'Collection not found' }), { status: 404 })
    }

    const filteredFilms = FILMS.filter((film) => foundCollection.films.includes(film.id))
    const films: FilmAPIType[] = filteredFilms.map(transformToFilmAPI)

    const collection: CollectionAPIType = {
        ...foundCollection,
        films
    }
    return new Response(JSON.stringify(collection), { status: 200 })
}