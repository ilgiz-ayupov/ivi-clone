import type { CollectionDBType } from '@/types';

export const COLLECTIONS: CollectionDBType[] = [
    {
        id: 1,
        name_ru: 'Боевики-триллеры',
        name_en: 'Actions and Trailers',
        slug: 'actions-trailers',
        films: [1, 2, 3, 4, 5]
    },
    {
        id: 2,
        name_ru: 'Исторические драмы',
        name_en: 'Historical dramas',
        slug: 'historical-dramas',
        films: []
    },
    {
        id: 3,
        name_ru: 'Основано на реальных событиях',
        name_en: 'Based on real events',
        slug: 'based-on-real-events',
        films: []
    }
];
