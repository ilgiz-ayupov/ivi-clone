import { NextResponse, NextRequest } from 'next/server'

import { COLLECTIONS, FILMS, GENRES, COUNTRIES } from '@/constants'

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
    const slug = params.slug

    const foundCollection = COLLECTIONS.find((collection) => collection.slug === slug)
    if (!foundCollection) return NextResponse.json({ status: 400, message: 'Collection not found !' })

    const films = FILMS.map((film) => {
        if (!film.collections.includes(foundCollection.slug)) return

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

    return NextResponse.json({ ...foundCollection, films })
}