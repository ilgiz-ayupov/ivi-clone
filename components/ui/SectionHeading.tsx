import React, { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { MdKeyboardArrowRight } from 'react-icons/md';

import type { SectionHeadingProps } from '@/types/components';

const SectionHeading: FC<SectionHeadingProps> = ({
    className,
    href,
    children
}) => {
    return (
        <h2
            className={cn(
                'text-xl font-bold text-white md:text-2xl',
                className
            )}>
            <Link
                className="group inline-flex items-center leading-none"
                href={href}>
                {children}

                <MdKeyboardArrowRight className="h-7 w-7 duration-500 group-hover:translate-x-1.5" />
            </Link>
        </h2>
    );
};

export default SectionHeading;
