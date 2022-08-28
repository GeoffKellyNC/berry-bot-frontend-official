import React from "react";
import styled from "styled-components";
import CreatePlaylist from "./CreatePlaylist.form";
import UserPlaylists from "./UserPlaylists";

const Playlist = ({
  userData,
  createPlaylist,
  userPlaylists,
  playlistsSongs,
  getUserPlaylists,
  getPlaylistSongs,
  songsData
}) => {
  return (
    <div>
      <div className="create-playlist">
        <h1> Create Playlist </h1>
        <CreatePlaylist
          userData={userData}
          createPlaylist={createPlaylist}
          getUserPlaylists={getUserPlaylists}
        />
        <UserPlaylists
          userPlaylists={userPlaylists}
          playlistsSongs={playlistsSongs}
          getPlaylistSongs={getPlaylistSongs}
          songsData={songsData}
        />
      </div>
    </div>
  );
};

export default Playlist;
