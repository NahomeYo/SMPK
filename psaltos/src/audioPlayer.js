import React, { useState } from "react";
import WavesurferPlayer from '@wavesurfer/react';
import "./App.css";
import "./animation.css";

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [wavesurfer, setWavesurfer] = useState(null);

  const onReady = (ws) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  const previousSong = () => (
    <svg width="21" height="21" viewBox="0 0 21 21" onClick={() => wavesurfer?.setTime(0)}>
      <path d="M4.96665 10.5796L20.8 2.03033V19.1288L4.96665 10.5796Z" />
      <path d="M0.799988 0.707764H4.96665V20.7078H0.799988V0.707764Z" />
    </svg>
  );

  const playButton = () => (
    <svg width="51" height="51" viewBox="0 0 51 51">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3223 50.6159C39.2399 50.6159 50.5223 39.3335 50.5223 25.4159C50.5223 11.4984 39.2399 0.215942 25.3223 0.215942C11.4048 0.215942 0.122345 11.4984 0.122345 25.4159C0.122345 39.3335 11.4048 50.6159 25.3223 50.6159ZM15.4223 42.0034L45.1223 25.1159L15.4223 8.22845V42.0034Z" fill="#B5CBD5" />
    </svg>
  );

  const pauseButton = () => (
    <svg width="65" height="65" viewBox="0 0 65 65">
      <path fillRule="evenodd" clipRule="evenodd" d="M32.6913 65.0001C50.4939 65.0001 64.9257 50.5683 64.9257 32.7657C64.9257 14.9632 50.4939 0.531433 32.6913 0.531433C14.8888 0.531433 0.457031 14.9632 0.457031 32.7657C0.457031 50.5683 14.8888 65.0001 32.6913 65.0001ZM22.6092 15.0596H28.8572V50.1692H22.6092V15.0596ZM36.5253 15.0596H42.7733V50.1692H36.5253V15.0596Z" fill="#EDF2F5" />
    </svg>
  );

  return (
    <div style={{ width: "100%", height: "120px" }}>
      <WavesurferPlayer
        height={100}
        barWidth={4}
        barRadius={50}
        waveColor="var(--fifthly)"
        progressColor="var(--primary)"
        url={audioSrc}
        onReady={onReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <ul style={{ listStyle: "none", display: "flex", gap: "1rem", alignItems: "center" }}>
        <li>{previousSong()}</li>
        <li onClick={onPlayPause}>{isPlaying ? pauseButton() : playButton()}</li>
      </ul>
    </div>
  );
};

export default AudioPlayer;
