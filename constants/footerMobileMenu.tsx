import React from 'react';
import {
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineMore
} from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';

import type { FooterMobileMenuType } from '@/types';

export const FOOTER_MOBILE_MENU: FooterMobileMenuType = [
    {
        label_ru: 'Мой иви',
        label_en: 'My ivi',
        href: '/',
        icon: <AiOutlineHome className="h-6 w-6" />
    },
    {
        label_ru: 'Каталог',
        label_en: 'Catalog',
        href: '/movies',
        icon: <MdLocalMovies className="h-6 w-6" />
    },
    {
        label_ru: 'Поиск',
        label_en: 'Search',
        href: '/search',
        icon: <AiOutlineSearch className="h-6 w-6" />
    },
    {
        label_ru: 'Профиль',
        label_en: 'Profile',
        href: '/profile',
        icon: <AiOutlineUser className="h-6 w-6" />
    },
    {
        label_ru: 'Ещё',
        label_en: 'More',
        href: '/more',
        icon: <AiOutlineMore className="h-6 w-6 rotate-180" />
    }
];
