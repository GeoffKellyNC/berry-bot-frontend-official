import React from 'react'
import styled from 'styled-components'

const TwitchChat = ({ target }) => {
    console.log('CHAT TARGET: ', target)
  return (
    <div>
        <iframe src={`https://www.twitch.tv/embed/${target}/chat?parent=http://localhost:3000/dashboard`}
        height="500"
        width="400"
        title='twitch-chat-iframe'
        className='twitch-chat-iframe'>
        </iframe>
    </div>
  )
}

export default TwitchChat


