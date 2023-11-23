"use client"

import LikedButton from '@/components/LikedButton';
import MediaItem from '@/components/MediaItem';
import useOnPlay from '@/hooks/useOnPlay';
import { useUser } from '@/hooks/useUser';
import { Song } from '@/types';
import { useRouter } from 'next/navigation';
import React from 'react';

type LikedContentProps = {
    songs:Song[]
};

const LikedContent:React.FC<LikedContentProps> = ({songs}) => {
    
    const{isLoading, user} = useUser();
    const router = useRouter();
    const onPlay = useOnPlay(songs)

    if(songs.length === 0){
        return(
            <div
            className='mt-2 ml-4 text-lg'>No favorite songs</div>
        )
    }
    if(!user && !isLoading){
        router.push('/')
    }




    return (
        <div className=' w-full '>
            {songs.map((item)=>(
                <div key={item.id} className='flex items-center'>
                   <div className="flex-1">
                    <MediaItem
                    onClick={(id)=> onPlay(id)}
                    song={item} />
                   </div>
                   <div>
                 <LikedButton songId={item.id} />
                 </div>
                </div>
            ))}
        </div>
    )
}
export default LikedContent;