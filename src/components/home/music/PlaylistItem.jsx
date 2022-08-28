import React from 'react'

const PlaylistItem = ({playlist, viewPlaylistHandler}) => {
  return (
    <div className='playlist-ind' key={playlist.playlist_id}>
    <h1> {playlist.playlist_name} </h1>
    <button 
        className='view-playlist-button'
        onClick={ () => viewPlaylistHandler(playlist.playlist_id) }
        > View Playlist </button>
</div>
  )
}

export default PlaylistItem