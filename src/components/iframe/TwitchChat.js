import React from 'react'

const TwitchChat = ({ target }) => {
  console.log('TwitchChat', target)
  return (
    <div>
        <iframe src={`https://www.twitch.tv/embed/${target}/chat?parent=https://berrytwitchbot.netlify.app`}
        height="490"
        width="500"
        title='twitch-chat-iframe'
        className='twitch-chat-iframe'>
        </iframe>
    </div>
  )
}

export default TwitchChat


