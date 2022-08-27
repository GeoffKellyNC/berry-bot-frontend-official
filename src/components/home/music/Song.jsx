import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { FaPlay } from 'react-icons/fa'
import { RiPlayList2Line } from 'react-icons/ri'



const Song = ({song, playSong, userPlaylists, addSongToPlaylist }) => {
    const [ addPlaylist, setAddPlaylist ] = useState(false)
    const [ selectedPlaylist, setSelectedPlaylist ] = useState('')
  


    useEffect(() => {
        
    } , [song])

    const handleAddPlaylist = async (e) => {
        e.preventDefault()
        await addSongToPlaylist(song.unx_id, selectedPlaylist)
        setAddPlaylist(false)
    }




    return (
        <Songs>
            <div className = 'song-info'>
                <div className='preview'>

                </div>
                <div className='artist-name-container'>
                    <span className='artist-name-text'>Artist: </span>
                    <span className = 'artist-name'>{ song.artist_name}</span>
                </div>
                <div className='song-name-container'>
                    <span className='song-name-text'>Song: </span>
                    <span className = 'song-name'>{ song.song_name}</span>
                </div>
                <FaPlay className='play-button' onClick = {() => playSong(song.song_link)} />
                <RiPlayList2Line className='play-button' onClick = {() => setAddPlaylist(!addPlaylist)} />
                {
                    addPlaylist && 
                    <form>
                        <select 
                            value={selectedPlaylist}
                            onChange={(e) => setSelectedPlaylist(e.target.value)}
                            >
                            {
                                userPlaylists.map(playlist => {
                                    return (
                                        <option key={playlist.playlist_id} value={playlist.playlist_id}> {playlist.playlist_name} </option>
                                    )
                                })
                            }
                        </select>
                        <button onClick={handleAddPlaylist}> Add to Playlist </button>
                    </form>
                }
            </div>

            
        </Songs>
    )
    }

export default Song

const Songs = styled.div`
    display: flex;
    flex-direction: column;
    height: 50px;
    border-style: solid;
    border-width: 2px 0 2px 0;
    border-color: ${pr => pr.theme.colors.secondary};

    .song-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .play-button {
        font-size: ${pr => pr.theme.fontSizes.medium};
        color: ${pr => pr.theme.colors.secondary};
        cursor: pointer;

        &:hover {
            color: ${pr => pr.theme.colors.berry};
        }
    }


`