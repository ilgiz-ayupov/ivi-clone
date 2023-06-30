'use client';

import React, { FC } from 'react';
import Link from 'next/link';

import { Divider } from '@/lib/components/ui';

import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { LuMegaphoneOff } from 'react-icons/lu';

import { FOOTER_MENU } from '@/lib/constants';
import { useTranslator } from '@/lib/hooks';

interface FooterProps {
    className?: string;
}

const FooterDesktop: FC<FooterProps> = ({ className }) => {
    const { translateMenuTitle, translateItemLabel, getTranslation } =
        useTranslator();
    const translations = getTranslation();

    return (
        <footer className={className}>
            <div className="container">
                <Divider height="1px" width="100%" />
                <div className="grid grid-cols-4 items-start justify-between py-12">
                    {FOOTER_MENU.map(menu => (
                        <div key={menu.title_en}>
                            <h5 className="font-bold text-white">
                                {translateMenuTitle(menu)}
                            </h5>
                            <ul className="mt-2 flex flex-col gap-1">
                                {menu.items.map(item => (
                                    <li key={item.href}>
                                        <Link
                                            className="text-sm font-medium text-white/[48%] duration-300 hover:text-white"
                                            href={item.href}>
                                            {translateItemLabel(item)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h5 className="font-bold text-white">
                            {translations.footer.customerService.title}
                        </h5>
                        <p className="mt-2 font-medium text-white/[16%]">
                            {translations.footer.customerService.description}
                        </p>

                        <div className="mt-5">
                            <Link
                                className="inline-block rounded-lg bg-purple-800 px-4 py-2 font-medium text-white duration-300 hover:bg-purple-300"
                                href="/profile/support">
                                {
                                    translations.footer.customerService
                                        .writeChatBtn
                                }
                            </Link>
                            <div className="mt-3 flex gap-3">
                                <a
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-800 text-white duration-300 hover:bg-purple-300"
                                    href="mailto:ask.ivi.ru">
                                    <AiOutlineMail className="h-5 w-5" />
                                </a>
                                <a
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-800 text-white duration-300 hover:bg-purple-300"
                                    href="tel:+123456789012">
                                    <AiOutlinePhone className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a
                                className="inline-block text-xs font-medium text-white duration-300 hover:text-white/70"
                                href="mailto:ask.ivi.ru">
                                ask.ivi.ru
                            </a>
                            <p className="text-sm text-white/[48%]">
                                {
                                    translations.footer.customerService
                                        .emailSubtext
                                }
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-t from-[#A869F0] to-[#834CC2] shadow-[0_0_104px_#A869F0]">
                            <LuMegaphoneOff className="h-14 w-14 text-white" />
                        </div>
                        <p className="mt-6 text-center text-sm text-gray-400">
                            {translations.footer.noAds.description}
                        </p>
                    </div>
                </div>
                <Divider height="1px" width="100%" />
            </div>
        </footer>
    );
};

export default FooterDesktop;
