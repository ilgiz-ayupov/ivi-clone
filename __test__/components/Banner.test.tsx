import React from 'react';
import { Banner } from '@/components';
import { render } from '@testing-library/react';

import type { BannerType } from '@/types/BannerType';

describe('Banner', () => {
    const banner: BannerType = {
        src: '/banner1.jpg',
        name: 'Джон Уик 4',
        href: '/watch/1',
        age: '18+',
        type: 'subscribe'
    };

    it('should render component', () => {
        const { container } = render(<Banner {...banner} />);

        expect(container.firstElementChild).toBeInTheDocument();
    });

    it('the link should lead to the film page', () => {
        const { getByRole } = render(<Banner {...banner} />);

        const link = getByRole('link');
        expect(link).toHaveAttribute('href', banner.href);
    });

    it('should render image', () => {
        const { getByAltText } = render(<Banner {...banner} />);

        const image = getByAltText(banner.name);
        expect(image).toBeInTheDocument();
    });

    it('should render age limit', () => {
        const { getByText } = render(<Banner {...banner} />);

        const ageLimit = getByText(banner.age);
        expect(ageLimit).toBeInTheDocument();
    });

    it('should render button', () => {
        const { getByRole } = render(<Banner {...banner} />);

        const btn = getByRole('button');
        expect(btn).toBeInTheDocument();
    });
});
