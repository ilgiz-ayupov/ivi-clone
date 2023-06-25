import type { CollectionAPIType, CollectionSlugType } from '@/types';

export class CollectionsService {
    async getAll(): Promise<CollectionAPIType[]> {
        const response = await fetch('http://localhost:3000/api/collections');
        if (!response.ok) throw new Error('Failed fetch all users');

        return response.json();
    }

    async getOne(slug: CollectionSlugType): Promise<CollectionAPIType> {
        const response = await fetch(
            `http://localhost:3000/api/collections/${slug}`
        );
        if (!response.ok) throw new Error('Failed fetch user');

        return response.json();
    }
}
