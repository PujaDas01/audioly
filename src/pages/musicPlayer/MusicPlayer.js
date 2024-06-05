import React, { useState, useRef } from 'react';
import './music-player.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = () => {
  const [playlist, setPlaylist] = useState([
    { name: 'Perfect', artist: 'Ed Sheeran', url: './audio/Ed Sheeran - Perfect.mp3' },
    { name: 'Photograph', artist: 'Ed Sheeran', url: './audio/Ed Sheeran - Photograph.mp3' },
    { name: 'Thinking out Loud', artist: 'Ed Sheeran', url: './audio/Ed Sheeran - Thinking out Loud.mp3' },
    { name: 'Unstoppable', artist: 'Sia', url: './audio/Sia - Unstoppable.mp3' },
    { name: 'Unstoppable', artist: 'Sia', url: './audio/Sia - Unstoppable.mp3' },
    { name: 'Unstoppable', artist: 'Sia', url: './audio/Sia - Unstoppable.mp3' },
    { name: 'Unstoppable', artist: 'Sia', url: './audio/Sia - Unstoppable.mp3' },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  const handleClickNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const handleClickPrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
  };

  const handleSongClick = (index) => {
    setCurrentSongIndex(index);
  };

  return (
    <div className='music-player'>
      <h1 className='title'>Audioly</h1>
      <ul className='playlist'>
        {playlist.map((song, index) => (
          <li
            key={index}
            className={`playlist-item ${index === currentSongIndex ? 'active' : ''}`}
            onClick={() => handleSongClick(index)}
          >
            <div>
              <p className="song-name">{song.name}</p>
              <p className="artist-name">{song.artist}</p>
            </div>
          </li>
        ))}
      </ul>
      <AudioPlayer
        className='custom-audio-player'
        ref={audioRef}
        autoPlay
        src={playlist[currentSongIndex].url}
        onEnded={handleClickNext}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  );
};

export default MusicPlayer;
