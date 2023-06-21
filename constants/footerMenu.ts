import type { FooterMenuType } from '@/types'

export const FOOTER_MENU: FooterMenuType[] = [
    {
        title_ru: 'О нас',
        title_en: 'About us',
        items: [
            {
                label_ru: 'О компании',
                label_en: 'About company',
                href: '/about-company'
            },
            {
                label_ru: 'Вакансии',
                label_en: 'Vacancies',
                href: '/vacancies'
            },
            {
                label_ru: 'Программа бета-тестирования',
                label_en: 'Beta Testing Program',
                href: '/beta-testing'
            },
            {
                label_ru: 'Информация для партнёров',
                label_en: 'Information for partners',
                href: '/information-partners'
            },
            {
                label_ru: 'Размещение рекламы',
                label_en: 'Advertising placement',
                href: '/advertisement'
            },
            {
                label_ru: 'Пользовательское соглашение',
                label_en: 'User agreement',
                href: '/user-agreement'
            },
            {
                label_ru: 'Политика конфиденциальности',
                label_en: 'Privacy policy',
                href: '/privacy-policy'
            },
            {
                label_ru: 'Комплаенс',
                label_en: 'Compliance',
                href: '/compliance'
            }
        ]
    },
    {
        title_ru: 'Разделы',
        title_en: 'Sections',
        items: [
            {
                label_ru: 'Мой Иви',
                label_en: 'My Ivi',
                href: '/'
            },
            {
                label_ru: 'Что нового',
                label_en: 'New',
                href: '/new'
            },
            {
                label_ru: 'Фильмы',
                label_en: 'Films',
                href: '/films'
            },
            {
                label_ru: 'Сериалы',
                label_en: 'Serials',
                href: '/serials'
            },
            {
                label_ru: 'Мультфильмы',
                label_en: 'Animations',
                href: '/animations'
            },
            {
                label_ru: 'Что посмотреть',
                label_en: 'What to see',
                href: '/good-movies'
            },
        ]
    }
]