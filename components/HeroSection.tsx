'use client';

import React, { FC } from 'react';
import Image from 'next/image';

import Banner from './Banner';
import { Button } from '@/components/ui';
import { TRANSLATIONS } from '@/constants';
import { useLanguage } from '@/hooks';

const HeroSection: FC = () => {
    const { language } = useLanguage();

    return (
        <div id="hero">
            <Banner
                src="/banner-1.jpg"
                name="Джон Уик 4"
                href="/watch/1"
                type="subscribe"
                age="18+"
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
                    {TRANSLATIONS[language].hero.btn}
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;
