'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Button from './Button'

import { useLanguage } from '@/hooks/useLanguage'
import { TRANSLATIONS } from '@/constants'
import type { BannerProps } from '@/types/components'

const Banner: FC<BannerProps> = ({ className, name, age, href, src, type }) => {
    const { language } = useLanguage()

    return (
        <div className={className} title={name}>
            <div className="container mx-auto px-5">
                <Link className="relative inline-block h-[182px] sm:h-auto" href={href}>
                    <span className="absolute top-5 left-5 text-[#c0c0c0] text-[10px] font-medium bg-[#858585] flex items-center justify-center w-6 h-4 rounded-sm">{age}</span>

                    <span className="pointer-events-none">
                        <Image className="rounded-lg min-w-full h-full object-cover" src={src} alt={name} width={1216} height={370} />
                    </span>

                    <Button className="absolute bottom-5 left-5" variant="primary" size="normal">{TRANSLATIONS[language].banner.btn[type]}</Button>
                </Link>
            </div>
        </div>
    )
}

export default Banner