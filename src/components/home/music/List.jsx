import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as musicActions from '../../../store/musicState/musicState.actions'

import PlaylistSong from './PlaylistSong'



const List = ({playlistsSongs, songsData, setCurrentSong}) => {
  return (
    <UserList className='playlist-songs'>
        {
            playlistsSongs.length > 0 ?
            playlistsSongs.map(song => {
                    return songsData.map(songItem => {
                        if (song.song_id === songItem.unx_id) {
                            return (
                                <PlaylistSong key={songItem.idmusic_data} songItem={songItem}
                                setCurrentSong = { setCurrentSong } />
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

const mapStateToProps = state => {
    return({
        playlistsSongs: state.playlistsSongs,
        songsData: state.songsData


    })
}

export default connect(mapStateToProps, musicActions) (List)


const UserList = styled.div`
    border: 1px solid ${pr => pr.theme.colors.primary};


`