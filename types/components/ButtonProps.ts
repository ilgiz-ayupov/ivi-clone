import { HTMLAttributes } from 'react';

export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonSize = 'small' | 'normal';

export type ButtonVariant = 'primary' | 'secondary' | 'primary-gradient';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type?: ButtonType;
    size?: ButtonSize;
    variant?: ButtonVariant;
}
