import React from 'react';
import { render } from '@testing-library/react';
import { CollectionSection } from '@/lib/components';

import type { CollectionType } from '@/types';

describe('CollectionSection', () => {
    const collection: CollectionType = {
        id: 1,
        slug: 'actions-trailers',
        name_ru: 'Боевики-трейлеры',
        name_en: 'Actions-trailers',
        films: [
            {
                id: 1,
                name_ru: 'Джон Уик 4',
                name_en: 'John Wick 4',
                preview: '/film-card-1.jpg',
                rating: 8.2,
                year: 2023,
                countries: [],
                genres: [],
                duration: '162 минуты',
                status: 'subscribe'
            }
        ]
    };

    it('should render component', () => {
        const { container } = render(
            <CollectionSection collection={collection} />
        );

        expect(container.firstElementChild).toBeInTheDocument();
    });

    it('should accept additional class', () => {
        const { container } = render(
            <CollectionSection className="hidden" collection={collection} />
        );

        expect(container.firstElementChild).toHaveClass('hidden');
    });

    it('should render section heading', () => {
        const { getByRole } = render(
            <CollectionSection collection={collection} />
        );

        const heading = getByRole('heading', { name: collection.name_ru });
        expect(heading).toBeInTheDocument();
    });

    it('should render films cards', () => {
        const { getByText } = render(
            <CollectionSection collection={collection} />
        );

        collection.films.forEach(film => {
            const card = getByText(film.name_ru);
            expect(card).toBeInTheDocument();
        });
    });
});
