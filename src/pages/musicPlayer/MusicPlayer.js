import React, { useState, useRef, useEffect } from 'react';
import './music-player.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FaSearch, FaArrowLeft, FaHeart, FaMusic } from 'react-icons/fa';

const MusicPlayer = () => {

  const initialPlaylist = [
    { id: 1, name: 'Love Me Like You Do', artist: 'Ellie Goulding', url: './audio/Ellie Goulding - Love Me Like You Do.mp3' },
    { id: 2, name: 'Without Me', artist: 'Halsey', url: './audio/Halsey - Without Me.mp3' },
    { id: 3, name: 'Changes', artist: 'XXXTENTACION', url: './audio/XXXTENTACION - Changes.mp3' },
    { id: 4, name: 'Dusk Till Dawn', artist: 'ZAYN & Sia', url: './audio/ZAYN & Sia - Dusk Till Dawn.mp3' },
    { id: 5, name: 'Nothing\'s Gonna Change My Love For You (Male Version)', artist: 'Westlife', url: './audio/Westlife - Nothing\'s Gonna Change My Love For You (Male Version).mp3' },
    { id: 6, name: 'Lover', artist: 'Taylor Swift', url: './audio/Taylor Swift - Lover.mp3' },
    { id: 7, name: 'I\'ll Be Waiting For You', artist: 'Gavy NJ', url: './audio/Gavy NJ - I\'ll Be Waiting For You.mp3' },
    { id: 8, name: 'You Are The Reason', artist: 'Calum Scott', url: './audio/Calum Scott - You Are The Reason.mp3' },
    { id: 9, name: 'Love The Way You Lie (Guitar Version)', artist: 'Jon Dretto', url: './audio/Jon Dretto - Love The Way You Lie (Guitar Version).mp3' },
    { id: 10, name: 'Nothing\'s Gonna Change My Love For You (Female Version)', artist: 'Shania Yan', url: './audio/Shania Yan - Nothing\'s Gonna Change My Love For You (Female Version).mp3' },
    { id: 11, name: 'Who Says', artist: 'Selena Gomez', url: './audio/Selena Gomez - Who Says.mp3' },
    { id: 12, name: 'Hold On', artist: 'Chord Overstreet', url: './audio/Chord Overstreet - Hold On.mp3' },
    { id: 13, name: 'All of Me', artist: 'John Legend ', url: './audio/John Legend - All of Me.mp3' },
    { id: 14, name: 'Baby', artist: 'Justin Bieber', url: './audio/Justin Bieber - Baby.mp3' },
    { id: 15, name: 'Best of Me', artist: 'Neffex', url: './audio/Neffex - Best of Me.mp3' },
    { id: 16, name: 'Dandelions', artist: 'Ruth B.', url: './audio/Ruth B. - Dandelions.mp3' },
    { id: 17, name: 'Lovely', artist: 'Billie Eilish', url: './audio/Billie Eilish - Lovely.mp3' },
    { id: 18, name: 'Perfect', artist: 'Ed Sheeran', url: './audio/Ed Sheeran - Perfect.mp3' },
    { id: 19, name: 'Photograph', artist: 'Ed Sheeran', url: './audio/Ed Sheeran - Photograph.mp3' },
    { id: 20, name: 'Unstoppable', artist: 'Sia', url: './audio/Sia - Unstoppable.mp3' },
    { id: 21, name: 'Thinking out Loud', artist: 'Ed Sheeran', url: './audio/Ed Sheeran - Thinking out Loud.mp3' },
    { id: 22, name: 'All I Want', artist: 'Alexandra Porat', url: './audio/All I Want - Kodaline cover by Alexandra Porat.mp3' },
    { id: 23, name: 'Not Your Barbie Girl', artist: 'Ava Max', url: './audio/Ava Max - Not Your Barbie Girl.mp3' },
    { id: 24, name: 'Love The Way You Lie 1, 2 & 3', artist: 'Eminem, Rihanna & Skylar Grey', url: './audio/Eminem, Rihanna & Skylar Grey - Love The Way You Lie 1, 2 & 3.mp3' },
    { id: 25, name: 'Happier x Perfect (Mashup)', artist: 'Ed Sheeran, Olivia Rodrigo', url: './audio/Happier x Perfect _ Ed Sheeran, Olivia Rodrigo (Mashup).mp3' },
    { id: 26, name: 'A Thousand Years', artist: 'Christina Perri', url: './audio/Christina Perri - A Thousand Years.mp3' },
    { id: 27, name: 'I Belong to You', artist: 'Jacob Lee', url: './audio/I Belong to You - Jacob Lee.mp3' },
    { id: 28, name: 'I Wanna Grow Old With You', artist: 'Westlife', url: './audio/I Wanna Grow Old With You - Westlife.mp3' },
    { id: 29, name: 'Love Story', artist: 'Taylor Swift', url: './audio/Love Story - Taylor Swift.mp3' },
    { id: 30, name: 'Happier', artist: 'Olivia Rodrigo', url: './audio/Olivia Rodrigo - Happier.mp3' },
    { id: 31, name: 'Memories', artist: 'Maroon 5', url: './audio/Maroon 5 - Memories.mp3' },
    { id: 32, name: 'See You Again', artist: 'Charlie Puth _ Christina Perri, Ellie Goulding', url: './audio/See You Again - Charlie Puth _ Christina Perri, Ellie Goulding (Mix).mp3' },
    { id: 33, name: 'Until I Found You', artist: 'Stephen Sanchez', url: './audio/Stephen Sanchez - Until I Found You.mp3' },
    { id: 34, name: 'My Heart Will Go On', artist: 'Celine Dion', url: './audio/Celine Dion - My Heart Will Go On.mp3' },
    { id: 35, name: 'Who Am I to Stand in Your Way', artist: 'Chester See', url: './audio/Chester See - Who Am I to Stand in Your Way.mp3' },
  ];
  
    const [playlist, setPlaylist] = useState(() => initialPlaylist.sort((a, b) => a.name.localeCompare(b.name)));
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [favorites, setFavorites] = useState(() => {
      const storedFavorites = localStorage.getItem('favorites');
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    });
    const [showFavorites, setShowFavorites] = useState(false);
    const audioRef = useRef(null);
    const searchInputRef = useRef(null);
    const [playedFromAllSongs, setPlayedFromAllSongs] = useState(true);
  
    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
  
    useEffect(() => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.audio.current.pause();
      }
    }, [currentSongIndex, isPlaying]);
  
    useEffect(() => {
      if (isSearching && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, [isSearching]);
  
    const handleClickNext = () => {
      const currentPlaylist = playedFromAllSongs ? playlist : playlist.filter(song => favorites.includes(song.id));
      if (currentPlaylist.length === 0) return;
  
      if (playedFromAllSongs) {
        setCurrentSongIndex(prevIndex => (prevIndex + 1) % playlist.length);
      } else {
        const currentIndexInFavorites = currentPlaylist.findIndex(song => song.id === playlist[currentSongIndex].id);
        const nextIndexInFavorites = (currentIndexInFavorites + 1) % currentPlaylist.length;
        const nextSongId = currentPlaylist[nextIndexInFavorites].id;
        const nextSongIndex = playlist.findIndex(song => song.id === nextSongId);
        setCurrentSongIndex(nextSongIndex);
      }
      setIsPlaying(true);
    };
  
    const handleClickPrevious = () => {
      const currentPlaylist = playedFromAllSongs ? playlist : playlist.filter(song => favorites.includes(song.id));
      if (currentPlaylist.length === 0) return;
  
      if (playedFromAllSongs) {
        setCurrentSongIndex(prevIndex => (prevIndex - 1 + playlist.length) % playlist.length);
      } else {
        const currentIndexInFavorites = currentPlaylist.findIndex(song => song.id === playlist[currentSongIndex].id);
        const prevIndexInFavorites = (currentIndexInFavorites - 1 + currentPlaylist.length) % currentPlaylist.length;
        const prevSongId = currentPlaylist[prevIndexInFavorites].id;
        const prevSongIndex = playlist.findIndex(song => song.id === prevSongId);
        setCurrentSongIndex(prevSongIndex);
      }
      setIsPlaying(true);
    };
  
    const handleSongClick = (index) => {
      const actualIndex = playlist.findIndex(song => song.id === displayedPlaylist[index].id);
      setCurrentSongIndex(actualIndex);
      setIsPlaying(true);
      setPlayedFromAllSongs(!showFavorites);
      if (audioRef.current) {
        audioRef.current.audio.current.play().catch(error => {
          console.error('Failed to play the audio:', error);
        });
      }
      setIsSearching(false);
    };
  
    const handleSearchClick = () => {
      setIsSearching(!isSearching);
      setSearchQuery('');
    };
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleFavoriteClick = (song) => {
      setFavorites((prevFavorites) =>
        prevFavorites.includes(song.id)
          ? prevFavorites.filter((id) => id !== song.id)
          : [...prevFavorites, song.id]
      );
    };
  
    const filteredPlaylist = playlist.filter(song =>
      song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const displayedPlaylist = isSearching
      ? (showFavorites
        ? playlist.filter(song => favorites.includes(song.id)).filter(song =>
            song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : filteredPlaylist)
      : (showFavorites
        ? playlist.filter(song => favorites.includes(song.id))
        : playlist);
  
    useEffect(() => {
      let touchstartX = 0;
      let touchendX = 0;
  
      const handleGesture = () => {
        if (touchendX < touchstartX - 50) {
          setShowFavorites(true);
        }
        if (touchendX > touchstartX + 50) {
          setShowFavorites(false);
        }
      };
  
      const handleTouchStart = (e) => {
        touchstartX = e.changedTouches[0].screenX;
      };
  
      const handleTouchEnd = (e) => {
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
      };
  
      document.addEventListener('touchstart', handleTouchStart, false);
      document.addEventListener('touchend', handleTouchEnd, false);
  
      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }, []);
  
    return (
      <div className='music-player'>
        <div className='header'>
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
                ref={searchInputRef}
              />
            )}
          </div>
        </div>
        {!isSearching && (
          <div className='playlist-title'>
            <span
              className={`tab ${!showFavorites ? 'active' : ''}`}
              onClick={() => setShowFavorites(false)}
            >
              All Songs
            </span>
            <span
              className={`tab ${showFavorites ? 'active' : ''}`}
              onClick={() => setShowFavorites(true)}
            >
              Favorite Songs
            </span>
          </div>
        )}
        <div className='sliding-content'>
          <div className='sliding-content-inner' style={{ transform: showFavorites ? 'translateX(-100%)' : 'translateX(0)' }}>
            <div className='sliding-section'>
              {displayedPlaylist.length === 0 ? (
                <div className='no-results'>
                  <FaMusic className='music-icon' />
                  <p>No Songs Found</p>
                </div>
              ) : (
                <ul className='playlist'>
                  {displayedPlaylist.map((song, index) => (
                    <li
                      key={song.id}
                      className={`playlist-item ${playlist[currentSongIndex]?.id === song.id ? 'active' : ''}`}
                      onClick={() => handleSongClick(index)}
                    >
                      <div className='song-info'>
                        <span className='song-name'>{song.name}</span>
                        <span className='artist-name'>{song.artist}</span>
                      </div>
                      <FaHeart
                        className={`favorite-icon ${favorites.includes(song.id) ? 'favorite' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFavoriteClick(song);
                        }}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className='sliding-section'>
              {displayedPlaylist.length === 0 ? (
                <div className='no-results'>
                  <FaMusic className='music-icon' />
                  <p>No Favorite Songs Found</p>
                </div>
              ) : (
                <ul className='playlist'>
                  {displayedPlaylist.map((song, index) => (
                    <li
                      key={song.id}
                      className={`playlist-item ${playlist[currentSongIndex]?.id === song.id ? 'active' : ''}`}
                      onClick={() => handleSongClick(index)}
                    >
                      <div className='song-info'>
                        <span className='song-name'>{song.name}</span>
                        <span className='artist-name'>{song.artist}</span>
                      </div>
                      <FaHeart
                        className={`favorite-icon ${favorites.includes(song.id) ? 'favorite' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFavoriteClick(song);
                        }}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <AudioPlayer
          ref={audioRef}
          className='custom-audio-player'
          autoPlay={false}
          src={playlist[currentSongIndex]?.url}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleClickNext}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPrevious}
          showSkipControls
          showJumpControls={false}
        />
        <div className='current-song'>
          <p className='current-song-text'>
            {playlist[currentSongIndex]?.name} - {playlist[currentSongIndex]?.artist}
          </p>
        </div>
      </div>
    );
  };
  
  export default MusicPlayer;
  