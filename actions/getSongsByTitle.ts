import {Song}  from '../types.js'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers.js';
import getSongs from './getSongs';





export default async function getSongsByTitle(title:string):Promise<Song[]> {
  const supabase = createServerComponentClient({
    cookies:cookies
  })

  if(!title){
const allSongs = await getSongs()
return allSongs
  }
 
 
 const {data, error} = await supabase.
 from('songs').select('*').ilike('title',`%${title}%`).order('created_at', {ascending:true})

if(error){
 console.log(error)
}
  return (data as any ) || []
}
