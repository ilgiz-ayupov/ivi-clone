import { NextResponse } from 'next/server'

import { COLLECTIONS, FILMS, COUNTRIES, GENRES } from '@/constants'

import type { CollectionAPIType, FilmAPIType } from '@/types'

export async function GET() {
    const collections: CollectionAPIType[] = COLLECTIONS.map((collection) => {

        const filteredFilms = FILMS.filter((film) => collection.films.includes(film.id))
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

        return {
            ...collection,
            films
        }
    })

    return NextResponse.json(collections)
}