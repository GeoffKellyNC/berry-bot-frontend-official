import React from 'react'
import Song from './Song'

const SongList = ({ songsData, playSong, userPlaylists, addSongToPlaylist }) => {


    return (
        <div>
            {
                songsData.map(song => {
                    return <Song key = {song.idmusic_data} song = {song} playSong = { playSong } userPlaylists = { userPlaylists } addSongToPlaylist = { addSongToPlaylist } />
                })
            }
        </div>
    )
}

export default SongList