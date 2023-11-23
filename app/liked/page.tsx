
import getLikedSongs from '@/actions/getLikedSongs';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';
import LikedContent from './components/LikedContent';


export const revalidate = 0;

const Liked = async() => {
    
    const songs = await getLikedSongs()
    return (
        <div>
            <Header>
               <div className='flex flex-col md:flex-row p-4 '>
                <div className='bg-orange-50 hover:bg-orange-500 transition rounded-md flex items-center w-full'>
                <Image src='/assets/liked.png' width={68} height={68} alt='image for favorite songs'/>
                <div className='text-black ml-2 flex-col'>
                <p className='text-sm'>Playlist</p>
                <h1 className='uppercase truncate md:text-2xl text-lg font-semibold'>Favorte songs</h1></div>
                </div>
                </div>
            </Header>
            <LikedContent songs={songs}/>
        </div>
    )
}
export default Liked;