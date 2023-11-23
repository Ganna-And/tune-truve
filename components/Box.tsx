import React from 'react';
import{twMerge} from'tailwind-merge'

interface BoxProps {
    children:React.ReactNode
    className?:string
};

const Box:React.FC<BoxProps> = ({children,className}) => {
    
    return( 
    <div className={twMerge(`
    bg-orange-500
    text-orange-100
    border-white
    border-[1px]
    font-semibold
    w-[300px]
    uppercase
    flex
    flex-col
    p-4
    `,
    className)}>
        {children}</div>)
}
export default Box;