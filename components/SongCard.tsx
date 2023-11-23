
import useUploadImg from '@/hooks/useUploadImg';
import { Song } from '@/types';
import Image from 'next/image';
import React from 'react';
import PlayButtons from './PlayButtons';
import { useUser } from '@/hooks/useUser';
import useAuthModal from '@/hooks/useAuthModal';
import useSubscribeModal from '@/hooks/useSubscribeModal';


type SongCardProps = {
    song:Song,
    onClick:(id:string)=>void
   
};

const SongCard:React.FC<SongCardProps> = ({song, onClick}) => {

    const imgPath = useUploadImg(song);
    
    
    const {user, subscription} = useUser();
    const authM = useAuthModal();
    const subscriptionM = useSubscribeModal()


    const handleOnClick = ()=>{
        if(!user){
            authM.onOpen()
                    }else if(!subscription){
            subscriptionM.onOpen()
            console.log(subscription)
                    }
                    if(onClick && user && subscription){
                        return onClick(song.id)
                    }
    }
    
    return (
        <div className='
        relative
        group
        flex
        flex-col
        justify-center
        rounded-md
        gap-x-4
        bg-orange-500/50
        overflow-hidden 
        transition 
        hover:bg-orange-500/30
        p-3
         '
         onClick={handleOnClick}>
            <div className='relative
            aspect-square
            w-ful
            h-full
            rounded-md
            overflow-hidden'>
                <Image alt='song img'
             src={ imgPath ||'/assets/liked.png'}
             className='object-cover'
             fill
             />
            </div>
            <div className="flex flex-col gap-y-2 mt-4">
                <p >{song.title}</p>
                <p className='text-sm font-thin'>by {song.author}</p>
            </div>
            <div className=' absolute bottom-[20%] right-2 opacity-0 group-hover:opacity-100'>
                <PlayButtons />
            </div>
        </div>
    )
}
export default SongCard;