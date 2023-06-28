import React from 'react';
import { render } from '@testing-library/react';
import { FooterDesktop } from '@/components';

import { FOOTER_MENU } from '@/constants';

describe('FooterDesktop', () => {
    it('should render component', () => {
        const { container } = render(<FooterDesktop />);

        expect(container.firstElementChild).toBeInTheDocument();
    });

    it('should accept additional component', () => {
        const { container } = render(<FooterDesktop className="hidden" />);

        expect(container.firstElementChild).toHaveClass('hidden');
    });

    it('should render the footer menus', () => {
        const { getByRole } = render(<FooterDesktop />);

        FOOTER_MENU.forEach(menu => {
            const headingMenu = getByRole('heading', { name: menu.title_ru });
            expect(headingMenu).toBeInTheDocument();

            menu.items.forEach(item => {
                const linkMenu = getByRole('link', { name: item.label_ru });
                expect(linkMenu).toBeInTheDocument();
                expect(linkMenu).toHaveAttribute('href', item.href);
            });
        });
    });
});
