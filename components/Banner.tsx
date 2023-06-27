'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui';
import { useLanguage } from '@/hooks';
import { TRANSLATIONS } from '@/constants';

import type { BannerProps } from '@/types/components';

const Banner: FC<BannerProps> = ({ className, name, age, href, src, type }) => {
    const { language } = useLanguage();

    return (
        <div className={className} title={name}>
            <div className="container">
                <Link className="relative block h-auto" href={href}>
                    <span className="absolute left-3 top-3 flex h-4 w-6 items-center justify-center rounded-sm bg-[#858585] text-[10px] font-medium text-[#c0c0c0] md:left-5 md:top-5">
                        {age}
                    </span>

                    <span className="pointer-events-none">
                        <Image
                            className="min-h-[182px] min-w-full rounded-lg object-cover"
                            src={src}
                            alt={name}
                            width={1216}
                            height={370}
                        />
                    </span>

                    <Button
                        className="absolute bottom-3 left-3 md:bottom-5 md:left-5"
                        variant="primary"
                        size="normal">
                        {TRANSLATIONS[language].banner.btn[type]}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
