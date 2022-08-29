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
}) => {
  const [formValues, setFormValues] = useState({term: ''})
  const [searchTerm, setSearchTerm] = useState('')

  const playSong = (link) => {
    setCurrentSong(link);
  };

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
    setSearchTerm(e.target.value)
  }


  return (
    <SongsList>
      <AiOutlineClose className="close-btn" onClick={() => setViewMusic(false)} />
      <SearchMasterSongs formValues={formValues} onChange={handleChange}  />
      <div className="song-container">
        {
          searchTerm === '' ?
          songsData.map((song) => {
            return (
              <Song
                key={song.idmusic_data}
                song={song}
                playSong={playSong}
                userPlaylists={userPlaylists}
                addSongToPlaylist={addSongToPlaylist}
                playlistsSongs={playlistsSongs}
                setCurrentSong = { setCurrentSong }
              />
            );
          })
          :
          songsData.filter(song => song.artist_name.toLowerCase().includes(searchTerm.toLowerCase()) || song.song_name.toLowerCase().includes(searchTerm.toLowerCase())).map((song) => {
            return (
              <Song
                key={song.idmusic_data}
                song={song}
                playSong={playSong}
                userPlaylists={userPlaylists}
                addSongToPlaylist={addSongToPlaylist}
                playlistsSongs={playlistsSongs}
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
    border-radius: 5px;
    box-sizing: border-box;
    background: rgba(19, 19, 19, 1);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    animation: fadeIn 0.2s ease-in;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
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
    }



`
