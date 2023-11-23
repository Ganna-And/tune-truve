import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";



interface InputType extends React.InputHTMLAttributes<HTMLInputElement>{};

export const Input= forwardRef<HTMLInputElement, InputType>(({
    disabled,
    type,
    className,
    ...props
    
},ref)=>{
    return <input
    type={type}
    disabled={disabled}
    className={twMerge(`
    flex
    w-full
    border-transperent
    rounded-sm
    mt-2
    focus:outline-none
    disabled:cursor-not-allowed
    disabled:opacity-50
    placeholder:text-sm
    placeholder:font-semibold
    px-4
    h-[1.5rem]
    file:opacity-70
    file:border-0
    file:text-sm
    file:font-medium
    `)
}
ref={ref}
    {...props}
 />
})

Input.displayName = 'Input';
