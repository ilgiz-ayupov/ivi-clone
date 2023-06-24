import type { GenreType, GenreSlugType } from '@/types'

export class GenresService {

    async getAll(): Promise<GenreType[]> {
        const response = await fetch('http://localhost:3000/api/genres')
        if (response.ok) {
            const collections = await response.json()
            return collections
        }
        throw new Error('Failed request in GenresService.getAll')
    }

    async getOne(slug: GenreSlugType): Promise<GenreType> {
        const response = await fetch(`http://localhost:3000/api/genres/${slug}`)
        if (response.ok) {
            const collection = await response.json()
            return collection
        }
        throw new Error('Failed request in GenresService.getOne')
    }
}