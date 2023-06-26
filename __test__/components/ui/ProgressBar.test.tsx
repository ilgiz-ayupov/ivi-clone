import React from 'react';
import { render } from '@testing-library/react';
import { ProgressBar } from '@/components/ui';

describe('ProgressBar', () => {
    it('should render component', () => {
        const { container } = render(
            <ProgressBar width="100%" height="2px" progress={55} />
        );

        expect(container.firstElementChild).toBeInTheDocument();
    });

    it('should accept additional class', () => {
        const { container } = render(
            <ProgressBar
                className="hidden"
                width="100%"
                height="2px"
                progress={55}
            />
        );

        expect(container.firstElementChild).toHaveClass('hidden');
    });

    it('should set the correct width and height', () => {
        const { getByTestId } = render(
            <ProgressBar width="100%" height="2px" progress={55} />
        );

        const progressbar = getByTestId('progressbar');
        expect(progressbar).toHaveAttribute(
            'style',
            'width: 100%; height: 2px;'
        );
    });

    it('should correctly display the progress line', () => {
        const { getByTestId } = render(
            <ProgressBar width="100%" height="2px" progress={55} />
        );

        const progressbarLine = getByTestId('progressbar-line');
        expect(progressbarLine).toHaveAttribute('style', 'width: 55%;');
    });
});
