'use client';

import React, { FC } from 'react';
import cn from 'classnames';

import { TRANSLATIONS } from '@/lib/constants';
import { useTranslator } from '@/lib/hooks';
import type { FilmStatusType } from '@/types';

const FilmStatus: FC<{ status: FilmStatusType; className?: string }> = ({
    status,
    className
}) => {
    const { getTranslation } = useTranslator();
    const translations = getTranslation();

    return (
        <p
            className={cn('text-xs', className, {
                'text-red-600': status === 'subscribe',
                'text-gray-400': status === 'free',
                'text-blue-400': status === 'buy'
            })}>
            {translations.filmStatus[status]}
        </p>
    );
};

export default FilmStatus;
