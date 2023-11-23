"use client"
import React from 'react';
import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';
import { Song } from '@/types';
import { twMerge } from 'tailwind-merge';
import usePlayer from '@/hooks/usePlayer';





interface SidebarProps {
    children: React.ReactNode,
    songs:Song[]
};

const Sidebar:React.FC<SidebarProps> = ({children, songs}) => {


    const pathName = usePathname();
    const player = usePlayer();

    const routes = useMemo(()=>[{
      icon: IoHomeOutline,
      label:'Home',
      active: pathName !== '/search',
      href:'/'
    
    },
    {
      icon:IoSearchOutline,
      label:'Search',
      active: pathName === '/search',
      href:'/search'
    }],[pathName])

    return (
    <div className={twMerge(`flex h-full`,player.activeId&& 'h-[calc(100%-80px)]')}>
        <main className="flex-1 h-full overflow-y-auto bg-neutral-900"> {children}</main>
        <div className="
        hidden
        md:flex
        flex-col
        h-full
        w-[300px]
        ">
         <Box>{routes.map(item=>(
            <SidebarItem 
            key={item.label}
             {...item} />
         ))} </Box>
         <Box className='h-full overflow-y-auto'>
          <Library songs={songs} />
          </Box>
        </div>
       </div>
       )
}
export default Sidebar;