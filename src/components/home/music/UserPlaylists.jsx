import React, { useState } from 'react'
import styled from 'styled-components'

import List from './List'
import PlaylistItem from './PlaylistItem'




const UserPlaylists = ({ userPlaylists, playlistsSongs, getPlaylistSongs, songsData }) => {
    const [ viewPlaylist, setViewPlaylist ] = useState(false)

    const viewPlaylistHandler = async (id) => {
        setViewPlaylist(!viewPlaylist)
        await getPlaylistSongs(id)

    }


    return (
        <StyledUserPlaylists>
            <div className='playlist-names'>
                {
                    userPlaylists.length > 0 ?
                    userPlaylists.map(playlist => {
                        return (
                            <PlaylistItem
                                key={playlist.playlist_id}
                                playlist={playlist}
                                viewPlaylistHandler={viewPlaylistHandler}
                            />
                        )
                    }) 
                    :
                    <h1> No Playlists </h1>
                }
            </div>
            {
                viewPlaylist && <List playlistsSongs={playlistsSongs} songsData={songsData} />
                
            }
        </StyledUserPlaylists>
    )
}

export default UserPlaylists

const StyledUserPlaylists = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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


`