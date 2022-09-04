import React, { useState } from "react";
import Song from "./Song";
import { connect } from 'react-redux'
import * as musicActions from '../../../store/musicState/musicState.actions'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

import SearchMasterSongs from "./SearchMasterSongs";


const SongList = ({
  songsData,
  userPlaylists,
  addSongToPlaylist,
  playlistsSongs,
  setCurrentSong,
  setViewMusic,
  isPlaying,
  setIsPlaying
}) => {
  const [formValues, setFormValues] = useState({term: ''})
  const [searchTerm, setSearchTerm] = useState('')



  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
    setSearchTerm(e.target.value)
  }


  return (
    <SongsList>
      <AiOutlineClose className="close-btn" onClick={() => setViewMusic(false)} />
      <div className = "song-list-header">
        <h3> MUSIC</h3>
        <p className="music-disclaimer"> All music in this list is approved to be used on stream using Berry Bot by the artist and or is non copyright music. </p>
        <p className="add-music-tagline"> IF you would like your music here please join our Discord here: LINK</p>
      </div>
      <SearchMasterSongs formValues={formValues} onChange={handleChange}  />
      <div className="song-container">
        {
          searchTerm === '' ?
          songsData.map((song) => {
            return (
              <Song
                key={song.idmusic_data}
                song={song}
                userPlaylists={userPlaylists}
                addSongToPlaylist={addSongToPlaylist}
                playlistsSongs={playlistsSongs}
                setCurrentSong = { setCurrentSong }
                isPlaying = {isPlaying}
                setIsPlaying = {setIsPlaying}
                setViewMusic = {setViewMusic}
              />
            );
          })
          :
          songsData.filter(song => song.artist_name.toLowerCase().includes(searchTerm.toLowerCase()) || song.song_name.toLowerCase().includes(searchTerm.toLowerCase())).map((song) => {
            return (
              <Song
                key={song.idmusic_data}
                song={song}
                userPlaylists={userPlaylists}
                addSongToPlaylist={addSongToPlaylist}
                playlistsSongs={playlistsSongs}
                setCurrentSong = { setCurrentSong }
                isPlaying = {isPlaying}
                setIsPlaying = {setIsPlaying}
                setViewMusic = {setViewMusic}
              />
            );
          }
          )
        }
      </div>
    </SongsList>
  );
};

const mapStateToProps = (state) => {
  return {
    songsData: state.songsData,
    userPlaylists: state.userPlaylists,
    playlistsSongs: state.playlistsSongs,
  };
}

export default connect(mapStateToProps, musicActions) (SongList);


const SongsList = styled.div`
    color: white; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 5% 0;
    border: 1px solid ${pr => pr.theme.colors.berry};
    text-align: center;
    font-size: 1.5rem;
    z-index: 10;
    height: auto;
    font-family: ${pr => pr.theme.fonts.primary};
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    animation: fadeIn 0.2s ease-in;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .song-list-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: auto;

    }

    .close-btn {
      color: ${pr => pr.theme.colors.berry};
      font-size: ${pr => pr.theme.fontSizes.xlarge};
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;

      &:hover {
        color: ${pr => pr.theme.colors.secondary};
      }
    }

    .song-container{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      overflow-y: scroll;
      height: 50vh;
      padding: 1rem 0; 
    }



`
