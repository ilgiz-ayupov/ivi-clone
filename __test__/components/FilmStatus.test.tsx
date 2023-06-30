import React from 'react';
import { render } from '@testing-library/react';
import { FilmStatus } from '@/lib/components';

describe('FilmStatus', () => {
    it('should render component', () => {
        const { container } = render(<FilmStatus status="subscribe" />);

        expect(container.firstElementChild).toBeInTheDocument();
    });

    it('should render additional class', () => {
        const { container } = render(
            <FilmStatus className="hidden" status="subscribe" />
        );

        expect(container.firstElementChild).toHaveClass('hidden');
    });

    it('should add additional classes when prop "status" is subscribe', () => {
        const { container } = render(<FilmStatus status="subscribe" />);

        expect(container.firstElementChild).toHaveClass('text-red-600');
    });

    it('should add additional classes when prop "status" is buy', () => {
        const { container } = render(<FilmStatus status="buy" />);

        expect(container.firstElementChild).toHaveClass('text-blue-400');
    });

    it('should add additional classes when prop "status" is free', () => {
        const { container } = render(<FilmStatus status="free" />);

        expect(container.firstElementChild).toHaveClass('text-gray-400');
    });
});
