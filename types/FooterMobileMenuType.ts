import { ReactNode } from 'react'

export interface FooterMobileItemType {
    label_ru: string,
    label_en: string,
    href: string,
    icon: ReactNode,
}

export type FooterMobileMenuType = FooterMobileItemType[]