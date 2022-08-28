import React from 'react'
import styled from 'styled-components'

const List = ({playlistsSongs, songsData}) => {
  return (
    <UserList className='playlist-songs'>
        {
            playlistsSongs.length > 0 ?
            playlistsSongs.map(song => {
                    return songsData.map(songItem => {
                        if (song.song_id === songItem.unx_id) {
                            return (
                                <div key={songItem.idmusic_data}>
                                    <h1> {songItem.song_name} </h1>
                                </div>
                            )
                        }
                    })
                })
            :
            <h1> No Songs </h1>
        }
    </UserList>
  )
}

export default List


const UserList = styled.div`
    border: 1px solid ${pr => pr.theme.colors.primary};


`