"use client"

import useUploadImg from '@/hooks/useUploadImg';
import { Song } from '@/types';
import Image from 'next/image';
import React from 'react';
import PlayButtons from './PlayButtons';
import LikedButton from './LikedButton';
import { useUser } from '@/hooks/useUser';
import useAuthModal from '@/hooks/useAuthModal';
import useSubscribeModal from '@/hooks/useSubscribeModal';

type MediaItemProps = {
    song:Song,
    onClick:(id:string) =>void
};

const MediaItem:React.FC<MediaItemProps> = ({song, onClick}) => {

    const imgPath = useUploadImg(song);
    const {user, subscription} = useUser();
    const authM = useAuthModal();
    const subscriptionM = useSubscribeModal()

    const handleOnClick= ()=>{

        if(!user){
authM.onOpen()
        }else if(!subscription){
subscriptionM.onOpen()
console.log(subscription)
        }
        if(onClick && user && subscription){
            return onClick(song.id)
        }

        //default turn on player
    }

    
    return <div className='flex  
    relative
    p-2 my-2
    rounded-md
    cursor-pointer
    hover:bg-neutral-800/30
        bg-neutral-800/50
    group'
    onClick={handleOnClick}>
    <div className='
    relative
        min-h-[48px]
        min-w-[48px]
        overflow-hidden
       rounded-md
       transition-all
      '>
            <Image
            src={imgPath || '/assets/liked.png'}
            alt='song img'
            className='object-cover '
            fill />
        </div>
        <div className="flex-col pl-2">
            <p>{song.title}</p>
            <p className='text-sm font-thin truncate'> by {song.author}</p>
        </div>
        <button className='group-hover:opacity-100 opacity-0 absolute right-4'></button>
    </div>
}
export default MediaItem;