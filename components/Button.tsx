'use client'

import { FC } from "react"
import cn from 'classnames'

import type { ButtonProps } from "@/types/components"

const Button: FC<ButtonProps> = ({ className, type, variant, size = 'small', children, ...props }) => {

    return (
        <button className={cn('cursor-pointer border-none text-white font-medium py-2 px-3 rounded-md duration-200 active:scale-95', className, {
            'bg-red-600 hover:bg-red-500': variant === 'primary',
            'bg-purple-400 hover:bg-purple-300': variant === 'secondary',

            'text-xs': size === 'small',
            'text-sm': size === 'normal',
        })} type={type ?? 'button'} {...props}>
            {children}
        </button>
    )
}

export default Button