"use client"

import useGetSongsById from '@/hooks/useGetSongsById';
import useLoadSong from '@/hooks/useLoadSong';
import usePlayer from '@/hooks/usePlayer';
import React from 'react';
import PlayerContent from './PlayerContent';
import { useUser } from '@/hooks/useUser';



const Player= () => {

    const player = usePlayer();
    const {song} = useGetSongsById(player.activeId);
    const songUrl = useLoadSong(song!)
    const {user} = useUser()

    if(!player.activeId || !songUrl || !song || !user){
         return null
    }
    
    return (
        <div className='h-[80px] bg-orange-500'>
         <PlayerContent key={songUrl} song={song} songUrl={songUrl}/>
        </div>
    )
}
export default Player;