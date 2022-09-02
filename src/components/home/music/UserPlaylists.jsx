import React from "react";
import styled from "styled-components";

import PlaylistItem from "./PlaylistItem";

const UserPlaylists = ({
  userPlaylists,
  getPlaylistSongs,
  viewPlaylistHandler 
}) => {


  return (
    <StyledUserPlaylists>
      <div className="playlist-names">
        {userPlaylists.length > 0 ? (
          userPlaylists.map((playlist) => {
            return (
              <PlaylistItem
                key={playlist.playlist_id}
                playlist={playlist}
                viewPlaylistHandler={viewPlaylistHandler}
              />
            );
          })
        ) : (
          <h1> No Playlists </h1>
        )}
      </div>
    </StyledUserPlaylists>
  );
};

export default UserPlaylists;

const StyledUserPlaylists = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* align-items: center; */}
  width: 100%;
  height: auto;

  .playlist-names {
    display: flex;
    flex-direction: column;
  }

  .playlist-ind {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .user-playlists-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 0 5%;
    margin-bottom: 5%;
  }


`;
