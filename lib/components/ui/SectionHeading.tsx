import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { MdKeyboardArrowRight } from 'react-icons/md';

interface SectionHeadingProps {
    children: ReactNode;
    href?: string;
    className?: string;
}

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
            {href ? (
                <Link
                    className="group inline-flex items-center leading-none"
                    href={href}>
                    {children}

                    <MdKeyboardArrowRight className="h-7 w-7 duration-500 group-hover:translate-x-1.5" />
                </Link>
            ) : (
                children
            )}
        </h2>
    );
};

export default SectionHeading;
