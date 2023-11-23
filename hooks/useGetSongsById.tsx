import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import { Song } from '@/types';
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import React, { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';



const useGetSongsById =(id?:string)=> {
 
  const {supabaseClient} = useSessionContext();
  const [song, setSong] = useState<Song|undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false)
  
 useEffect(()=>{
  if (!id){
    return;
  }
  setIsLoading(true);

  const fetchData = async()=>{
    const {data, error} = await supabaseClient.from('songs').select('*').eq('id', id).single()

    if(error){
      setIsLoading(false)
      return toast.error(error.message);
    }

    setSong(data as Song);
    setIsLoading(false)
  }
  fetchData()
 }, [id, supabaseClient])

 return useMemo(()=>({
  isLoading,
  song
 }),[isLoading,song])

}

export default useGetSongsById;


