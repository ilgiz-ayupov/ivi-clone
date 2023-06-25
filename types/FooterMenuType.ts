export type FooterItemType = {
    label_ru: string;
    label_en: string;
    href: string;
};

export interface FooterMenuType {
    title_ru: string;
    title_en: string;
    items: FooterItemType[];
}
