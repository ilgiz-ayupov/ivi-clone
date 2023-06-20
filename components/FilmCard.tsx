'use client'

import { FC, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import ProgressBar from './ProgressBar'

import { FiStar, FiBookmark } from 'react-icons/fi'
import { BsMagic } from 'react-icons/bs'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

import { TRANSLATIONS } from '@/constants'
import { useLanguage } from '@/hooks/useLanguage'
import type { LanguageType, FilmStatusType } from '@/types'
import type { FilmCardProps } from '@/types/components'

const FilmCard: FC<FilmCardProps> = ({ className, id, nameRu, nameEn, preview, rating, year, countries, genres, duration, status }) => {
    const { language } = useLanguage()

    const getFilmName = useCallback((lang: LanguageType) => {
        switch (lang) {
            case 'ru':
                return nameRu
            case 'en':
                return nameEn
            default:
                return ''
        }
    }, [nameRu, nameEn])

    const getFilmStatus = useCallback((status: FilmStatusType) => {
        switch (status) {
            case 'subscribe':
                return <p className="text-red-600 text-xs">{TRANSLATIONS[language].filmCard.status[status]}</p>
            case 'free':
                return <p className="text-gray-400 text-xs">{TRANSLATIONS[language].filmCard.status[status]}</p>
            case 'buy':
                return <p className="text-blue-400 text-xs">{TRANSLATIONS[language].filmCard.status[status]}</p>
            default:
                return null
        }
    }, [language])

    return (
        <div className={cn("group relative", className)}>
            <Link className="absolute top-0 left-0 right-0 bottom-0 z-10" href={`/watch/${id}`} />

            <div className="relative bg-purple-800 rounded-xl overflow-hidden duration-300 group-hover:-translate-y-1">
                <Image className="w-full h-full object-cover" src={preview} alt={getFilmName(language)} width={172} height={264} />

                <div className="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(7,5,14,.8)] duration-200 opacity-0 group-hover:opacity-100">
                    <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-x-2">
                            <div className="text-white text-xl font-bold">{rating.toFixed(1)}</div>
                            <div className="flex flex-col items-center justify-between w-7 h-4">
                                <ProgressBar className="w-full h-[2px]" progress={43} />
                                <ProgressBar className="w-full h-[2px]" progress={45} />
                                <ProgressBar className="w-full h-[2px]" progress={54} />
                                <ProgressBar className="w-full h-[2px]" progress={54} />
                            </div>
                        </div>
                        <div className="my-1 text-gray-400 text-xs">актёры</div>
                        <ProgressBar className="w-3/4 h-1" progress={54} />
                        <div className="mt-2 mb-1 text-gray-300 text-xs font-bold">{year}, {countries[0]}, {genres[0]}</div>
                        <div className="my-1 text-gray-300 text-xs font-bold">{duration}</div>
                    </div>
                </div>
            </div>

            <ul className="absolute top-3 right-3 z-30 flex flex-col text-white opacity-0 duration-300 group-hover:opacity-100">
                <li>
                    <Link className="inline-block" title="Добавить в закладку" href="/add-bookmark/1">
                        <FiBookmark className="w-6 h-6" />
                    </Link>
                </li>
                <li>
                    <Link className="inline-block" title="Похожее" href="/similar/1">
                        <BsMagic className="w-6 h-6" />
                    </Link>
                </li>
                <li>
                    <Link className="inline-block" title="Оценить" href="/evaluate/1">
                        <FiStar className="w-6 h-6" />
                    </Link>
                </li>
                <li>
                    <Link className="inline-block" title="Не нравится такое" href="/ban/1">
                        <AiOutlineEyeInvisible className="w-6 h-6" />
                    </Link>
                </li>
            </ul>

            <div className="mt-2 text-white">
                <h4 className="font-medium whitespace-nowrap max-w-[95%] overflow-hidden text-ellipsis">{getFilmName(language)}</h4>
                {getFilmStatus(status)}
            </div>

        </div>
    )
}

export default FilmCard