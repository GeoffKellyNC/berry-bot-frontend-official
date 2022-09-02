/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
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
  }, []);

  return (
    <UserList className="playlist-songs">
      <h1> {thisPlaylist.playlist_name} </h1>
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
  border: 1px solid ${(pr) => pr.theme.colors.primary};
`;
