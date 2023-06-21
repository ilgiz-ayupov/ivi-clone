'use client'

import { FC, useCallback, cloneElement } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { FOOTER_MOBILE_MENU } from '@/constants/footerMobileMenu'
import { useLanguage } from '@/hooks/useLanguage'

import type { LanguageType, FooterMobileItemType } from '@/types'
import type { FooterMobileProps } from '@/types/components'


const FooterMobile: FC<FooterMobileProps> = ({ className }) => {
    const { language } = useLanguage()

    const getItemLabel = useCallback((lang: LanguageType, item: FooterMobileItemType) => {
        switch (lang) {
            case 'ru':
                return item.label_ru
            case 'en':
                return item.label_en
            default:
                return ''
        }
    }, [])


    return (
        <div className={cn("fixed bottom-0 left-0 right-0 z-50 bg-purple-800/90", className)}>
            <div className="custom-container">
                <ul className="flex justify-between items-center w-full h-14 mx-auto overflow-hidden md:max-w-[80%]">
                    {FOOTER_MOBILE_MENU.map((item) => (
                        <li className="flex-grow w-16 h-12 text-gray-400" key={item.href}>
                            <Link className="flex flex-col flex-grow items-center text-center duration-300 hover:text-white" href={item.href}>
                                {item.icon}
                                <span className="block mt-1 text-xs font-medium">{getItemLabel(language, item)}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FooterMobile