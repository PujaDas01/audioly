import React, { useState } from 'react';
import './music-player.css';

const MusicPlayer = () => {

  const [playlist, setPlaylist] = useState([
    {name: 'Song 1', url: './audio/song1.mp3'},
    {name: 'Song 2', url: './audio/song2.mp3'},
    {name: 'Song 3', url: './audio/song3.mp3'},
  ]); 
  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (song) => {
    setCurrentSong(song.url);
  }

  return (
    <div className='music-player'>
      <h1 className='title'>Modern Music Player</h1>
      <ul className='playlist'>
        {
          playlist.map((song, index) => {
            <li
              key={index}
              className='playlist-item'
              onClick={() => playSong(song)}
            >
              {song.name}
            </li>
          })
        }
      </ul>
      {currentSong && (
        <audio controls autoPlay className='audio'>
          <source src={currentSong} type='audio/mp3' />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default MusicPlayer;
