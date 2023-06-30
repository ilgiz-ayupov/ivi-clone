import React from 'react';
import axios from 'axios';
import { HeroSection, CollectionSection } from '@/lib/components';

import type { CollectionType } from '@/types';

export default async function Home() {
    const { data: collections } = await axios.get(
        'http://localhost:3000/api/collections'
    );

    return (
        <main>
            <HeroSection />

            {collections.map((collection: CollectionType) => {
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
