import React, { useEffect } from "react";
import styled from "styled-components";
import CreatePlaylist from "./CreatePlaylist.form";
import UserPlaylists from "./UserPlaylists";
import { connect } from 'react-redux'
import * as musicActions from '../../../store/musicState/musicState.actions'

const Playlist = ({
  userData,
  createPlaylist,
  userPlaylists,
  playlistsSongs,
  getUserPlaylists,
  getPlaylistSongs,
  songsData,
  setCurrentSong,
  getAllSongs,
  viewPlaylistHandler
}) => {

  useEffect(() => {
    getAllSongs()

  }, [])

  return (
    <PlaylistsStyled>
      <div className="playlist-header">
        <h1> Playlists </h1>
      </div>
      <div className="create-playlist">
        <h1> Create Playlist </h1>
        <CreatePlaylist
          userData={userData}
          createPlaylist={createPlaylist}
          getUserPlaylists={getUserPlaylists}
        />
      </div>
      <div className="user-playlists">
        <UserPlaylists
          userPlaylists={userPlaylists}
          playlistsSongs={playlistsSongs}
          getPlaylistSongs={getPlaylistSongs}
          songsData={songsData}
          setCurrentSong = {setCurrentSong}
          viewPlaylistHandler = { viewPlaylistHandler }
        />
      </div>
    </PlaylistsStyled>
  );
};

const mapStateToProps = state => {
  return({
    userData: state.userData,
    userPlaylists: state.userPlaylists,
    playlistsSongs: state.playlistsSongs,
    songsData: state.songsData
  })
}

export default connect(mapStateToProps, musicActions) (Playlist)


const PlaylistsStyled = styled.div`
  display: flex;
  flex-direction: column; 

  .playlist-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    font-size: ${pr => pr.theme.fontSizes.large};
    color: ${pr => pr.theme.colors.berry};
  }


`
