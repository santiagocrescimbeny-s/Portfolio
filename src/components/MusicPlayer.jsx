import React, { useState, useRef } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time) => {
    if (!time) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        src="/music/your-song.mp3"
      />
      
      <button 
        onClick={togglePlay}
        className={`play-button ${isPlaying ? 'playing' : ''}`}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      
      <div className="player-info">
        <div className="time">{formatTime(currentTime)}</div>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
          className="progress-bar"
        />
        <div className="time">{formatTime(duration)}</div>
      </div>
    </div>
  );
}

// Estilos CSS
const styles = `
  .music-player {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 400px;
    color: white;
  }

  .play-button {
    background: rgba(255, 255, 255, 0.3);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play-button:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  .player-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
  }

  .progress-bar {
    flex: 1;
    height: 4px;
    border-radius: 2px;
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    background: rgba(255, 255, 255, 0.3);
  }

  .progress-bar::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }

  .progress-bar::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    border: none;
  }

  .time {
    font-size: 0.8rem;
    min-width: 40px;
  }
`;
