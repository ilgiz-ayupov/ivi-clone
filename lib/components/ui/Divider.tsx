import React, { FC } from 'react';
import cn from 'classnames';

interface DividerProps {
    height: string;
    width: string;
    className?: string;
}

const Divider: FC<DividerProps> = ({ className, height, width }) => {
    return (
        <div
            className={cn('bg-white/[16%]', className)}
            style={{ width, height }}
        />
    );
};

export default Divider;
