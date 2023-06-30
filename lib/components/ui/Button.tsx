'use client';

import React, { FC, ReactNode, HTMLAttributes } from 'react';
import cn from 'classnames';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'primary-gradient';
    size?: 'small' | 'normal';
    type?: 'button' | 'submit';
    children: ReactNode;
    className?: string;
}

const Button: FC<ButtonProps> = ({
    className,
    type,
    variant,
    size = 'small',
    children,
    ...props
}) => {
    return (
        <button
            className={cn(
                'cursor-pointer rounded-md border-none px-3 py-2 font-medium text-white duration-200 active:scale-95',
                className,
                {
                    'bg-red-600 hover:bg-red-500': variant === 'primary',
                    'bg-purple-400 hover:bg-purple-300':
                        variant === 'secondary',

                    'text-xs': size === 'small',
                    'text-sm': size === 'normal'
                }
            )}
            type={type ?? 'button'}
            {...props}>
            {children}
        </button>
    );
};

export default Button;
