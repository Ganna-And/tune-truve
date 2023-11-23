"use client"

import LikedButton from '@/components/LikedButton';
import MediaItem from '@/components/MediaItem';
import useAuthModal from '@/hooks/useAuthModal';
import useOnPlay from '@/hooks/useOnPlay';
import useSubscribeModal from '@/hooks/useSubscribeModal';
import { useUser } from '@/hooks/useUser';
import { Song } from '@/types';
import React from 'react';


type SearchContentProps = {
    songs:Song[]
};

const SearchContent:React.FC<SearchContentProps> = ({songs}) => {
   
    const onPlay = useOnPlay(songs);

    
    if(songs.length === 0){
        return (
            <div>No songs found</div>
        )
    }
    return (
        <div>
            {songs.map(item=>(
                <div key={item.id} className='w-full bg-orange-500/10  hover:bg-orange-500/30 transition flex items-center justify-evenly '>
                    <div className='w-full bg-transparent'> 
                    <MediaItem song={item} onClick={(id)=>onPlay(id)} /> 
                    </div>
                     <LikedButton songId={item.id} />
                </div>
               
            
            ))}
            
        </div>
    )
}
export default SearchContent;