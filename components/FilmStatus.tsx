'use client';

import React, { FC } from 'react';
import cn from 'classnames';

import { TRANSLATIONS } from '@/constants';
import { useLanguage } from '@/hooks';
import type { FilmStatusType } from '@/types';

const FilmStatus: FC<{ status: FilmStatusType; className?: string }> = ({
    status,
    className
}) => {
    const { language } = useLanguage();

    return (
        <p
            className={cn('text-xs', className, {
                'text-red-600': status === 'subscribe',
                'text-gray-400': status === 'free',
                'text-blue-400': status === 'buy'
            })}>
            {TRANSLATIONS[language].filmCard.status[status]}
        </p>
    );
};

export default FilmStatus;
