

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const  Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    type='button',
    disabled,
    ...props
},ref)=>{return(
    <button className={twMerge(`
    orrangehover
    rounded-lg
    uppercase
    disabled:cursor-not-allowed
    px-4
    `,
    className)
    }
    disabled={disabled}
    ref={ref}
    {...props}>
{children}
    </button>
)})
Button.displayName = 'Button'
export default Button;