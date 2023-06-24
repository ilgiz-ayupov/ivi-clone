'use client'

import { FC } from 'react'
import Link from 'next/link'
import { useCallback } from 'react'
import { AiOutlineUser } from 'react-icons/ai'

import { Logo, Button, Notification } from '@/components/ui/'
import { HEADER_MENU, TRANSLATIONS } from '@/constants'
import { useLanguage } from '@/hooks/useLanguage'
import { capitalize } from '@/utils'

import type { HeaderMenuItemType, LanguageType } from '@/types'
import type { HeaderProps } from '@/types/components'

const Header: FC<HeaderProps> = ({ className }) => {
    const { language, setLanguage } = useLanguage()

    const getMenuItemLabel = useCallback((lang: LanguageType, item: HeaderMenuItemType) => {
        switch (lang) {
            case 'ru':
                return item.label_ru;
            case 'en':
                return item.label_en;
            default:
                return ''
        }
    }, [])

    return (
        <header className={className}>
            <nav>
                <div className="container">
                    <div className="flex justify-between items-center py-3">
                        <div className="flex items-center">
                            <Logo />

                            <ul className="hidden md:flex md:gap-2 md:ml-4 lg:gap-5 lg:ml-8">
                                {HEADER_MENU.map((item) => (
                                    <li key={item.href} data-testid="header-menu-item">
                                        <Link className="text-white/50 font-medium duration-200 hover:text-white" href={item.href}>
                                            {getMenuItemLabel(language, item)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center gap-3 lg:gap-5">
                            <Button className="hidden sm:flex" variant="primary">
                                {TRANSLATIONS[language].header.subscribeBtn}
                            </Button>

                            <Notification count={10} />

                            <Link className="text-white" href="/auth" aria-label="Войти в аккаунт">
                                <AiOutlineUser className="w-[23px] h-[23px]" data-testid="login-icon" />
                            </Link>
                            <Button className="active:bg-red-600" variant="secondary" arial-label="Сменить язык" onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}>
                                {capitalize(language)}
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header