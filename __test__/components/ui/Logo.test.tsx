import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from '@/components/ui';

describe('Logo', () => {
    it('should render component', () => {
        const { container } = render(<Logo />);

        expect(container.firstElementChild).toBeInTheDocument();
    });

    it('should accept additional class', () => {
        const { container } = render(<Logo className="hidden" />);

        expect(container.firstElementChild).toHaveClass('hidden');
    });

    it('the link should lead to the home page', () => {
        const { getByRole } = render(<Logo />);

        const link = getByRole('link');
        expect(link).toHaveAttribute('href', '/');
    });

    it('should render image inside', () => {
        const { getByRole } = render(<Logo />);

        const image = getByRole('img');
        expect(image).toBeInTheDocument();
    });
});
