import React, { FC } from 'react';
import cn from 'classnames';

import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

interface FooterProps {
    className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
    return (
        <>
            <FooterMobile className={cn('lg:hidden', className)} />
            <FooterDesktop className={cn('hidden lg:block', className)} />
        </>
    );
};

export default Footer;
