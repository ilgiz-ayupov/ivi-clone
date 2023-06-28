'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import { ProgressBar } from '@/components/ui';
import FilmStatus from './FilmStatus';

import { FiStar, FiBookmark } from 'react-icons/fi';
import { BsMagic } from 'react-icons/bs';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

import { useLanguage } from '@/hooks';
import { getTranslatedName } from '@/utils/translations';

import type { LanguageType } from '@/types';
import type { FilmCardProps } from '@/types/components';

const FilmCard: FC<FilmCardProps> = ({
    className,
    id,
    nameRu,
    nameEn,
    preview,
    rating,
    year,
    countries,
    genres,
    duration,
    status
}) => {
    const { language } = useLanguage();

    const getShortInfo = (lang: LanguageType) => {
        const info: (string | number)[] = [year];

        if (countries[0]) {
            info.push(getTranslatedName(lang, countries[0]));
        }

        if (genres[0]) {
            info.push(getTranslatedName(lang, genres[0]));
        }

        return info.join(', ');
    };

    return (
        <div
            className={cn(
                'group relative duration-500 active:scale-90',
                className
            )}>
            <Link
                className="absolute inset-0 z-10"
                href={`/watch/${id}`}
                title={`Ссылка на фильм: ${getTranslatedName(language, {
                    name_ru: nameRu,
                    name_en: nameEn
                })}`}
            />

            <div className="relative overflow-hidden rounded-xl bg-purple-800 duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <Image
                    className="block h-full w-full object-cover"
                    src={preview}
                    alt={getTranslatedName(language, {
                        name_ru: nameRu,
                        name_en: nameEn
                    })}
                    width={172}
                    height={264}
                />

                <div className="absolute inset-0 bg-[rgba(7,5,14,.8)] opacity-0 duration-200 group-hover:opacity-100">
                    <div className="absolute inset-x-3 bottom-3">
                        <div className="flex items-center gap-x-2">
                            <div className="text-xl font-bold text-white">
                                {rating.toFixed(1)}
                            </div>
                            <div className="flex h-4 w-7 flex-col items-center justify-between">
                                <ProgressBar
                                    width="100%"
                                    height="2px"
                                    progress={43}
                                />
                                <ProgressBar
                                    width="100%"
                                    height="2px"
                                    progress={45}
                                />
                                <ProgressBar
                                    width="100%"
                                    height="2px"
                                    progress={54}
                                />
                                <ProgressBar
                                    width="100%"
                                    height="2px"
                                    progress={54}
                                />
                            </div>
                        </div>
                        <div className="my-1 text-xs text-gray-400">актёры</div>
                        <ProgressBar width="75%" height="4px" progress={54} />
                        <div className="mb-1 mt-2 text-xs font-bold text-gray-300">
                            {getShortInfo(language)}
                        </div>
                        <div className="my-1 text-xs font-bold text-gray-300">
                            {duration}
                        </div>
                    </div>
                </div>
            </div>

            <ul className="absolute right-3 top-3 z-30 flex flex-col text-white opacity-0 duration-300 group-hover:opacity-100">
                <li>
                    <Link
                        className="inline-block"
                        title="Добавить в закладку"
                        href={`/add-bookmark/${id}`}>
                        <FiBookmark className="h-6 w-6" />
                    </Link>
                </li>
                <li>
                    <Link
                        className="inline-block"
                        title="Похожее"
                        href={`/similar/${id}`}>
                        <BsMagic className="h-6 w-6" />
                    </Link>
                </li>
                <li>
                    <Link
                        className="inline-block"
                        title="Оценить"
                        href={`/evaluate/${id}`}>
                        <FiStar className="h-6 w-6" />
                    </Link>
                </li>
                <li>
                    <Link
                        className="inline-block"
                        title="Не нравится такое"
                        href={`/ban/${id}`}>
                        <AiOutlineEyeInvisible className="h-6 w-6" />
                    </Link>
                </li>
            </ul>

            <div className="mt-2 text-white">
                <h4 className="max-w-[95%] overflow-hidden text-ellipsis whitespace-nowrap font-medium">
                    {getTranslatedName(language, {
                        name_en: nameEn,
                        name_ru: nameRu
                    })}
                </h4>
                <FilmStatus className="mt-0.5" status={status} />
            </div>
        </div>
    );
};

export default FilmCard;
