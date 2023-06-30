'use client';

import React, { FC, HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/lib/components/ui';
import { useTranslator } from '@/lib/hooks';

import type { BannerType } from '@/types';

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
    banner: BannerType;
    className?: string;
}

const Banner: FC<BannerProps> = ({ banner, className, ...props }) => {
    const { translateName, getTranslation } = useTranslator();
    const translations = getTranslation();

    return (
        <div className={className} {...props}>
            <div className="container">
                <Link
                    className="relative block h-auto"
                    href={banner.href}
                    title={translateName(banner)}>
                    <span className="absolute left-3 top-3 flex h-4 w-6 items-center justify-center rounded-sm bg-[#858585] text-[10px] font-medium text-[#c0c0c0] md:left-5 md:top-5">
                        {banner.age}
                    </span>

                    <span className="pointer-events-none">
                        <Image
                            className="min-h-[182px] min-w-full rounded-lg object-cover"
                            src={banner.src}
                            alt={translateName(banner)}
                            width={1216}
                            height={370}
                        />
                    </span>

                    <Button
                        className="absolute bottom-3 left-3 md:bottom-5 md:left-5"
                        variant="primary"
                        size="normal">
                        {translations.banner.btn[banner.type]}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
