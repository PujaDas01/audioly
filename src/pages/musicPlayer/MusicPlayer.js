// const [playlist, setPlaylist] = useState([
//   { name: 'Love Me Like You Do', artist: 'Ellie Goulding', url: './audio/Ellie Goulding - Love Me Like You Do.mp3' },
//   { name: 'Without Me', artist: 'Halsey', url: './audio/Halsey - Without Me.mp3' },
//   { name: 'Changes', artist: 'XXXTENTACION', url: './audio/XXXTENTACION - Changes.mp3' },
//   { name: 'Dusk Till Dawn', artist: 'ZAYN & Sia', url: './audio/ZAYN & Sia - Dusk Till Dawn.mp3' },
//   { name: 'Nothing\'s Gonna Change My Love For You (Male Version)', artist: 'Westlife', url: './audio/Westlife - Nothing\'s Gonna Change My Love For You (Male Version).mp3' },
//   { name: 'Lover', artist: 'Taylor Swift', url: './audio/Taylor Swift - Lover.mp3' },
//   { name: 'I\'ll Be Waiting For You', artist: 'Gavy NJ', url: './audio/Gavy NJ - I\'ll Be Waiting For You.mp3' },
//   { name: 'You Are The Reason', artist: 'Calum Scott', url: './audio/Calum Scott - You Are The Reason.mp3' },
//   { name: 'Love The Way You Lie (Guitar Version)', artist: 'Jon Dretto', url: './audio/Jon Dretto - Love The Way You Lie (Guitar Version).mp3' },
//   { name: 'Nothing\'s Gonna Change My Love For You (Female Version)', artist: 'Shania Yan', url: './audio/Shania Yan - Nothing\'s Gonna Change My Love For You (Female Version).mp3' },
//   { name: 'Who Says', artist: 'Selena Gomez', url: './audio/Selena Gomez - Who Says.mp3' },
//   { name: 'Hold On', artist: 'Chord Overstreet', url: './audio/Chord Overstreet - Hold On.mp3' },
//   { name: 'All of Me', artist: 'John Legend ', url: './audio/John Legend - All of Me.mp3' },
//   { name: 'Baby', artist: 'Justin Bieber', url: './audio/Justin Bieber - Baby.mp3' },
//   { name: 'Best of Me', artist: 'Neffex', url: './audio/Neffex - Best of Me.mp3' },
//   { name: 'Dandelions', artist: 'Ruth B.', url: './audio/Ruth B. - Dandelions.mp3' },
//   { name: 'Lovely', artist: 'Billie Eilish', url: './audio/Billie Eilish - Lovely.mp3' },
//   { name: 'Perfect', artist: 'Ed Sheeran', url: './audio/Ed Sheeran - Perfect.mp3' },
//   { name: 'Photograph', artist: 'Ed Sheeran', url: './audio/Ed Sheeran - Photograph.mp3' },
//   { name: 'Unstoppable', artist: 'Sia', url: './audio/Sia - Unstoppable.mp3' },
//   { name: 'Thinking out Loud', artist: 'Ed Sheeran', url: './audio/Ed Sheeran - Thinking out Loud.mp3' },
//   { name: 'All I Want', artist: 'Alexandra Porat', url: './audio/All I Want - Kodaline cover by Alexandra Porat.mp3' },
//   { name: 'Not Your Barbie Girl', artist: 'Ava Max', url: './audio/Ava Max - Not Your Barbie Girl.mp3' },
//   { name: 'Love The Way You Lie 1, 2 & 3', artist: 'Eminem, Rihanna & Skylar Grey', url: './audio/Eminem, Rihanna & Skylar Grey - Love The Way You Lie 1, 2 & 3.mp3' },
//   { name: 'Happier x Perfect (Mashup)', artist: 'Ed Sheeran, Olivia Rodrigo', url: './audio/Happier x Perfect _ Ed Sheeran, Olivia Rodrigo (Mashup).mp3' },
//   { name: 'A Thousand Years', artist: 'Christina Perri', url: './audio/Christina Perri - A Thousand Years.mp3' },
//   { name: 'I Belong to You', artist: 'Jacob Lee', url: './audio/I Belong to You - Jacob Lee.mp3' },
//   { name: 'I Wanna Grow Old With You', artist: 'Westlife', url: './audio/I Wanna Grow Old With You - Westlife.mp3' },
//   { name: 'Love Story', artist: 'Taylor Swift', url: './audio/Love Story - Taylor Swift.mp3' },
//   { name: 'Happier', artist: 'Olivia Rodrigo', url: './audio/Olivia Rodrigo - Happier.mp3' },
//   { name: 'Memories', artist: 'Maroon 5', url: './audio/Maroon 5 - Memories.mp3' },
//   { name: 'See You Again', artist: 'Charlie Puth _ Christina Perri, Ellie Goulding', url: './audio/See You Again - Charlie Puth _ Christina Perri, Ellie Goulding (Mix).mp3' },
//   { name: 'Until I Found You', artist: 'Stephen Sanchez', url: './audio/Stephen Sanchez - Until I Found You.mp3' },
//   { name: 'My Heart Will Go On', artist: 'Celine Dion', url: './audio/Celine Dion - My Heart Will Go On.mp3' },
//   { name: 'Who Am I to Stand in Your Way', artist: 'Chester See', url: './audio/Chester See - Who Am I to Stand in Your Way.mp3' },
// ]);

