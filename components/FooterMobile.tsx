'use client'

import { FC, useCallback } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { FOOTER_MOBILE_MENU } from '@/constants/footerMobileMenu'
import { useLanguage } from '@/hooks/useLanguage'
import { getTranslatedItemLabel } from '@/utils/translations'
import type { FooterMobileProps } from '@/types/components'


const FooterMobile: FC<FooterMobileProps> = ({ className }) => {
    const { language } = useLanguage()


    return (
        <div className={cn("fixed bottom-0 left-0 right-0 z-50 bg-purple-800/90", className)}>
            <div className="custom-container">
                <ul className="flex justify-between items-center w-full h-14 mx-auto overflow-hidden md:max-w-[80%]">
                    {FOOTER_MOBILE_MENU.map((item) => (
                        <li className="flex-grow w-16 h-12 text-gray-400" key={item.href}>
                            <Link className="flex flex-col flex-grow items-center text-center duration-300 hover:text-white" href={item.href}>
                                {item.icon}
                                <span
                                    className="block mt-1 text-xs font-medium"
                                >
                                    {getTranslatedItemLabel(language, item)}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FooterMobile