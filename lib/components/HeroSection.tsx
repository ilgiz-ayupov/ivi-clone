'use client';

import React, { FC } from 'react';
import Image from 'next/image';

import Banner from './Banner';
import { Button } from '@/lib/components/ui';
import { useTranslator } from '@/lib/hooks';

interface HeroSectionProps {
    className?: string;
}

const HeroSection: FC<HeroSectionProps> = ({ className }) => {
    const { getTranslation } = useTranslator();
    const translations = getTranslation();

    return (
        <div id="hero" className={className}>
            <Banner
                banner={{
                    name_ru: 'Джон Уик 4',
                    name_en: 'John Wick 4',
                    src: '/banner-1.jpg',
                    href: '/watch/1',
                    age: '18+',
                    type: 'subscribe'
                }}
            />

            <div className="container">
                <Button
                    className="mt-3 flex w-full items-center justify-center bg-[url(/hero__btn-bg.svg)]"
                    variant="secondary"
                    size="normal">
                    <Image
                        className="mr-2"
                        src="/lightning.svg"
                        alt=""
                        width={24}
                        height={32}
                    />
                    {translations.hero.btn}
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;
