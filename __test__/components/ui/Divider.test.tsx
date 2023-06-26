import React from 'react';
import { render } from '@testing-library/react';
import { Divider } from '@/components/ui';

describe('Divider', () => {
    it('should render component', () => {
        const { container } = render(<Divider width="100%" height="1px" />);

        expect(container.firstElementChild).toBeInTheDocument();
    });

    it('should set the correct width and height', () => {
        const { container } = render(<Divider width="100%" height="1px" />);

        expect(container.firstElementChild).toHaveAttribute(
            'style',
            'width: 100%; height: 1px;'
        );
    });

    it('should accept additional class', () => {
        const { container } = render(
            <Divider className="hidden" width="100%" height="1px" />
        );

        expect(container.firstElementChild).toHaveClass('hidden');
    });
});
