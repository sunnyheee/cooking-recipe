import React, { useEffect, useRef } from 'react';
import {useSelector} from "react-redux";

const AudioComponent = () => {
    const audio = document.querySelector("audio");
    const audioState = useSelector((state)=>state.audio.value);
    const audioVolume = useSelector((state)=>state.audio.volume);

    console.log(audioState);
    console.log(audioVolume);
    navigator.mediaDevices.getUserMedia({audio: true}).then(() => {
        AudioContext = window.AudioContext || window.webkitAudioContext;
        if(!audioState){
            return;
        }
        audio.volume=parseFloat(audioVolume);
        audio.play();
    }).catch(e => {
        console.error(`Audio permissions denied: ${e}`);
    });
  const audioRef = useRef(null);
  useEffect(() => {
      if(!audioState){
          audio.pause();
      }
  }, [audioState,audioVolume]);

  return (
    <audio ref={audioRef} controls loop style={{visibility:"hidden"}}>
      <source src="/music/backgroundMusicNoCopyRight.mp3" type="audio/mpeg"  />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioComponent;