import React from 'react';
import { Banner } from '@/lib/components';
import { render } from '@testing-library/react';

import type { BannerType } from '@/types';

describe('Banner', () => {
    const banner: BannerType = {
        src: '/banner1.jpg',
        name_ru: 'Джон Уик 4',
        name_en: 'John Wick 4',
        href: '/watch/1',
        age: '18+',
        type: 'subscribe'
    };

    it('should render component', () => {
        const { container } = render(<Banner banner={banner} />);

        expect(container.firstElementChild).toBeInTheDocument();
    });

    it('should accept additional class', () => {
        const { container } = render(
            <Banner className="hidden" banner={banner} />
        );

        expect(container.firstElementChild).toHaveClass('hidden');
    });

    it('the link should lead to the film page', () => {
        const { getByRole } = render(<Banner banner={banner} />);

        const link = getByRole('link');
        expect(link).toHaveAttribute('href', banner.href);
    });

    it('should render image', () => {
        const { getByAltText } = render(<Banner banner={banner} />);

        const image = getByAltText(banner.name_ru);
        expect(image).toBeInTheDocument();
    });

    it('should render age limit', () => {
        const { getByText } = render(<Banner banner={banner} />);

        const ageLimit = getByText(banner.age);
        expect(ageLimit).toBeInTheDocument();
    });

    it('should render button', () => {
        const { getByRole } = render(<Banner banner={banner} />);

        const btn = getByRole('button');
        expect(btn).toBeInTheDocument();
    });
});
