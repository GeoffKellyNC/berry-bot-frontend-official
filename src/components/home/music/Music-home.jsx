import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as musicActions from "../../../store/musicState/musicState.actions";

import MusicPlayer from "./MusicPlayer";
import SongList from "./SongList";
import Playlist from "./Playlist";
import List from './List' 

const MusicHome = (props) => {
  const {
    userData,
    getUserPlaylists,
    setCurrentSong,
    getPlaylistSongs
  } = props;


  const [viewMusic, setViewMusic] = useState(false)
  const [viewPlaylist, setViewPlaylist] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false)

  const viewPlaylistHandler = async (id) => {
    setViewPlaylist(!viewPlaylist);
    setCurrentPlaylist(id);
    await getPlaylistSongs(id); 
  };

  


  const playSong = (link) => {
    setCurrentSong(link);
  };

  const stopSong = () => {
    playSong(false)
    setIsPlaying(false)
  }


  useEffect(() => {
    getUserPlaylists(userData.unx_id);
  }, [getUserPlaylists, userData.unx_id]);

  return (
    <HomeMusic>
      <h1 className="music-header"> Music </h1>
      <div className="music-btn-container">
        <button 
          onClick={stopSong}
          className = 'stop-music'> Stop Playing </button>
        <button 
          onClick={() => setViewMusic(!viewMusic)}
          className = "view-all-music">View All Music</button>
      </div>
      {
        viewMusic && 
          <SongList 
            setViewMusic = {setViewMusic} 
            isPlaying = {isPlaying}
            setIsPlaying = {setIsPlaying}
            />
      }
      <MusicPlayer />
      <Playlist  viewPlaylistHandler = { viewPlaylistHandler }/>
      {
        viewPlaylist && <List currentPlaylist = { currentPlaylist } />
      }
    </HomeMusic>
  );
};

const mapStateToProps = (state) => {
  return {
    songsData: state.songsData,
    userData: state.userData
  };
};

export default connect(mapStateToProps, musicActions)(MusicHome);

const HomeMusic = styled.div`
  color: white;
  min-width: auto;
  height: auto;
  font-family: ${(pr) => pr.theme.fonts.primary};
  border-radius: 5px;
  box-sizing: border-box;
  background: ${pr => pr.theme.gradients.primary};
  color: white;

  &:hover {
          background: ${(pr) => pr.theme.gradients.secondary};
      }


  .music-header {
    font-size: ${pr => pr.theme.fontSizes.large};
    color: ${pr => pr.theme.colors.berry};
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
  }

  .stop-music {
    margin-bottom: 10px;
    background: ${pr => pr.theme.colors.secondary};
    color: ${pr => pr.theme.colors.berry};
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: ${pr => pr.theme.fontSizes.medium};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${pr => pr.theme.colors.berry};
      color: ${pr => pr.theme.colors.secondary};
    }
  }

  .view-all-music {
    margin-bottom: 10px;
    background: ${pr => pr.theme.colors.secondary};
    color: ${pr => pr.theme.colors.berry};
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: ${pr => pr.theme.fontSizes.medium};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${pr => pr.theme.colors.berry};
      color: ${pr => pr.theme.colors.secondary};
    }
  }

  .music-btn-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }


`;
