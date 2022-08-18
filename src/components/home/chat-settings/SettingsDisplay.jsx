/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../../store/botState/botState.actions'

import CurrentSettings from './CurrentSettings'
import { FiRefreshCw,  } from 'react-icons/fi'


const SettingsDisplay = (props) => {

    const { chatSettings, getChatSettings, userData, token } = props


    console.log('Chat Settings: ', chatSettings)




    useEffect(() => {

        getChatSettings(token, userData.unx_id, userData.twitch_id, userData.twitch_user)

    }, [])

    const refreshSettings = () => {
        getChatSettings(token, userData.unx_id, userData.twitch_id, userData.twitch_user)
    }


    return (
        <StyledSettingsDisplay>
            <div className='chat-settings-title'>
                <h3> Chat Settings </h3>
                <FiRefreshCw className='refresh-icon' onClick={refreshSettings} />
            </div>
            <div className='chat-settings-body'>
                <CurrentSettings chatSettings={chatSettings} />
            </div>
        </StyledSettingsDisplay>
    )
}


const mapStateToProps = state => {
    return({
        chatSettings: state.chatSettings
    })
}

export default connect(mapStateToProps, actions)(SettingsDisplay)

const StyledSettingsDisplay = styled.div`
    width: 300px;
    height: auto;
    font-family: ${pr => pr.theme.fonts.primary};
    margin: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    background: rgba(19, 19, 19, 1);
    box-shadow: 0px 0px 10px 0px ${pr => pr.theme.colors.secondary};
    color: white;

    .chat-settings-title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 1rem;
        margin: 0;
        text-align: center;
        font-size: ${pr => pr.theme.fontSizes.large};
        font-weight: bold;
        color: ${pr => pr.theme.colors.secondary};
    }

    .refresh-icon {
        font-size: ${pr => pr.theme.fontSizes.large};
        color: ${pr => pr.theme.colors.secondary};
        cursor: pointer;
        margin-left: 0.5rem;
        &:hover {
            color: ${pr => pr.theme.colors.berry};
        }
    }


`