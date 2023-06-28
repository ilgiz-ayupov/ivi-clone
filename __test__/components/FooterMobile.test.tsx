import React from 'react';
import { render } from '@testing-library/react';
import { FooterMobile } from '@/components';

import { FOOTER_MOBILE_MENU } from '@/constants';

describe('FooterMobile', () => {
    it('should render component', () => {
        const { container } = render(<FooterMobile />);

        expect(container.firstElementChild).toBeInTheDocument();
    });

    it('should accept additional class', () => {
        const { container } = render(<FooterMobile className="hidden" />);

        expect(container.firstElementChild).toHaveClass('hidden');
    });

    it('should render footer mobile menu', () => {
        const { getByRole } = render(<FooterMobile />);

        FOOTER_MOBILE_MENU.forEach(item => {
            const linkMenu = getByRole('link', { name: item.label_ru });

            expect(linkMenu).toBeInTheDocument();
            expect(linkMenu).toHaveAttribute('href', item.href);
        });
    });
});
