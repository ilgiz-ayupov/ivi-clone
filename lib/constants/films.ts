import type { FilmDBType } from '@/types';

export const FILMS: FilmDBType[] = [
    {
        id: 1,
        name_ru: 'Джон Уик 4',
        name_en: 'John Wick 4',
        preview: '/film-card-1.jpg',
        rating: 8.2,
        year: 2023,
        countries: ['usa', 'germany'],
        genres: ['actions', 'trailers', 'criminal'],
        duration: '162 минуты',
        status: 'subscribe'
    },
    {
        id: 2,
        name_ru: 'Морской бой',
        name_en: 'Battleship',
        preview: '/film-card-2.jpg',
        rating: 8.0,
        year: 2012,
        countries: ['usa'],
        genres: ['fantasy', 'actions', 'trailers'],
        duration: '131 минуты',
        status: 'subscribe'
    },
    {
        id: 3,
        name_ru: 'Форсаж 8',
        name_en: 'The Fate of the Furious 8',
        preview: '/film-card-3.jpg',
        rating: 8.3,
        year: 2017,
        countries: ['usa'],
        genres: ['actions', 'trailers', 'criminal'],
        duration: '135 минуты',
        status: 'buy'
    },
    {
        id: 4,
        name_ru: 'Веном',
        name_en: 'Venom',
        preview: '/film-card-4.jpg',
        rating: 8.3,
        year: 2018,
        countries: ['usa'],
        genres: ['fantasy', 'actions', 'horrors'],
        duration: '112 минуты',
        status: 'subscribe'
    },
    {
        id: 5,
        name_ru: 'Чёрный лотос',
        name_en: 'Black Lotus',
        preview: '/film-card-5.jpg',
        rating: 6.4,
        year: 2023,
        countries: ['usa'],
        genres: ['actions', 'trailers', 'foreign'],
        duration: '92 минуты',
        status: 'subscribe'
    }
];
