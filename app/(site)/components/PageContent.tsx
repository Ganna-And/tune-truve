"use client";
import React from 'react';
import { Song } from '@/types';
import SongCard from '@/components/SongCard';
import useOnPlay from '@/hooks/useOnPlay';


interface PageContentProps {
    songs: Song[]
};

const PageContent:React.FC<PageContentProps> = ({songs}) => {
   const onPlay = useOnPlay(songs)
   
    if(songs.length === 0){
        return (
            <div className='mt-4 text-neutral-800'>
                No songs available yet
            </div>
        )
    }
    return (
        <div className='  
        grid
        grid-cols-2
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-5
        xl:grid-cols-6
        gap-x-4'>
            {songs.map((song)=>(
<SongCard key={song.id} song={song} onClick={(id:string)=>onPlay(id)} />
        ))}</div>
    )
}
export default PageContent;