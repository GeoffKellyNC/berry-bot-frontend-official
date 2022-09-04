/* eslint-disable array-callback-return */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as musicActions from "../../../store/musicState/musicState.actions";

import PlaylistSong from "./PlaylistSong";

const List = ({
  playlistsSongs,
  songsData,
  setCurrentSong,
  currentPlaylist,
  userPlaylists,
  deleteSongFromPlaylist
}) => {
  const [thisPlaylist, setThisPlaylist] = useState("");

  useEffect(() => {
    setThisPlaylist(
      userPlaylists.filter((list) => list.playlist_id === currentPlaylist)[0]
    );
  }, [currentPlaylist, userPlaylists]);

  return (
    <UserList className="playlist-songs">
      <h1> {thisPlaylist.playlist_name} </h1>
      <div className="playlist-songs-container">
        {playlistsSongs.length > 0 ? (
          playlistsSongs.map((song) => {
            return songsData.map((songItem) => {
              if (song.song_id === songItem.unx_id) {
                return (
                  <PlaylistSong
                    key={songItem.idmusic_data}
                    songItem={songItem}
                    setCurrentSong={setCurrentSong}
                    deleteSongFromPlaylist={deleteSongFromPlaylist}
                    thisPlaylist = {thisPlaylist}
                  />
                );
              }
            });
          })
        ) : (
          <h1> No Songs </h1>
        )}
        </div>
    </UserList>
  );
};

const mapStateToProps = (state) => {
  return {
    playlistsSongs: state.playlistsSongs,
    songsData: state.songsData,
    userPlaylists: state.userPlaylists,
  };
};

export default connect(mapStateToProps, musicActions)(List);

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  

  .playlist-songs-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: auto;
    gap: 1rem;
    overflow: y-scroll;
  }
`;
