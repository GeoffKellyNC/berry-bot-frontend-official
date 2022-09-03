import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../../store/botState/botState.actions'

import CurrentSettings from './CurrentSettings'
import { FiRefreshCw } from 'react-icons/fi'


const SettingsDisplay = (props) => {

    const { chatSettings, getChatSettings, userData } = props


    useEffect(() => {
        const token = localStorage.getItem('jwtToken')
        getChatSettings(token, userData.unx_id, userData.twitch_id, userData.twitch_user)

    }, [getChatSettings, userData.twitch_id, userData.twitch_user, userData.unx_id])

    const refreshSettings = async () => {
        const token = await localStorage.getItem('jwtToken')
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
        chatSettings: state.chatSettings,
        userData: state.userData
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
    background: ${pr => pr.theme.gradients.primary};
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
        color: ${pr => pr.theme.fontColors.primary};
    }

    .refresh-icon {
        font-size: ${pr => pr.theme.fontSizes.large};
        color: ${pr => pr.theme.colors.berry};
        cursor: pointer;
        margin-left: 0.5rem;
        &:hover {
            color: ${pr => pr.theme.colors.berry};
        }
    }


`