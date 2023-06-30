import React from 'react';
import { render } from '@testing-library/react';
import { FilmCard } from '@/lib/components';

describe('FilmCard', () => {
    const props = {
        id: 1,
        nameRu: 'Джон Уик 4',
        nameEn: 'John Wick 4',
        preview: '/film-card-1.jpg',
        rating: 8.2,
        year: 2023,
        countries: [
            {
                id: 1,
                slug: 'germany',
                name_ru: 'Германия',
                name_en: 'Germany'
            },
            {
                id: 2,
                slug: 'usa',
                name_ru: 'США',
                name_en: 'USA'
            }
        ],
        genres: [
            {
                id: 1,
                slug: 'actions',
                name_ru: 'Боевики',
                name_en: 'Actions'
            },
            {
                id: 2,
                slug: 'criminal',
                name_ru: 'Криминал',
                name_en: 'Criminal'
            },
            {
                id: 6,
                slug: 'trailers',
                name_ru: 'Трейлеры',
                name_en: 'Trailers'
            }
        ],
        duration: '162 минуты',
        status: 'subscribe'
    };

    it('should render component', () => {
        const { container } = render(<FilmCard {...props} />);

        expect(container.firstElementChild).toBeInTheDocument();
    });

    it('should accept additional class', () => {
        const { container } = render(
            <FilmCard {...props} className="hidden" />
        );

        expect(container.firstElementChild).toHaveClass('hidden');
    });

    it('should render the film preview', () => {
        const { getByRole } = render(<FilmCard {...props} />);

        const preview = getByRole('img');
        expect(preview).toBeInTheDocument();
        expect(preview).toHaveAttribute('alt', props.nameRu);
    });

    it('should render the film name', () => {
        const { getByRole } = render(<FilmCard {...props} />);

        const filmName = getByRole('heading', { name: props.nameRu });
        expect(filmName).toBeInTheDocument();
    });

    it('the film link should lead to "/watch/[id]"', () => {
        const { getByTitle } = render(<FilmCard {...props} />);

        const link = getByTitle(`Ссылка на фильм: ${props.nameRu}`);
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/watch/${props.id}`);
    });

    it('the add-bookmark link should lead to "/add-bookmark/[id]"', () => {
        const { getByTitle } = render(<FilmCard {...props} />);

        const link = getByTitle('Добавить в закладку');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/add-bookmark/${props.id}`);
    });

    it('the similar link should lead to "/similar/[id]"', () => {
        const { getByTitle } = render(<FilmCard {...props} />);

        const link = getByTitle('Похожее');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/similar/${props.id}`);
    });

    it('the evaluate link should lead to "/evaluate/[id]"', () => {
        const { getByTitle } = render(<FilmCard {...props} />);

        const link = getByTitle('Оценить');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/evaluate/${props.id}`);
    });

    it('the ban link should lead to "/ban/[id]"', () => {
        const { getByTitle } = render(<FilmCard {...props} />);

        const link = getByTitle('Не нравится такое');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/ban/${props.id}`);
    });
});
