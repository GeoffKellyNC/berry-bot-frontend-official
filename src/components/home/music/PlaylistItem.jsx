import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from '../../../store/musicState/musicState.actions'

import {HiOutlineViewGrid } from "react-icons/hi";
import {TiDelete} from "react-icons/ti";

const PlaylistItem = ({ playlist, viewPlaylistHandler, deletePlaylist }) => {
  return (
    <StyledPlaylistItem 
      className="playlist-ind" 
      key={playlist.playlist_id}
      onClick = { () => viewPlaylistHandler(playlist.playlist_id)}
    >
      <h1 className="playlist-name"> {playlist.playlist_name} </h1>
      <div className="playlist-action-buttons">
        <HiOutlineViewGrid 
            onClick = {() => viewPlaylistHandler(playlist.playlist_id)} 
            className = 'view-playlist-button'
        />
        <TiDelete 
            onClick={() => deletePlaylist(playlist.playlist_id)}
            className = 'delete-playlist-button' 
        />
      </div>
    </StyledPlaylistItem>
  );
};

export default connect(null, actions) (PlaylistItem);

const StyledPlaylistItem = styled.div`
  width: 520px;
  display: flex;
  flex-direction: row;
  background: black;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  border-top: 3px solid ${pr => pr.theme.colors.secondary};
  border-bottom: 3px solid ${pr => pr.theme.colors.secondary};


  &:hover {
    background: #2f2f2f;
  }

  .playlist-name {
    font-size: ${(pr) => pr.theme.fontSizes.large};
    color: ${(pr) => pr.theme.colors.berry};
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
  }

  .view-playlist-button {
    color: ${(pr) => pr.theme.colors.secondary};
    font-size: ${(pr) => pr.theme.fontSizes.large};
    margin: 0.5rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${(pr) => pr.theme.colors.berry};
    }
  }

  .delete-playlist-button {
    color: ${(pr) => pr.theme.colors.secondary};
    font-size: ${(pr) => pr.theme.fontSizes.large};
    margin: 0.5rem;
    transition: all 0.3s ease-in-out; 
    cursor: pointer;
    &:hover {
      color: ${(pr) => pr.theme.colors.berry};
    }
  }




`;
