import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as musicActions from "../../../store/musicState/musicState.actions";

import MusicPlayer from "./MusicPlayer";
import SongList from "./SongList";
import Playlist from "./Playlist";

const MusicHome = (props) => {
  const {
    userData,
    songsData,
    getAllSongs,
    createPlaylist,
    userPlaylists,
    playlistsSongs,
    getUserPlaylists,
    addSongToPlaylist,
    getPlaylistSongs,
  } = props;

  const [currentSong, setCurrentSong] = useState(false);

  const playSong = (link) => {
    setCurrentSong(link);
  };

  useEffect(() => {
    getAllSongs();
    getUserPlaylists(userData.unx_id);
  }, []);


  return (
    <HomeMusic>
      <h1> Songs </h1>
      <button onClick={() => playSong(false)}> Stop </button>

      <SongList
        songsData={songsData}
        playSong={playSong}
        userPlaylists={userPlaylists}
        addSongToPlaylist={addSongToPlaylist}
      />

      <MusicPlayer currentSong={currentSong} />

      <Playlist
        userData={userData}
        createPlaylist={createPlaylist}
        userPlaylists={userPlaylists}
        playlistsSongs={playlistsSongs}
        getUserPlaylists={getUserPlaylists}
        getPlaylistSongs={getPlaylistSongs}
        songsData={songsData}
      />
    </HomeMusic>
  );
};

const mapStateToProps = (state) => {
  return {
    songsData: state.songsData,
    userPlaylists: state.userPlaylists,
    playlistsSongs: state.playlistsSongs,
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
`;
