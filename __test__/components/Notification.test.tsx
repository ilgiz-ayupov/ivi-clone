import React from 'react';
import { render } from '@testing-library/react';
import { Notification } from '@/components/ui';

describe('Notification', () => {
    it('should render component', () => {
        const { container } = render(<Notification count={10} />);

        expect(container.firstElementChild).toBeInTheDocument();
    });

    it('should render notification icon', () => {
        const { getByTestId } = render(<Notification count={10} />);

        expect(getByTestId('notification-icon')).toBeInTheDocument();
    });

    it('should display the count correctly when "count" prop < 9', () => {
        const { getByText } = render(<Notification count={5} />);

        const counter = getByText('5');
        expect(counter).toBeInTheDocument();
    });

    it('should display the count correctly when "count" prop > 9', () => {
        const { getByText } = render(<Notification count={15} />);

        const counter = getByText('9+');
        expect(counter).toBeInTheDocument();
    });
});
