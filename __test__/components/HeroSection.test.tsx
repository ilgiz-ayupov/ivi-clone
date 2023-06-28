import React from 'react';
import { render } from '@testing-library/react';
import { HeroSection } from '@/components';

describe('HeroSection', () => {
    it('should render component', () => {
        const { container } = render(<HeroSection />);

        expect(container).toBeInTheDocument();
    });

    it('should accept additional class', () => {
        const { container } = render(<HeroSection className="hidden" />);

        expect(container.firstElementChild).toHaveClass('hidden');
    });

    it('should render the subscribe btn', () => {
        const { getByRole } = render(<HeroSection />);

        const subscribeBtn = getByRole('button', {
            name: '30 дней подписки бесплатно'
        });
        expect(subscribeBtn).toBeInTheDocument();
    });
});
