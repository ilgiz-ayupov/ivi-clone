import { NextResponse, NextRequest } from 'next/server'

import { FILMS, COUNTRIES, GENRES } from '@/constants'
import type { FilmAPIType } from '@/types'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const foundFilm = FILMS.find((film) => film.id === Number(params.id))
    if (!foundFilm) return NextResponse.json({} as FilmAPIType)

    const countries = COUNTRIES.filter((country) => foundFilm.countries.includes(country.slug))
    const genres = GENRES.filter((genre) => foundFilm.genres.includes(genre.slug))

    const filmAPI: FilmAPIType = {
        ...foundFilm,
        countries,
        genres,
    }

    return NextResponse.json(filmAPI)
}