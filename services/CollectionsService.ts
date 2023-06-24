import type { CollectionAPIType, CollectionSlugType } from '@/types'

export class CollectionsService {

    async getAll(): Promise<CollectionAPIType[]> {
        const response = await fetch('http://localhost:3000/api/collections')
        if (response.ok) {
            const collections = await response.json()
            return collections
        }
        throw new Error('Failed request in CollectionsService.getAll')
    }

    async getOne(slug: CollectionSlugType): Promise<CollectionAPIType> {
        const response = await fetch(`http://localhost:3000/api/collections/${slug}`)
        if (response.ok) {
            const collection = await response.json()
            return collection
        }
        throw new Error('Failed request in CollectionsService.getOne')
    }
}