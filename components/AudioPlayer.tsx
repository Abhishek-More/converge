import { useRef, useState } from 'react';
import AudioPlayButton from './AudioPlayButton';

export default function AudioPlayer (props) {
    // reference
    const audioRef = useRef();

    /* https://blog.logrocket.com/building-audio-player-react/ */


    return (
      <div className="audio-player">
            <audio src={props.audioFile} ref={audioRef} loop volume={0.5} />
          <AudioPlayButton audioRef={audioRef} soundName={props.soundName} />
      </div>
    );
  };
  