import React, { useState, useRef, useEffect } from 'react';
import './music-player.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';

const MusicPlayer = () => {

const [playlist, setPlaylist] = useState([
  { name: 'Love Me Like You Do', artist: 'Ellie Goulding', url: './audio/Ellie Goulding - Love Me Like You Do.mp3' },
  { name: 'Without Me', artist: 'Halsey', url: './audio/Halsey - Without Me.mp3' },
  { name: 'Changes', artist: 'XXXTENTACION', url: './audio/XXXTENTACION - Changes.mp3' },
  { name: 'Dusk Till Dawn', artist: 'ZAYN & Sia', url: './audio/ZAYN & Sia - Dusk Till Dawn.mp3' },
  { name: 'Lover', artist: 'Taylor Swift', url: './audio/Taylor Swift - Lover.mp3' },
  { name: 'I\'ll Be Waiting For You', artist: 'Gavy NJ', url: './audio/Gavy NJ - I\'ll Be Waiting For You.mp3' },
  { name: 'You Are The Reason', artist: 'Calum Scott', url: './audio/Calum Scott - You Are The Reason.mp3' },
  { name: 'Love The Way You Lie (Guitar Version)', artist: 'Jon Dretto', url: './audio/Jon Dretto - Love The Way You Lie (Guitar Version).mp3' },
  { name: 'Nothing\'s Gonna Change My Love For You (Male Version)', artist: 'Westlife', url: './audio/Westlife - Nothing\'s Gonna Change My Love For You (Male Version).mp3' },
  { name: 'Nothing\'s Gonna Change My Love For You (Female Version)', artist: 'Shania Yan', url: './audio/Shania Yan - Nothing\'s Gonna Change My Love For You (Female Version).mp3' },
  { name: 'Who Says', artist: 'Selena Gomez', url: './audio/Selena Gomez - Who Says.mp3' },
  { name: 'Hold On', artist: 'Chord Overstreet', url: './audio/Chord Overstreet - Hold On.mp3' },
  { name: 'All of Me', artist: 'John Legend ', url: './audio/John Legend - All of Me.mp3' },
  { name: 'Baby', artist: 'Justin Bieber', url: './audio/Justin Bieber - Baby.mp3' },
  { name: 'Best of Me', artist: 'Neffex', url: './audio/Neffex - Best of Me.mp3' },
  { name: 'Dandelions', artist: 'Ruth B.', url: './audio/Ruth B. - Dandelions.mp3' },
  { name: 'Lovely', artist: 'Billie Eilish', url: './audio/Billie Eilish - Lovely.mp3' },
  { name: 'Perfect', artist: 'Ed Sheeran', url: './audio/Ed Sheeran - Perfect.mp3' },
  { name: 'Photograph', artist: 'Ed Sheeran', url: './audio/Ed Sheeran - Photograph.mp3' },
  { name: 'Unstoppable', artist: 'Sia', url: './audio/Sia - Unstoppable.mp3' },
  { name: 'Thinking out Loud', artist: 'Ed Sheeran', url: './audio/Ed Sheeran - Thinking out Loud.mp3' },
  { name: 'All I Want', artist: 'Alexandra Porat', url: './audio/All I Want - Kodaline cover by Alexandra Porat.mp3' },
  { name: 'Not Your Barbie Girl', artist: 'Ava Max', url: './audio/Ava Max - Not Your Barbie Girl.mp3' },
  { name: 'Love The Way You Lie 1, 2 & 3', artist: 'Eminem, Rihanna & Skylar Grey', url: './audio/Eminem, Rihanna & Skylar Grey - Love The Way You Lie 1, 2 & 3.mp3' },
  { name: 'Happier x Perfect (Mashup)', artist: 'Ed Sheeran, Olivia Rodrigo', url: './audio/Happier x Perfect _ Ed Sheeran, Olivia Rodrigo (Mashup).mp3' },
  { name: 'A Thousand Years', artist: 'Christina Perri', url: './audio/Christina Perri - A Thousand Years.mp3' },
  { name: 'I Belong to You', artist: 'Jacob Lee', url: './audio/I Belong to You - Jacob Lee.mp3' },
  { name: 'I Wanna Grow Old With You', artist: 'Westlife', url: './audio/I Wanna Grow Old With You - Westlife.mp3' },
  { name: 'Love Story', artist: 'Taylor Swift', url: './audio/Love Story - Taylor Swift.mp3' },
  { name: 'Happier', artist: 'Olivia Rodrigo', url: './audio/Olivia Rodrigo - Happier.mp3' },
  { name: 'Memories', artist: 'Maroon 5', url: './audio/Maroon 5 - Memories.mp3' },
  { name: 'See You Again', artist: 'Charlie Puth _ Christina Perri, Ellie Goulding', url: './audio/See You Again - Charlie Puth _ Christina Perri, Ellie Goulding (Mix).mp3' },
  { name: 'Until I Found You', artist: 'Stephen Sanchez', url: './audio/Stephen Sanchez - Until I Found You.mp3' },
  { name: 'My Heart Will Go On', artist: 'Celine Dion', url: './audio/Celine Dion - My Heart Will Go On.mp3' },
  { name: 'Who Am I to Stand in Your Way', artist: 'Chester See', url: './audio/Chester See - Who Am I to Stand in Your Way.mp3' },
]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const sortedPlaylist = [...playlist].sort((a, b) => a.name.localeCompare(b.name));
    setPlaylist(sortedPlaylist);
  }, []);

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
    if (audioRef.current) {
      audioRef.current.audio.current.pause();
      audioRef.current.audio.current.load();
      audioRef.current.audio.current.addEventListener('canplaythrough', () => {
        audioRef.current.audio.current.play().catch(error => {
          console.error('Failed to play the audio:', error);
        });
      });
    }
  };

  const handleSearchClick = () => {
    setIsSearching(!isSearching);
    setSearchQuery('');
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPlaylist = playlist.filter(song =>
    song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='music-player'>
      <header className='header'>
        <h1 className='title'>Audioly</h1>
        <div className='search-container'>
          {isSearching ? (
            <FaArrowLeft className='search-icon' onClick={handleSearchClick} />
          ) : (
            <FaSearch className='search-icon' onClick={handleSearchClick} />
          )}
          {isSearching && (
            <input
              type='text'
              className='search-input'
              placeholder='Search songs...'
              value={searchQuery}
              onChange={handleSearchChange}
            />
          )}
        </div>
      </header>
      <h2 className='playlist-title'>All Songs</h2>
      <ul className='playlist'>
        {filteredPlaylist.map((song, index) => (
          <li
            key={index}
            className={`playlist-item ${index === currentSongIndex ? 'active' : ''}`}
            onClick={() => handleSongClick(playlist.indexOf(song))}
          >
            <div>
              <p className="song-name">{song.name.length > 20 && window.innerWidth < 768 ? song.name.substring(0, 20) + "..." : song.name}</p>
              <p className="artist-name">{song.artist}</p>
            </div>
          </li>
        ))}
      </ul>
      <AudioPlayer
        className='custom-audio-player'
        ref={audioRef}
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
