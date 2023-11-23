import {Song}  from '../types.js'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers.js';




export default async function getSongs():Promise<Song[]> {
  const supabase = createServerComponentClient({
    cookies:cookies
  })
  
 const {data, error} = await supabase.
 from('songs').select('*').order('created_at', {ascending:true})

if(error){
 console.log(error)
}
  return (data as any ) || []
}
