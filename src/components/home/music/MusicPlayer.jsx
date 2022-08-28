import React from "react"
import ReactPlayer from "react-player"
import { connect } from "react-redux"
import * as musicActions from '../../../store/musicState/musicState.actions'
import styled from "styled-components"

function MusicPlayer( { currentSong } ) {




    return (
        <MusicPlayerStyled>
            {
                !currentSong ? 
                <div className="music-player-placeholder">
                    <h1> No Song Currently Playing </h1>
                </div>
                :
                <ReactPlayer
                    url={currentSong}
                    width='500px'
                    height = '300px'
                    onEnded = {() => {
                        console.log('ended')
                    }}
                    config = {{
                        soundcloud: {
                            options: {
                                show_artwork: false,
                                color: '#2b2d42',
                                auto_play: true
                            }
                        }
                    }}
                />
            }
        </MusicPlayerStyled>
    )
}

const mapStateToProps = state => {
    return({
        currentSong: state.currentSong
    })
}

export default connect(mapStateToProps, musicActions) (MusicPlayer)



const MusicPlayerStyled = styled.div`

    .music-player-placeholder {
        height: 300px;
        width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #2b2d42;
        color: white;
        border-radius: 10px;
        padding: 10px;
    }


`