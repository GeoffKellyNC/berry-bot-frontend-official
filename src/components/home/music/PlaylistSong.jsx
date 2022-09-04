import React from 'react'
import styled from 'styled-components'

import { FaPlay } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'

import berryImg from '../../../assets/berry.png'





const PlaylistSong = ({songItem, setCurrentSong, deleteSongFromPlaylist, thisPlaylist}) => {

    const playSong = (songLink) => {
        setCurrentSong(songLink)
    }
    
  return (
    <Songs>
        <div className='preview'>
            <img 
                className='song-img'
                src = {`${berryImg}`}
                alt = 'song-art'
            />
        </div>
        <div className='artist-name-container song'>
            <span className = 'artist-name'>{ songItem.artist_name}</span>
        </div>
        <div className='song-name-container'>
            <span className = 'song-name'>{ songItem.song_name}</span>
        </div>
        <div className='song-button'>
            <FaPlay className='play-button' onClick = {() => playSong(songItem.song_link)} />
            <TiDelete 
                className='delete-button' 
                onClick = {() => deleteSongFromPlaylist(songItem.unx_id, thisPlaylist.playlist_id)} />
        </div>
    </Songs>
  )
}

export default PlaylistSong

const Songs = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem; 
    width: 10rem;

    .song-img {
        height: 30px;
        width: 30px;
    }

`