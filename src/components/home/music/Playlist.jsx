import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CreatePlaylist from "./CreatePlaylist.form";
import UserPlaylists from "./UserPlaylists";
import { connect } from 'react-redux'
import * as musicActions from '../../../store/musicState/musicState.actions'

import { BiAddToQueue } from "react-icons/bi";

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

  const [create, setCreate] = useState(false)

  useEffect(() => {
    getAllSongs()

  }, [getAllSongs])

  return (
    <PlaylistsStyled>
      <div className="playlist-header">
        <h1> Playlists </h1>
        <BiAddToQueue className="add-playlist" onClick={() => setCreate(!create)} />
      </div>
      <div className="create-playlist">
        {
          create && (
            <CreatePlaylist
              userData={userData}
              createPlaylist={createPlaylist}
              getUserPlaylists={getUserPlaylists}
          />
          ) 
        }
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
    margin: 20px 0;

    & > h1 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-right: 1rem;
    }
  }

  .add-playlist {
    font-size: 2rem;
    color: ${pr => pr.theme.colors.primary};
    cursor: pointer;
  }

  .user-playlists {
    width: 100%;
  }




`
