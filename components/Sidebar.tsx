"use client"
import React from 'react';
import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';





interface SidebarProps {
    children: React.ReactNode
};

const Sidebar:React.FC<SidebarProps> = ({children}) => {


    const pathName = usePathname();

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
    <div className='h-full'>
        <div className="flex h-full">
        <main className="h-full w-[100%] bg-neutral-900"> {children}</main>
        <div className="
        hidden
        md:flex
        flex-col
        w-[300px]
        ">
         <Box>{routes.map(item=>(
            <SidebarItem 
            key={item.label}
             {...item} />
         ))} </Box>
         <Box className='h-full overflow-y-auto'><Library /></Box>
        </div>
       </div>
        </div>)
}
export default Sidebar;