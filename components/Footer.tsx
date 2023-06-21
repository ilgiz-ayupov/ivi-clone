'use client'

import { FC, useCallback } from 'react'
import Link from 'next/link'

import Divider from './Divider'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { LuMegaphoneOff } from 'react-icons/lu'

import { FOOTER_MENU } from '@/constants'
import { useLanguage } from '@/hooks/useLanguage'
import type { LanguageType, FooterMenuType, FooterItemType } from '@/types'
import type { FooterProps } from '@/types/components'

const Footer: FC<FooterProps> = ({ className }) => {
    const { language } = useLanguage()

    const getMenuTitle = useCallback((lang: LanguageType, menu: FooterMenuType) => {
        switch (lang) {
            case 'ru':
                return menu.title_ru
            case 'en':
                return menu.title_en
            default:
                return ''
        }
    }, [])

    const getItemLabel = useCallback((lang: LanguageType, item: FooterItemType) => {
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
        <footer className={className}>
            <div className="custom-container">
                <Divider height="1px" width="100%" />
                <div className="grid grid-cols-4 justify-between items-start py-12">
                    {FOOTER_MENU.map((menu) => (
                        <div key={menu.title_en}>
                            <h5 className="text-white font-bold">{getMenuTitle(language, menu)}</h5>
                            <ul className="mt-2 flex flex-col gap-1">
                                {menu.items.map((item) => (
                                    <li key={item.href}>
                                        <Link className="text-sm text-white/[48%] font-medium duration-300 hover:text-white" href={item.href}>{getItemLabel(language, item)}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h5 className="text-white font-bold">Служба поддержки</h5>
                        <p className="mt-2 text-white/[16%] font-medium">Мы всегда готовы вам помочь.
                            Наши операторы онлайн 24/7</p>

                        <div className="mt-5">
                            <Link
                                className="inline-block px-4 py-2 rounded-lg text-white font-medium bg-purple-800 duration-300 hover:bg-purple-300"
                                href="/profile/support"
                            >
                                Написать в чате
                            </Link>
                            <div className="mt-3 flex gap-3">
                                <a
                                    className="flex justify-center items-center h-10 w-10 rounded-lg text-white bg-purple-800 duration-300 hover:bg-purple-300"
                                    href="mailto:ask.ivi.ru"
                                >
                                    <AiOutlineMail className="w-5 h-5" />
                                </a>
                                <a
                                    className="flex justify-center items-center h-10 w-10 rounded-lg text-white bg-purple-800 duration-300 hover:bg-purple-300"
                                    href="tel:+123456789012"
                                >
                                    <AiOutlinePhone className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a
                                className="inline-block text-xs text-white font-medium duration-300 hover:text-white/70"
                                href="mailto:ask.ivi.ru"
                            >
                                ask.ivi.ru
                            </a>
                            <p className="text-sm text-white/[48%]">Ответы на вопросы</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex justify-center items-center w-24 h-24 bg-gradient-to-t from-[#A869F0] to-[#834CC2] shadow-[0_0_104px_#A869F0] rounded-2xl">
                            <LuMegaphoneOff className="text-white w-14 h-14" />
                        </div>
                        <p className="mt-6 text-sm text-gray-400 text-center">
                            Смотрите фильмы, сериалы и мультфильмы без рекламы
                        </p>
                    </div>
                </div>
                <Divider height="1px" width="100%" />
            </div>
        </footer>
    )
}

export default Footer