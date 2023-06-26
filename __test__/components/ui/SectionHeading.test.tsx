import React from 'react';
import { render } from '@testing-library/react';
import { SectionHeading } from '@/components/ui';

describe('SectionHeading', () => {
    it('should render component', () => {
        const { container } = render(
            <SectionHeading>Section Heading</SectionHeading>
        );

        expect(container.firstElementChild).toBeInTheDocument();
    });

    it('should accept additional class', () => {
        const { container } = render(
            <SectionHeading className="hidden">Section Heading</SectionHeading>
        );

        expect(container.firstElementChild).toHaveClass('hidden');
    });

    it('should render link inside when href prop is not empty', () => {
        const { getByRole } = render(
            <SectionHeading href="/" className="hidden">
                Section Heading
            </SectionHeading>
        );

        const link = getByRole('link');
        expect(link).toBeInTheDocument();
    });

    it('the link should correctly display the url address', () => {
        const { getByRole } = render(
            <SectionHeading href="/test-page" className="hidden">
                Section Heading
            </SectionHeading>
        );

        const link = getByRole('link');
        expect(link).toHaveAttribute('href', '/test-page');
    });
});
