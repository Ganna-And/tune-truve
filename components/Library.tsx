"use client"
import React from 'react';
import { PiPlaylistLight } from "react-icons/pi";
import { CiSquarePlus } from "react-icons/ci";
import { useUser } from '@/hooks/useUser';
import useAuthModal from '@/hooks/useAuthModal';
import useUploadModal from '@/hooks/useUploadModal';
import { Song } from '@/types';
import MediaItem from './MediaItem';
import useOnPlay from '@/hooks/useOnPlay';
import useSubscribeModal from '@/hooks/useSubscribeModal';


interface LibraryProps {
    songs:Song[]
};

const Library:React.FC<LibraryProps> = ({songs}) => {

  const{ user, subscription} = useUser();
  const subscribeModal = useSubscribeModal()
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
 
  const onPlay = useOnPlay(songs)


    const addSong=({})=>{
//open upload modal
if(!user){
 return authModal.onOpen();
} 
if(!subscription){
 return subscribeModal.onOpen()
}
return  uploadModal.onOpen()
   }


    
    return (<div className='flex flex-col'>
        <div className="flex justify-between navhover">
        <div className="flex gap-x-2 items-center h-fit">
           <PiPlaylistLight size={26} className='pl-2' />
           <p className='mt-2'>Your Library</p> 
           </div>
           <CiSquarePlus size={26}
            className='mt-1'
              onClick={addSong}/>
           </div>
      
        <div className='mt-2'>
          {songs.map((item)=>(
 <MediaItem key={item.id} song={item} onClick={(id)=>onPlay(id)} />
          ))}
         </div> 
         </div>
  )
}
export default Library;