import React, { useEffect, useRef } from 'react';
import {useSelector} from "react-redux";

const AudioComponent = () => {
  const audioRef = useRef(null);
  const audioState = useSelector((state) => state.audio.value);
  const audioVolume = useSelector((state) => state.audio.volume);

  console.log(audioState);
  console.log(audioVolume);

  useEffect(() => {
      navigator.mediaDevices.getUserMedia({audio: true}).then(() => {
          if (audioRef.current && audioState) {
              audioRef.current.volume = parseFloat(audioVolume);
              audioRef.current.play();
          }
      }).catch(e => {
          console.error(`Audio permissions denied: ${e}`);
      });
  }, [audioState, audioVolume]);

  useEffect(() => {
      if (audioRef.current && !audioState) {
          audioRef.current.pause();
      }
  }, [audioState]);


  return (
    <audio ref={audioRef} controls loop style={{visibility:"hidden"}}>
      <source src="/music/backgroundMusicNoCopyRight.mp3" type="audio/mpeg"  />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioComponent;