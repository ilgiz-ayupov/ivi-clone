'use client';

import React, { FC } from 'react';

import FilmCard from './FilmCard';
import { SectionHeading } from '@/components/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslatedName } from '@/utils/translations';

import type { CollectionSectionProps } from '@/types/components';

const CollectionSection: FC<CollectionSectionProps> = ({
    collection,
    className
}) => {
    const { language } = useLanguage();

    return (
        <section
            key={collection.slug}
            id={`collection:${collection.slug}`}
            className={className}>
            <div className="container">
                <SectionHeading href={`/collections/${collection.slug}`}>
                    {getTranslatedName(language, collection)}
                </SectionHeading>
            </div>

            <div className="container">
                <div className="grid grid-cols-2 gap-5 pt-5 min-[500px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {collection.films.map(film => (
                        <FilmCard
                            key={film.id}
                            id={film.id}
                            nameRu={film.nameRu}
                            nameEn={film.nameEn}
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
