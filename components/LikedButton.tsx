import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import { useSessionContext } from '@supabase/auth-helpers-react';
import { supabase } from '@supabase/auth-ui-shared';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';



interface LikedButtonProps {
    songId: string
};

const LikedButton:React.FC<LikedButtonProps> = ({songId}) => {
    
const {supabaseClient} = useSessionContext();
const [isLiked, setIsLiked] = useState(false);
const authModal = useAuthModal();
const router = useRouter();


const {user} = useUser();



useEffect(()=>{
  if(!user?.id){
    return
}
const fetchData =async()=>{

    const{data, error} =await supabaseClient.from('liked_songs').select('*').eq('user_id', user?.id).eq('song_id', songId).single();

    if(!error && data){
     setIsLiked(true)   
    }

}

fetchData()

}, [songId, user?.id, supabaseClient])

const handleClick =async()=>{
    if(!user){
        authModal.onOpen();
    }

    if(isLiked){
        const{error} = await supabaseClient.from('liked_songs').delete().eq('user_id', user?.id).eq('song_id', songId)

        if(error){
            toast.error(error.message)
        }else{
            setIsLiked(false);
            toast.success('Song is deleted from your favorites!')
        }


    }else{
        const{error} = await supabaseClient.from('liked_songs').insert({
        user_id: user?.id,
        song_id:songId })

        if(error){
            toast.error(error.message);
        }else{
            setIsLiked(true)
            toast.success('Song is marked your favorite!')
        }

        
    }

    router.refresh()
}

const Icon = isLiked ? IoHeart   : IoHeartOutline 

    return <div className='px-4'>
      <button className='cursor-pointer hover:opacity-75 transition' onClick={handleClick}>
      <Icon size={34} color={isLiked ? '#7e2811' :'#fff'}/>
      </button>
    </div>
}
export default LikedButton;
