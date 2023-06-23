import type { FilmType } from '@/types'

export const FILMS: FilmType[] = [
    {
        id: 1,
        nameRu: 'Джон Уик 4',
        nameEn: 'John Wick 4',
        preview: '/film-card-1.jpg',
        rating: 8.2,
        year: 2023,
        countries: ['usa', 'germany'],
        genres: ['actions', 'trailers', 'criminal'],
        duration: '162 минуты',
        status: 'subscribe',
        collections: ['actions-trailers']
    },
    {
        id: 2,
        nameRu: 'Морской бой',
        nameEn: '',
        preview: '/film-card-2.jpg',
        rating: 8.0,
        year: 2012,
        countries: ['usa'],
        genres: ['fantasy', 'actions', 'trailers'],
        duration: '131 минуты',
        status: 'subscribe',
        collections: ['actions-trailers'],
    },
    {
        id: 3,
        nameRu: 'Форсаж 8',
        nameEn: '',
        preview: '/film-card-3.jpg',
        rating: 8.3,
        year: 2017,
        countries: ['usa'],
        genres: ['actions', 'trailers', 'criminal'],
        duration: '135 минуты',
        status: 'buy',
        collections: ['actions-trailers']
    },
    {
        id: 4,
        nameRu: 'Веном',
        nameEn: '',
        preview: '/film-card-4.jpg',
        rating: 8.3,
        year: 2018,
        countries: ['usa'],
        genres: ['fantasy', 'actions', 'horrors'],
        duration: '112 минуты',
        status: 'subscribe',
        collections: ['actions-trailers']
    },
    {
        id: 5,
        nameRu: 'Чёрный лотос',
        nameEn: '',
        preview: '/film-card-5.jpg',
        rating: 6.4,
        year: 2023,
        countries: ['usa'],
        genres: ['actions', 'trailers', 'foreign'],
        duration: '92 минуты',
        status: 'subscribe',
        collections: ['actions-trailers']
    }
] 