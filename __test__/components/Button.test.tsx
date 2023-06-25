import React from 'react';
import { Button } from '@/components/ui';
import { render } from '@testing-library/react';

describe('Button', () => {
    it('should render component', () => {
        const { getByRole } = render(<Button />);

        const btn = getByRole('button');
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveAttribute('type', 'button');
    });

    it('should add additional classes when prop "variant" is primary', () => {
        const { getByRole } = render(<Button variant="primary" />);

        const btn = getByRole('button');
        expect(btn).toHaveClass('bg-red-600 hover:bg-red-500');
    });

    it('should add additional classes when prop "variant" is secondary', () => {
        const { getByRole } = render(<Button variant="secondary" />);

        const btn = getByRole('button');
        expect(btn).toHaveClass('bg-purple-400 hover:bg-purple-300');
    });

    it('should add additional classes when prop "size" is small', () => {
        const { getByRole } = render(<Button variant="secondary" />);

        const btn = getByRole('button');
        expect(btn).toHaveClass('text-xs');
    });

    it('should add additional classes when prop "size" is normal', () => {
        const { getByRole } = render(
            <Button variant="secondary" size="normal" />
        );

        const btn = getByRole('button');
        expect(btn).toHaveClass('text-sm');
    });
});
