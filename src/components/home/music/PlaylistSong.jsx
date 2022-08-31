import React from 'react'
import styled from 'styled-components'

import { FaPlay } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'





const PlaylistSong = ({songItem, setCurrentSong, deleteSongFromPlaylist, thisPlaylist}) => {

    const playSong = (songLink) => {
        setCurrentSong(songLink)
    }
    
  return (
    <Songs>
        <div className='preview'>

        </div>
        <div className='artist-name-container'>
            <span className='artist-name-text'>Artist: </span>
            <span className = 'artist-name'>{ songItem.artist_name}</span>
        </div>
        <div className='song-name-container'>
            <span className='song-name-text'>Song: </span>
            <span className = 'song-name'>{ songItem.song_name}</span>
        </div>
        <FaPlay className='play-button' onClick = {() => playSong(songItem.song_link)} />
        <TiDelete 
            className='delete-button' 
            onClick = {() => deleteSongFromPlaylist(songItem.unx_id, thisPlaylist.playlist_id)} />
    </Songs>
  )
}

export default PlaylistSong

const Songs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: auto;
    gap: 10px;

    .play-button {
        font-size: ${pr => pr.theme.fontSizes.medium};
        color: ${pr => pr.theme.colors.secondary};
        cursor: pointer;

        &:hover {
            color: ${pr => pr.theme.colors.berry};
        }
    }

`