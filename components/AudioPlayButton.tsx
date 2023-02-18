import { useState, useEffect } from 'react';

export default function AudioPlayButton (props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  
  useEffect(() => {
    if (isPlaying) {
      props.audioRef.current.play();
    } else {
        props.audioRef.current.pause();
    }
  }, [isPlaying, props.audioRef]);

  return (
    <div className="controls">
        <button onClick={togglePlayPause} className={"border-4 border-1first rounded-md p-1 m-3 transition duration-500 " + (isPlaying ? "bg-1first text-white hover:bg-blue-600 " : "hover:bg-blue-200 ")}>
            {props.soundName}
        </button>
    </div>
  );
};




