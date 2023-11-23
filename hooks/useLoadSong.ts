import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";


const useLoadSong = (song:Song)=>{

    const supabase = useSupabaseClient();

    if(!song){
return ""
    }

    const{data:sbData} = supabase.storage.from('songs').getPublicUrl(song.song_path);

    return sbData.publicUrl
}

export default useLoadSong;