import { FILMS } from '@/constants'
import type { FilmType, FilmAPIType, CountrySlugType, GenreSlugType } from '@/types'
import { transformToFilmAPI } from '@/utils/api'

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

export async function GET(request: Request) {
    const filteredFilms = getFilteredFilms(FILMS, request.url)
    const films: FilmAPIType[] = filteredFilms.map(transformToFilmAPI)

    return new Response(JSON.stringify(films), { status: 200 })
}