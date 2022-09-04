import React, { useState } from "react";
import styled from "styled-components";


import { FaPlay } from "react-icons/fa";
import { RiPlayList2Line } from "react-icons/ri";
import berryImg from '../../../assets/berry.png'


const Song = ({
  song,
  userPlaylists,
  addSongToPlaylist,
  playlistsSongs,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  setViewMusic
}) => {
  const [addPlaylist, setAddPlaylist] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const [duplicate, setDuplicate] = useState(false)



  const handleAddPlaylist = async (e) => {
    e.preventDefault();
   const exists =  playlistsSongs.map(item => {
        return selectedPlaylist === item.playlist_id && item.song_id === song.unx_id ? true : false
    })
    console.log('exists', exists)
    if (!exists.includes(true)) {
        await addSongToPlaylist(song.unx_id, selectedPlaylist);
        setAddPlaylist(false);
    }
    if(exists.includes(true)) {
        setDuplicate(true)
        setTimeout(() => {
            setDuplicate(false)
        }, 5000);
    }
  };



  return ( 
    <Songs 
      onMouseEnter={() => {
        setCurrentSong(song.song_link)
    }} 
      onMouseLeave = {() => {
      return isPlaying ? null : setCurrentSong('')
    }}>
      <div  className={`song-info ${song.song_name}`}>
        <div className="preview">
          <img 
            src={berryImg} 
            alt="song"
            className="track-image" />
        </div>
        <div className = 'song-text-container'>
          <div className="artist-name-container">
            <span className="artist-name">{song.artist_name}</span>
          </div>
          <div className="song-name-container">
            {/* <span className="song-name-text">Song: </span> */}
            <span className="song-name">{song.song_name}</span>
          </div>
          <div className = 'song-buttons'>
            <FaPlay
            className="play-button"
            onClick={() => {
              setCurrentSong(song.song_link)
              setIsPlaying(true)
              setViewMusic(false)
            }} 
          />
          <RiPlayList2Line
            className="playlist-button"
            onClick={() => {
              setAddPlaylist(!addPlaylist)
            }}
          />
          </div>
        </div>
        {addPlaylist && (
          <form className="add-playlist-form">
            <select
              value={selectedPlaylist}
              onChange={(e) => setSelectedPlaylist(e.target.value)}
            >
              <option value=""> Select Playlist </option>
              {userPlaylists.map((playlist) => {
                return (
                  <option
                    key={playlist.playlist_id}
                    value={playlist.playlist_id}
                  >
                    {" "}
                    {playlist.playlist_name}{" "}
                  </option>
                );
              })}
            </select>
            <button onClick={handleAddPlaylist}> Add to Playlist </button>
          </form>
        )}
      </div>
      <div className="error-container">
        {
            duplicate && <span className="error-duplicate">Song Already In Playlist!</span>
        }
      </div>
    </Songs>
  );
};

export default Song;

const Songs = styled.div`
  width: 33%;
  height: auto;
  border: 1px solid #41ff16;
  margin: 5px 0;
  transition: all 0.3s ease-in-out;
  font-family: ${(pr) => pr.theme.fonts.primary};
  background: rgb(232 0 89 / 45%);
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 1.5px );
  -webkit-backdrop-filter: blur( 1.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  &:hover {
    transform: scale(1.05);
  }

  .artist-name{
    font-size: ${(pr) => pr.theme.fontSizes.large};
  }

  .song-name{
    font-size: ${(pr) => pr.theme.fontSizes.large};
  }

  .play-button {
    font-size: ${(pr) => pr.theme.fontSizes.medium};
    color: ${(pr) => pr.theme.colors.secondary};
    cursor: pointer;

    &:hover {
      color: ${(pr) => pr.theme.colors.berry};
    }
  }

  .song-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
  }

  .song-text-container {
    color: ${(pr) => pr.theme.colors.secondary};
    display: flex;
    flex-direction: column;

  }

  .playlist-button {
    font-size: ${(pr) => pr.theme.fontSizes.large};
    color: ${(pr) => pr.theme.colors.secondary};
    cursor: pointer;
  }

  .track-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 10px;
  }

  .error-container{
    padding: 10px;
  }

  .error-duplicate{
    color: ${pr => pr.theme.colors.berry};
    font-size: ${pr => pr.theme.fontSizes.medium};
  }

  ${'' /* transition in from the right side */}
  .add-playlist-form {
    animation: slide-in-right 0.3s ease-in-out;

    @keyframes slide-in-right {
      0% {
        transform: translateX(50%);

      }
      100% {
        transform: translateX(0);
      }
    }
  }
`;
