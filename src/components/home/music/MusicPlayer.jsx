import React from "react"
import ReactPlayer from "react-player"

function MusicPlayer( { currentSong } ) {




    return (
        <div>
            {
                !currentSong ? null :
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
        </div>
    )
}

export default MusicPlayer