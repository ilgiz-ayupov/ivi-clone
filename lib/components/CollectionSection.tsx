'use client';

import React, { FC } from 'react';

import FilmCard from './FilmCard';
import { SectionHeading } from '@/lib/components/ui';
import { useTranslator } from '@/lib/hooks';

import type { CollectionType } from '@/types';

interface CollectionSectionProps {
    collection: CollectionType;
    className?: string;
}

const CollectionSection: FC<CollectionSectionProps> = ({
    collection,
    className
}) => {
    const { translateName } = useTranslator();

    return (
        <section
            key={collection.slug}
            id={`collection:${collection.slug}`}
            className={className}>
            <div className="container">
                <SectionHeading href={`/collections/${collection.slug}`}>
                    {translateName(collection)}
                </SectionHeading>
            </div>

            <div className="container">
                <div className="grid grid-cols-2 gap-5 pt-5 min-[500px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {collection.films.map(film => (
                        <FilmCard
                            key={film.id}
                            id={film.id}
                            name_ru={film.name_ru}
                            name_en={film.name_en}
                            preview={film.preview}
                            rating={film.rating}
                            year={film.year}
                            countries={film.countries}
                            genres={film.genres}
                            duration={film.duration}
                            status={film.status}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionSection;
