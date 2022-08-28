import React from "react";
import styled from "styled-components";

const PlaylistItem = ({ playlist, viewPlaylistHandler }) => {
  return (
    <StyledPlaylistItem className="playlist-ind" key={playlist.playlist_id}>
      <h1 className="playlist-name"> {playlist.playlist_name} </h1>
      <button
        className="view-playlist-button"
        onClick={() => viewPlaylistHandler(playlist.playlist_id)}
      >
        {" "}
        View Playlist{" "}
      </button>
    </StyledPlaylistItem>
  );
};

export default PlaylistItem;

const StyledPlaylistItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  background: rgba(19, 19, 19, 1);
  box-shadow: 0px 0px 10px 0px ${(pr) => pr.theme.colors.secondary};
  color: white;
  font-family: ${(pr) => pr.theme.fonts.primary};
  font-size: ${(pr) => pr.theme.fontSizes.medium};
  font-weight: bold;

  .playlist-name {
    font-size: ${(pr) => pr.theme.fontSizes.large};
    color: ${(pr) => pr.theme.colors.berry};
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
  }

  .view-playlist-button {
    margin-bottom: 10px;
    background: ${(pr) => pr.theme.colors.secondary};
    color: ${(pr) => pr.theme.colors.berry};
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: ${(pr) => pr.theme.fontSizes.medium};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      background: ${(pr) => pr.theme.colors.berry};
      color: ${(pr) => pr.theme.colors.secondary};
    }
  }




`;
