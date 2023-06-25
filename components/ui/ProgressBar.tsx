import React, { FC } from 'react';
import cn from 'classnames';

import type { ProgressBarProps } from '@/types/components';

const ProgressBar: FC<ProgressBarProps> = ({
    className,
    width,
    height,
    progress
}) => {
    return (
        <div
            className={cn(
                'relative overflow-hidden rounded-md bg-[rgba(165,161,178,.32)]',
                className
            )}
            style={{ width, height }}>
            <span
                className="absolute inset-y-0 left-0 overflow-hidden rounded-md bg-red-600"
                style={{ width: `${progress}%` }}></span>
        </div>
    );
};

export default ProgressBar;
