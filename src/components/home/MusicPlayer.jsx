import React, { useState } from "react"
import ReactPlayer from "react-player"

function MusicPlayer() {
    const [currentSong, setCurrentSong] = useState('https://soundcloud.com/cherrii-music/cherrii-pierce-the-veil-bulls-in-the-bronx-remiix')



    return (
        <div>
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
                        }
                    }
                }}
            />
        </div>
    )
}

export default MusicPlayer