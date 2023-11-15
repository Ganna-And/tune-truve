import React from 'react';
import { PiPlaylistLight } from "react-icons/pi";
import { CiSquarePlus } from "react-icons/ci";


type LibraryProps = {
    
};

const Library:React.FC<LibraryProps> = () => {

    const addSong=()=>{
//open upload modal
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
      
        <h2 className='navhover mt-2 pl-2'>List of songs</h2> 
         </div>
  )
}
export default Library;