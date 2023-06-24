'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui'
import { useLanguage } from '@/hooks/useLanguage'
import { TRANSLATIONS } from '@/constants'

import type { BannerProps } from '@/types/components'

const Banner: FC<BannerProps> = ({ className, name, age, href, src, type }) => {
    const { language } = useLanguage()

    return (
        <div className={className} title={name}>
            <div className="container">
                <Link className="relative block h-auto" href={href}>
                    <span
                        className="absolute top-3 left-3 md:top-5 md:left-5 text-[#c0c0c0] text-[10px] font-medium bg-[#858585] flex items-center justify-center w-6 h-4 rounded-sm"
                    >
                        {age}
                    </span>

                    <span className="pointer-events-none">
                        <Image
                            className="rounded-lg min-w-full min-h-[182px] object-cover"
                            src={src}
                            alt={name}
                            width={1216}
                            height={370}
                        />
                    </span>

                    <Button
                        className="absolute bottom-3 left-3 md:bottom-5 md:left-5"
                        variant="primary"
                        size="normal"
                    >
                        {TRANSLATIONS[language].banner.btn[type]}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Banner