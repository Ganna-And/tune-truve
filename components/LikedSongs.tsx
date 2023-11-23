"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoPlay, IoPlayOutline } from 'react-icons/io5';



type LikedSongsProps = {
    href: string,
    image: string,
    title:string
 
};

const LikedSongs:React.FC<LikedSongsProps> = ({href,image,title}) => {
    const router = useRouter()

    const onClick= ()=>{
        //check if logged in
        router.push(href)
    }

    return (
        <div>
        <button className="flex w-[16rem] group orrangehover
          bg-orange-100 h-[3rem] px-2 relative rounded-lg items-center
         uppercase gap-x-2"
         onClick={onClick}
         >
    
       <Image src= {image}  alt='liked picture' width={24} height={24}/>
       
        <p className="pt-1 font-regular text-orange-900">{title}</p>
        <div className='opacity-0 group-hover:opacity-100 absolute right-5'>
            <IoPlayOutline size={32} onClick={()=>{}}
             className='text-orange-900 border-[1px] 
             rounded-full bg-orange-100
               border-orange-900 p-2 '/>
        </div>
        </button>
        </div>
    )
}
export default LikedSongs;