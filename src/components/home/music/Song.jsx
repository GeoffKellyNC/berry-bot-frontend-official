/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import svgImg from "../../../assets/Valley-red-black.svg";

import { FaPlay } from "react-icons/fa";
import { RiPlayList2Line } from "react-icons/ri";


const Song = ({
  song,
  playSong,
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
    if (!exists[0]){
        await addSongToPlaylist(song.unx_id, selectedPlaylist);
        setAddPlaylist(false);
    }
    if(exists[0]){
        setDuplicate(true)
        setTimeout(() => {
            setDuplicate(false)
        }, 5000);
    }
  };



  return ( 
    <Songs 
      onMouseEnter={() => {
        playSong(song.song_link)
    }} 
      onMouseLeave = {() => {
      return isPlaying ? null : playSong(null)
    }}>
      <div  className={`song-info ${song.song_name}`}>
        <div className="preview"></div>
        <div className="artist-name-container">
          {/* <span className="artist-name-text">Artist: </span> */}
          <span className="artist-name">{song.artist_name}</span>
        </div>
        <div className="song-name-container">
          {/* <span className="song-name-text">Song: </span> */}
          <span className="song-name">{song.song_name}</span>
        </div>
        <FaPlay
          className="play-button"
          onClick={() => {
            playSong(song.song_link)
            setIsPlaying(true)
            setViewMusic(false)
          }} 
        />
        <RiPlayList2Line
          className="play-button"
          onClick={() => {
            setAddPlaylist(!addPlaylist)
          }}
        />
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
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 100px;
  border: 1px solid ${pr => pr.theme.colors.secondary};
  margin: 5px 0;
  background-image: url(${svgImg});
  background-size: cover;
  transition: all 0.3s ease-in-out;
  font-family: ${(pr) => pr.theme.fonts.primary};
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }

  .artist-name{
    font-size: ${(pr) => pr.theme.fontSizes.medium};
  }

  .song-name{
    font-size: ${(pr) => pr.theme.fontSizes.medium};
  }

  .song-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .play-button {
    font-size: ${(pr) => pr.theme.fontSizes.medium};
    color: ${(pr) => pr.theme.colors.secondary};
    cursor: pointer;

    &:hover {
      color: ${(pr) => pr.theme.colors.berry};
    }
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
