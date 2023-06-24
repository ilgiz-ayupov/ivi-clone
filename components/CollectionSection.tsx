'use client'

import { FC } from 'react'

import FilmCard from './FilmCard'
import { SectionHeading } from '@/components/ui'
import { useLanguage } from '@/hooks/useLanguage'

import type { LanguageType, CollectionAPIType } from '@/types'
import type { CollectionSectionProps } from '@/types/components'

const CollectionSection: FC<CollectionSectionProps> = ({ collection, className }) => {
    const { language } = useLanguage()

    const getCollectionName = (lang: LanguageType, collection: CollectionAPIType) => {
        switch (lang) {
            case 'ru':
                return collection.name_ru
            case 'en':
                return collection.name_en
            default:
                return ''
        }
    }

    return (
        <section key={collection.slug} id={`collection:${collection.slug}`} className={className}>
            <div className="container">
                <SectionHeading href={`/collections/${collection.slug}`}>
                    {getCollectionName(language, collection)}
                </SectionHeading>
            </div>

            <div className="container">
                <div className="pt-5 grid gap-5 grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {collection.films?.map((film) => film && (
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
    )
}

export default CollectionSection