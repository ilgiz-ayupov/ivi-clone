import type { CountryType, CountrySlugType } from '@/types';

export class CountriesService {
    async getAll(): Promise<CountryType[]> {
        const response = await fetch('http://localhost:3000/api/countries');
        if (response.ok) {
            const collections = await response.json();
            return collections;
        }
        throw new Error('Failed request in CountriesService.getAll');
    }

    async getOne(slug: CountrySlugType): Promise<CountryType> {
        const response = await fetch(
            `http://localhost:3000/api/countries/${slug}`
        );
        if (response.ok) {
            const collection = await response.json();
            return collection;
        }
        throw new Error('Failed request in CountriesService.getOne');
    }
}
