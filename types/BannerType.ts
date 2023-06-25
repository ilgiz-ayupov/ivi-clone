export type BannerTypeType = 'subscribe' | 'free' | 'collection';

export interface BannerType {
    src: string;
    name: string;
    href: string;
    age: string;
    type: BannerTypeType;
}
