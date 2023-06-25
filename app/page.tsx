import React from 'react';
import { HeroSection, CollectionSection } from '@/components';
import { CollectionsService } from '@/services';

export default async function Home() {
    const collectionService = new CollectionsService();

    const collections = await collectionService.getAll();

    return (
        <main>
            <HeroSection />

            {collections.map(collection => {
                return collection.films.length ? (
                    <CollectionSection
                        key={collection.slug}
                        className="my-8"
                        collection={collection}
                    />
                ) : null;
            })}
        </main>
    );
}
