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

  const viewPlaylistHandler = async (id) => {
    setViewPlaylist(!viewPlaylist);
    await getPlaylistSongs(id); 
  };
  


  const playSong = (link) => {
    setCurrentSong(link);
  };


  useEffect(() => {
    getUserPlaylists(userData.unx_id);
  }, []);


  return (
    <HomeMusic>
      <h1 className="music-header"> Music </h1>
      <button onClick={() => playSong(false)}> Stop Playing </button>
      <button onClick={() => setViewMusic(!viewMusic)}>View All Music</button>
      {
        viewMusic && <SongList setViewMusic = {setViewMusic} />
      }
      <MusicPlayer />
      <Playlist  viewPlaylistHandler = { viewPlaylistHandler }/>
      {
        viewPlaylist && <List />
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
`;
