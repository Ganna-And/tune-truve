import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
    icon: IconType,
    label: string,
    active?:boolean,
    href: string
};

const SidebarItem:React.FC<SidebarItemProps> = ({
    icon: Icon,
    label,active,href
}) => {
    
    return (
    <Link href={href} className={twMerge(`
    flex
    items-center
    mb-1
    navhover
    transition
    `,active && 'text-white')}>
        <Icon className='mx-4' size={22}/>
        <h2 className='text-lg mt-1 truncate'>{label}</h2>
    </Link >)
}
export default SidebarItem;