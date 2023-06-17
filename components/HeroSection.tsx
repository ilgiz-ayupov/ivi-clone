'use client'

import { FC } from 'react'
import Image from 'next/image'

import Banner from './Banner'
import Button from './Button'

import { TRANSLATIONS } from '@/constants'
import { useLanguage } from '@/hooks/useLanguage'

const HeroSection: FC = () => {
    const { language } = useLanguage()

    return (
        <div id="hero">
            <Banner src="/banner-1.jpg" name="Джон Уик 4" href="/watch/1" type="subscribe" age="18+" />

            <div className="container mx-auto px-5">
                <Button className="flex items-center justify-center mt-3 w-full bg-[url(/hero__btn-bg.svg)]" variant="secondary" size="normal">
                    <Image className="mr-2" src="/lightning.svg" alt='' width={24} height={32} />
                    {TRANSLATIONS[language].hero.btn}
                </Button>
            </div>
        </div>
    )
}

export default HeroSection