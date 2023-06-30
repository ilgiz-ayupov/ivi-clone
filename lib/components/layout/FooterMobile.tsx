'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { FOOTER_MOBILE_MENU } from '@/lib/constants';
import { useTranslator } from '@/lib/hooks';

interface FooterMobileProps {
    className?: string;
}

const FooterMobile: FC<FooterMobileProps> = ({ className }) => {
    const { translateItemLabel } = useTranslator();

    return (
        <div
            className={cn(
                'fixed bottom-0 left-0 right-0 z-50 bg-purple-800/90',
                className
            )}>
            <div className="container">
                <ul className="mx-auto flex h-14 w-full items-center justify-between overflow-hidden md:max-w-[80%]">
                    {FOOTER_MOBILE_MENU.map(item => (
                        <li
                            className="h-12 w-16 grow text-gray-400"
                            key={item.href}>
                            <Link
                                className="flex grow flex-col items-center text-center duration-300 hover:text-white"
                                href={item.href}>
                                {item.icon}
                                <span className="mt-1 block text-xs font-medium">
                                    {translateItemLabel(item)}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FooterMobile;
