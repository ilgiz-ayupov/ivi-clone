'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';

import { Logo, Button, Notification } from '@/lib/components/ui/';
import { HEADER_MENU } from '@/lib/constants';
import { useTranslator } from '@/lib/hooks';
import { capitalize } from '@/lib/utils';
interface HeaderProps {
    className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
    const { language, switchLanguage, translateItemLabel, getTranslation } =
        useTranslator();
    const translations = getTranslation();

    return (
        <header className={className}>
            <nav>
                <div className="container">
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center">
                            <Logo />

                            <ul className="hidden md:ml-4 md:flex md:gap-2 lg:ml-8 lg:gap-5">
                                {HEADER_MENU.map(item => (
                                    <li key={item.href}>
                                        <Link
                                            className="font-medium text-white/50 duration-200 hover:text-white"
                                            href={item.href}>
                                            {translateItemLabel(item)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center gap-3 lg:gap-5">
                            <Button
                                className="hidden sm:flex"
                                variant="primary">
                                {translations.header.subscribeBtn}
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
                                onClick={switchLanguage}>
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
