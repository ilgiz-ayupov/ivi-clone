import type { FilmType } from '@/types'

export const FILMS: FilmType[] = [
    {
        id: 1,
        nameRu: 'Джон Уик 4',
        nameEn: 'John Wick 4',
        preview: '/film-card-1.jpg',
        rating: 8.2,
        year: 2023,
        countries: ['CША', 'Германия'],
        genres: ['Боевики', 'Триллеры', 'Криминал'],
        duration: '162 минуты',
        status: 'subscribe'
    },
    {
        id: 2,
        nameRu: 'Морской бой',
        nameEn: '',
        preview: '/film-card-2.jpg',
        rating: 8.0,
        year: 2012,
        countries: ['Сша'],
        genres: ['Фантастика', 'Боевики', 'Триллеры'],
        duration: '131 минуты',
        status: 'subscribe',
    },
    {
        id: 3,
        nameRu: 'Форсаж 8',
        nameEn: '',
        preview: '/film-card-3.jpg',
        rating: 8.3,
        year: 2017,
        countries: ['США'],
        genres: ['Боевики', 'Триллеры', 'Криминал'],
        duration: '135 минуты',
        status: 'buy'
    },
    {
        id: 4,
        nameRu: 'Веном',
        nameEn: '',
        preview: '/film-card-4.jpg',
        rating: 8.3,
        year: 2018,
        countries: ['США'],
        genres: ['Фантастика', 'Боевики', 'Ужасы'],
        duration: '112 минуты',
        status: 'subscribe'
    },
    {
        id: 5,
        nameRu: 'Чёрный лотос',
        nameEn: '',
        preview: '/film-card-5.jpg',
        rating: 6.4,
        year: 2023,
        countries: ['США'],
        genres: ['Боевики', 'Триллеры', 'Зарубежные'],
        duration: '92 минуты',
        status: 'subscribe'
    }
] 