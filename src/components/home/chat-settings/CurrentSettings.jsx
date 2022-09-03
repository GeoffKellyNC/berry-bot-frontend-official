import React from 'react'
import styled from 'styled-components'

const CurrentSettings = ({ chatSettings }) => {

  return (
    <Settings>
        <div className = 'slow-container'>
            <p className = ' setting-text slow-text'> Slow Mode: </p>
            <p className= {chatSettings.slow_mode ? 'status-text active' : 'status-text'}> {chatSettings.slow_mode ? 'Enabled' : 'Disabled'} </p>
        </div>
        <div className='slow-wait-container'>
            <p className='setting-text slow-wait-text'> Chat Wait Time: </p>
            <p className='status-text'> {chatSettings.slow_mode_wait_time === null ? 'Not Enabled' : chatSettings.slow_mode_wait_time}s </p>
        </div>
        <div className='follower-mode-container'>
            <p className='setting-text follower-mode-text'> Follower Mode: </p>
            <p className={chatSettings.follower_mode ? 'status-text active': 'status-text'}> {chatSettings.follower_mode ? 'Enabled' : 'Disabled'} </p>
        </div>
        <div className='follower-duration-container'>
            <p className='setting-text follower-duration-text'> Follower Duration: </p>
            <p className='status-text'> {chatSettings.follower_mode_duration === null ? 'Disabled' : chatSettings.follower_mode_duration} MIN </p>
        </div>
        <div className = 'subscriber-mode-container'>
            <p className = 'setting-text subscriber-mode-text'> Subscriber Mode: </p>
            <p className={chatSettings.subscriber_mode ? 'status-text active': 'status-text'}> {chatSettings.subscriber_mode ? 'Enabled' : 'Disabled'} </p>
        </div>
        <div className='emote-mode-container'>
            <p className='setting-text emote-mode-text'> Emote Mode: </p>
            <p className={chatSettings.emote_mode ? 'status-text active': 'status-text'}> {chatSettings.emote_mode ? 'Enabled' : 'Disabled'} </p>
        </div>
        <div className='unique-chat-mode-container'>
            <p className='setting-text unique-chat-mode-text'> Unique Chat Mode: </p>
            <p className={chatSettings.unique_chat_mode ? 'status-text active': 'status-text'}> {chatSettings.unique_chat_mode ? 'Enabled' : 'Disabled'} </p>
        </div>
    </Settings>
  )
}

export default CurrentSettings

const Settings = styled.div`
    color: white;

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .setting-text {
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: bold;
        margin: 0;
        padding: 0.5rem 1rem;
        color: ${pr => pr.theme.fontColors.primary};
    }

    .status-text {
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: bold;
        margin: 0;
        padding: 0.5rem 1rem;
        color: ${pr => pr.theme.fontColors.tertiary};
    }

    .active {
        color: green;
    }

    


`