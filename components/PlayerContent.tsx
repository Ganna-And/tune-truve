import { Song } from "@/types";
import React, { useEffect, useState } from "react";
import MediaItem from "./MediaItem";
import {
  FaBackward,
  FaForward,
  FaPause,
  FaPlay,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import Slider from "./Slider";
import usePlayer from "@/hooks/usePlayer";
import useSound from "use-sound"


interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const player = usePlayer();

  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { sound, pause }] = useSound(songUrl, {
    volume: volume,
    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false);
      onNextSong();
    },
    onpause: () => 
      setIsPlaying(false),
    format: ["mp3"],
  });

  useEffect(() => {
    sound?.play()
    return ()=>{
        sound?.unload()
    }
  },[sound]);
  const handlePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  const Icon = isPlaying ? FaPause : FaPlay;
  const VolumeIcon = !volume ? FaVolumeMute : FaVolumeUp;

  const onNextSong = () => {
    if (player.ids.length === 0) {
      return;
    }
    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    if (!nextSong) {
      return player.setId(player.ids[0]);
    }

    player.setId(nextSong);
  };

  const onPrevSong = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const prevSong = player.ids[currentIndex - 1];

    if (!prevSong) {
      player.setId(player.ids[player.ids.length - 1]);
    }
    player.setId(prevSong);
  };

  return (
    <div className="flex items-center gap-x-2 justify-between">
      <div className="w-fit ml-2">
        <MediaItem song={song} onClick={() => {}} />
      </div>
      <div className=" hidden md:flex">
        <div className="flex gap-x-2 ">
          <FaBackward onClick={onPrevSong} size={26} />
          <Icon size={26} onClick={handlePlay} />
          <FaForward onClick={onNextSong} size={26} />
        </div>
      </div>
      <div className="flex-1 gap-x-2 md:hidden">
        <div className="flex">
          <Icon size={26} onClick={handlePlay}/>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <VolumeIcon size={30} onClick={toggleMute} />
        <Slider value={volume} onChange={(value) => setVolume(value)} />
      </div>
    </div>
  );
};
export default PlayerContent;
