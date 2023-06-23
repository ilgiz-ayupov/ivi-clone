import { NextResponse, NextRequest } from 'next/server'

import { FILMS, COUNTRIES, GENRES } from '@/constants'
import type { CountrySlugType, GenreSlugType } from '@/types'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)

    const filteredFilms = FILMS.filter((film) => {
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

    const films = filteredFilms.map((film) => {
        const countries = film.countries.map((countrySlug) => {
            const foundCountry = COUNTRIES.find((country) => country.slug === countrySlug)
            if (foundCountry) return foundCountry
        })

        const genres = film.genres.map((genreSlug) => {
            const foundGenre = GENRES.find((genre) => genre.slug === genreSlug)
            if (foundGenre) return foundGenre
        })

        return {
            ...film,
            countries,
            genres,
        }
    })

    return NextResponse.json(films)
}