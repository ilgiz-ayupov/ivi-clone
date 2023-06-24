import { NextResponse, NextRequest } from 'next/server'

import { FILMS, COUNTRIES, GENRES } from '@/constants'
import type { FilmType, FilmAPIType, CountrySlugType, GenreSlugType } from '@/types'

const getFilteredFilms = (films: FilmType[], url: string): FilmType[] => {
    const { searchParams, search } = new URL(url)
    if (!search) return films

    return films.filter((film) => {
        let filtered = [true]

        const searchedCountries = searchParams.get('countries')?.split(',')
        const searchedGenres = searchParams.get('genres')?.split(',')

        if (searchedCountries) {
            filtered.push(
                searchedCountries.every((searchedCountry) => film.countries.includes(searchedCountry as CountrySlugType))
            )
        }

        if (searchedGenres) {
            filtered.push(
                searchedGenres.every((searchedGenre) => film.genres.includes(searchedGenre as GenreSlugType))
            )
        }

        if (filtered.every((filter) => filter)) return film
    })
}

export async function GET(request: NextRequest) {
    const filteredFilms = getFilteredFilms(FILMS, request.url)

    const films: FilmAPIType[] = filteredFilms.map((film) => {
        const countries = COUNTRIES.filter((country) => film.countries.includes(country.slug))
        const genres = GENRES.filter((genre) => film.genres.includes(genre.slug))

        const filmAPI: FilmAPIType = {
            ...film,
            countries,
            genres,
        }

        return filmAPI
    })

    return NextResponse.json(films)
}