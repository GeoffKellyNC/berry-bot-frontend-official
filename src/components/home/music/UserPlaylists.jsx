import React, { useState } from 'react'
import styled from 'styled-components'




const UserPlaylists = ({ userPlaylists, playlistsSongs, getPlaylistSongs }) => {
    const [ viewPlaylist, setViewPlaylist ] = useState(false)

    const viewPlaylistHandler = async (id) => {
        setViewPlaylist(!viewPlaylist)
        await getPlaylistSongs(id)

    }

    return (
        <div>
            {
                userPlaylists.length > 0 ?
                userPlaylists.map(playlist => {
                    return (
                        <div key={playlist.playlist_id}>
                            <h1> {playlist.playlist_name} </h1>
                            <button 
                                className='view-playlist-button'
                                onClick={ () => viewPlaylistHandler(playlist.playlist_id) }
                                > View Playlist </button>
                        </div>
                    )
                }) 
                :
                <h1> No Playlists </h1>
            }
        </div>
    )
}

export default UserPlaylists