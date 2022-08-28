/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
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

  const viewPlaylistHandler = async (id) => {
    setViewPlaylist(!viewPlaylist);
    setCurrentPlaylist(id);
    await getPlaylistSongs(id); 
  };

  const navigate = useNavigate();
  


  const playSong = (link) => {
    setCurrentSong(link);
  };


  useEffect(() => {
    getUserPlaylists(userData.unx_id);
  }, []);

  return (
    <HomeMusic>
      <h1 className="music-header"> Music </h1>
      <div className="music-btn-container">
        <button 
          onClick={() => playSong(false)}
          className = 'stop-music'> Stop Playing </button>
        <button 
          onClick={() => setViewMusic(!viewMusic)}
          className = "view-all-music">View All Music</button>
		<button
			onClick={() => navigate("/music")}
			className = "view-all-music">Submit a song</button>
      </div>
      {
        viewMusic && <SongList setViewMusic = {setViewMusic} />
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
  };
};

export default connect(mapStateToProps, musicActions)(MusicHome);

const HomeMusic = styled.div`
  color: white;
  min-width: 500px;
  height: auto;
  font-family: ${(pr) => pr.theme.fonts.primary};
  border-radius: 5px;
  box-sizing: border-box;
  background: rgba(19, 19, 19, 1);
  box-shadow: 0px 0px 10px 0px ${(pr) => pr.theme.colors.secondary};
  color: white;


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