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
    { id: 36, name: 'Somebody\'s Me', artist: 'Enrique', url: './audio/Enrique - Somebody\'s Me.mp3' },
    { id: 37, name: 'Tell Me That You Love Me', artist: 'James Smith', url: './audio/James Smith - Tell Me That You Love Me.mp3' },
    { id: 38, name: 'You Broke Me First', artist: 'Tate McRae', url: './audio/Tate McRae - You Broke Me First.mp3' },
    { id: 39, name: 'Cheap Thrills', artist: 'Sia', url: './audio/Sia - Cheap Thrills.mp3' },
    { id: 40, name: 'Melt The Snow', artist: 'Shayne Ward', url: './audio/Shayne Ward - Melt The Snow.mp3' },
    { id: 41, name: 'Hips Don\'t Lie', artist: 'Shakira', url: './audio/Shakira - Hips Don\'t Lie.mp3' },
    { id: 42, name: 'At My Worst', artist: 'Pink Sweat', url: './audio/Pink Sweat - At My Worst.mp3' },
    { id: 43, name: 'I Can\'t Hate You', artist: 'Kayou.', url: './audio/Kayou. - I Can\'t Hate You.mp3' },
    { id: 44, name: 'Despacito', artist: 'Justin Bieber', url: './audio/Justin Bieber - Despacito.mp3' },
    { id: 45, name: 'Just Missing You', artist: 'Emma Heesters', url: './audio/Emma Heesters - Just Missing You.mp3' },
    { id: 46, name: 'Hero', artist: 'Enrique Iglesias', url: './audio/Enrique Iglesias - Hero.mp3' },
    { id: 47, name: 'Bruises', artist: 'Lewis Capaldi', url: './audio/Lewis Capaldi - Bruises.mp3' },
    { id: 48, name: 'Heartbreak Anniversary', artist: 'Giveon', url: './audio/Giveon - Heartbreak Anniversary.mp3' },
    { id: 49, name: 'You Look So Broken When You Cry', artist: 'Glass Animals', url: './audio/Glass Animals - You Look So Broken When You Cry.mp3' },
    { id: 50, name: 'Why Not Me', artist: 'Enrique Iglesias', url: './audio/Enrique Iglesias - Why Not Me.mp3' },
    { id: 51, name: 'Tonight', artist: 'FM Static', url: './audio/FM Static - Tonight.mp3' },
    { id: 52, name: 'Believer', artist: 'Imagine Dragons', url: './audio/Imagine Dragons - Believer.mp3' },
    { id: 53, name: 'Addicted', artist: 'Enrique Iglesias', url: './audio/Enrique Iglesias - Addicted.mp3' },
    { id: 54, name: 'Count On Me', artist: 'Bruno Mars', url: './audio/Bruno Mars - Count On Me.mp3' },
    { id: 55, name: 'Lifeline', artist: 'Alica Keys', url: './audio/Alica Keys - Lifeline.mp3' },
    { id: 56, name: 'I Will Be Loving You', artist: 'Chester See', url: './audio/Chester See - I Will Be Loving You.mp3' },
    { id: 57, name: 'Finding Hope - Without You', artist: 'Ashton Davula', url: './audio/Ashton Davula - Finding Hope - Without You.mp3' },
    { id: 58, name: 'Finding Hope - 3:00 AM', artist: 'Ashton Davula', url: './audio/Ashton Davila - Finding Hope - 3 AM.mp3' },
    { id: 59, name: 'Finding Hope - Love', artist: 'Ashton Davula', url: './audio/Ashton Davula - Finding Hope - Love.mp3' },
    { id: 60, name: 'Just The Way You Are', artist: 'Bruno Mars', url: './audio/Bruno Mars - Just The Way You Are.mp3' },
    { id: 61, name: 'Perfect Two', artist: 'Auburn', url: './audio/Auburn - Perfect Two.mp3' },
    { id: 62, name: 'What If I Told You That I Love You', artist: 'Ali Gatie', url: './audio/Ali Gatie - What If I Told You That I Love You.mp3' },
    { id: 63, name: 'Faded', artist: 'Alan Walker', url: './audio/Alan Walker - Faded.mp3' },
    { id: 64, name: 'I\'ll Never Break Your Heart', artist: 'Backstreet Boys', url: './audio/Backstreet Boys - I\'ll Never Break Your Heart.mp3' },
    { id: 65, name: 'Everything I Wanted', artist: 'Billie Eilish', url: './audio/Billie Eilish - Everything I Wanted.mp3' },
    { id: 66, name: 'By My Side', artist: 'INXS', url: './audio/INXS - By My Side.mp3' },
  ];
  
    const playlist = initialPlaylist.sort((a, b) => a.name.localeCompare(b.name));
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
    const [isPlayAfterSrcChange, setIsPlayAfterSrcChange] = useState(false);
  
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
      if (isPlaying) {
        setIsPlayAfterSrcChange(true);
      } else {
        setIsPlayAfterSrcChange(false);
      }
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
      if (isPlaying) {
        setIsPlayAfterSrcChange(true);
      } else {
        setIsPlayAfterSrcChange(false);
      }
    };

    const handleSongEnd = () => {
      handleClickNext();
      setIsPlaying(true)
      setIsPlayAfterSrcChange(true);
    };

    const handleSongClick = (index) => {
      const actualIndex = playlist.findIndex(song => song.id === displayedPlaylist[index].id);
      if (currentSongIndex === actualIndex && isPlaying) {
        audioRef.current.audio.current.currentTime = 0;
      } else {
        setCurrentSongIndex(actualIndex);
        setIsPlaying(true);
        setPlayedFromAllSongs(!showFavorites);
      }
      if (audioRef.current && !isPlaying) {
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
  
      const playlistHeight = isSearching ? 'calc(100vh - 251px)' : 'calc(100vh - 291px)';

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
                <ul className='playlist' style={{ maxHeight: playlistHeight }}>
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
                  <p>{isSearching ? 'No Favorite Songs Found' : 'Add Songs'}</p>
                </div>
              ) : (
                <ul className='playlist' style={{ maxHeight: playlistHeight }}>
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
          onEnded={handleSongEnd}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPrevious}
          showSkipControls
          showJumpControls={false}
          autoPlayAfterSrcChange={isPlayAfterSrcChange}
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
