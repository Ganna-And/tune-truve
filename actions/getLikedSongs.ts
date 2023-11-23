import {Song}  from '../types.js'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Session } from 'inspector';
import { cookies } from 'next/headers.js';




export default async function getLikedSongs():Promise<Song[]> {
  const supabase = createServerComponentClient({
    cookies:cookies
  })

  
 const {data:{session}} = await supabase.auth.getSession()
  
 const {data:supabaseData, error:supabaseError} = await supabase.
 from('liked_songs').select('*, songs(*)').eq('user_id',session?.user?.id).order('created_at', {ascending:false})

if(supabaseError){
 console.log(supabaseError.message);
 return []
}

if(!supabaseData){
  return []
}
  return supabaseData.map((item)=>({...item.songs}))
}
