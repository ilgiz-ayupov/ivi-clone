import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '@/components';

import { HEADER_MENU } from '@/constants';

describe('Header', () => {
    it('should render component', () => {
        const { container } = render(<Header />);

        expect(container).toBeInTheDocument();
    });

    it('should accept additional class', () => {
        const { container } = render(<Header className="hidden" />);

        expect(container.firstElementChild).toHaveClass('hidden');
    });

    it('should render logo', () => {
        const { getByAltText } = render(<Header />);

        expect(getByAltText('Ivi logo')).toBeInTheDocument();
    });

    it('should render header menu items', () => {
        const { getByRole } = render(<Header />);

        HEADER_MENU.forEach(item => {
            const linkMenu = getByRole('link', { name: item.label_ru });

            expect(linkMenu).toBeInTheDocument();
            expect(linkMenu).toHaveAttribute('href', item.href);
        });
    });

    it('should render notification button', () => {
        const { getByLabelText } = render(<Header />);

        expect(getByLabelText('Уведомления')).toBeInTheDocument();
    });

    it('should render notification button', () => {
        const { getByLabelText, getByTestId } = render(<Header />);

        const notificationBtn = getByLabelText('Уведомления');
        const notificationIcon = getByTestId('notification-icon');
        expect(notificationBtn).toBeInTheDocument();
        expect(notificationIcon).toBeInTheDocument();
    });

    it('should render login button', () => {
        const { getByLabelText, getByTestId } = render(<Header />);

        const loginBtn = getByLabelText('Войти в аккаунт');
        const loginIcon = getByTestId('login-icon');
        expect(loginBtn).toBeInTheDocument();
        expect(loginIcon).toBeInTheDocument();
    });
});
