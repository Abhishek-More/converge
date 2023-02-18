import { useRef, useState } from 'react';
import AudioPlayButton from './AudioPlayButton';

export default function AudioPlayer (props) {
    // reference
    const audioRef = useRef();
  
    console.log(audioRef);

    return (
      <div className="audio-player">
            <audio src={props.audioFile} ref={audioRef} loop />
          <AudioPlayButton audioRef={audioRef} soundName={props.soundName} />
      </div>
    );
  };
  