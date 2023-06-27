'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';

import { Logo, Button, Notification } from '@/components/ui/';
import { HEADER_MENU, TRANSLATIONS } from '@/constants';
import { useLanguage } from '@/hooks';
import { capitalize } from '@/utils';
import { getTranslatedItemLabel } from '@/utils/translations';
import type { HeaderProps } from '@/types/components';

const Header: FC<HeaderProps> = ({ className }) => {
    const { language, setLanguage } = useLanguage();

    return (
        <header className={className}>
            <nav>
                <div className="container">
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center">
                            <Logo />

                            <ul className="hidden md:ml-4 md:flex md:gap-2 lg:ml-8 lg:gap-5">
                                {HEADER_MENU.map(item => (
                                    <li
                                        key={item.href}
                                        data-testid="header-menu-item">
                                        <Link
                                            className="font-medium text-white/50 duration-200 hover:text-white"
                                            href={item.href}>
                                            {getTranslatedItemLabel(
                                                language,
                                                item
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center gap-3 lg:gap-5">
                            <Button
                                className="hidden sm:flex"
                                variant="primary">
                                {TRANSLATIONS[language].header.subscribeBtn}
                            </Button>

                            <Notification count={10} />

                            <Link
                                className="text-white"
                                href="/auth"
                                aria-label="Войти в аккаунт">
                                <AiOutlineUser
                                    className="h-[23px] w-[23px]"
                                    data-testid="login-icon"
                                />
                            </Link>
                            <Button
                                className="active:bg-red-600"
                                variant="secondary"
                                arial-label="Сменить язык"
                                onClick={() =>
                                    setLanguage(language === 'ru' ? 'en' : 'ru')
                                }>
                                {capitalize(language)}
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
