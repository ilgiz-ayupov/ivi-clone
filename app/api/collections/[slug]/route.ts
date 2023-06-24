import { NextResponse, NextRequest } from 'next/server'

import { COLLECTIONS, FILMS, COUNTRIES, GENRES } from '@/constants'

import type { CollectionAPIType, FilmAPIType } from '@/types'

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
    const slug = params.slug

    const foundCollection = COLLECTIONS.find((collection) => collection.slug === slug)
    if (!foundCollection) return {} as CollectionAPIType

    const filteredFilms = FILMS.filter((film) => foundCollection.films.includes(film.id))
    const films: FilmAPIType[] = filteredFilms.map((film) => {
        const countries = COUNTRIES.filter((country) => film.countries.includes(country.slug))
        const genres = GENRES.filter((genre) => film.genres.includes(genre.slug))

        const filmAPI: FilmAPIType = {
            ...film,
            countries,
            genres
        }
        return filmAPI
    })

    const collection: CollectionAPIType = {
        ...foundCollection,
        films
    }
    return NextResponse.json(collection)
}