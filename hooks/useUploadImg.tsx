import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";



export default  function useUploadImg( song: Song) {
  const supabase = useSupabaseClient();

  if(!song){
    return null
  }
  const{data:imageData} =  supabase.storage.from('images').getPublicUrl(song.image_path);

  return imageData.publicUrl
}
