import React, { FC } from 'react';
import cn from 'classnames';

interface ProgressBarProps {
    width: string;
    height: string;
    progress: number;
    className?: string;
}

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
            style={{ width, height }}
            data-testid="progressbar">
            <div
                className="absolute inset-y-0 left-0 overflow-hidden rounded-md bg-red-600"
                style={{ width: `${progress}%` }}
                data-testid="progressbar-line"
            />
        </div>
    );
};

export default ProgressBar;
