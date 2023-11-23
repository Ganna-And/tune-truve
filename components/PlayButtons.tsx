import React from 'react';
import { IoPlay } from 'react-icons/io5';

type PlayButtonsProps = {
    
};

const PlayButtons:React.FC<PlayButtonsProps> = () => {
    
    return( <div className='bg-neutral-800 
    p-4 rounded-full hover:scale-110 transition'><IoPlay /></div>)
}
export default PlayButtons;