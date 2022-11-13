import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as streamActions from '../../../store/streamState/streamState.actions'

import ViewerCount from './ViewerCount'
import StreamTitle from './StreamTitle'
import GameName from './GameName'
import MaturityRating from './MaturityRating'

const Stream = (props) => {
    const [ token ] = useState(localStorage.getItem('jwtToken'))

    const {
        currentViewCount,
        getViewerCount,
        userData,
        getStreamData,
        accessToken
    } = props

    const refreshViewCount = useCallback( async (unx_id, type, target, jwt) => {
        await getViewerCount(unx_id, type, target, jwt)

    }, [getViewerCount])

    useEffect(() => {
        getStreamData(token, userData.unx_id, userData.twitch_id, accessToken, userData.twitch_user)
        refreshViewCount(userData.unx_id, 'viewers', userData.twitch_user, token )

        setInterval(() => {
            refreshViewCount(userData.unx_id, 'viewers', userData.twitch_user, token )
        }, 25 * 60 * 60 * 1000); // 25 hours 


    }, [accessToken, getStreamData, refreshViewCount, token, userData.twitch_id, userData.twitch_user, userData.unx_id])

    return (
        <StreamStyled>
            <div className = 'stream-header'>
                <h1 className='stream-tile'>Current Stream Data</h1>
            </div>
            <div className='stream-body'>
                <ViewerCount viewCount = {currentViewCount}/>
                <StreamTitle />
                <GameName />
                <MaturityRating />
            </div>
        </StreamStyled>
    )
}

const mapStateToProps = state => {
    return({
        currentViewCount: state.currentViewCount,
        userData: state.userData,
        accessToken: state.accessToken
    })
}

export default connect(mapStateToProps, streamActions) (Stream)


const StreamStyled = styled.div`
    max-width: 600px;
    height: auto;
    font-family: ${(pr) => pr.theme.fonts.primary};
    font-size: ${pr => pr.theme.fontSizes.medium};
    border-radius: 5px;
    box-sizing: border-box;
    background: ${(pr) => pr.theme.gradients.primary};
    color: ${pr => pr.theme.fontColors.primary};
    transition: all 0.3s ease-in-out;
      &:hover {
          background: ${(pr) => pr.theme.gradients.secondary};
      }
    display: flex;
    flex-direction: column;
    align-items: space-between;
    
    .stream-header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    .stream-tile {
        font-size: ${pr => pr.theme.fontSizes.heading};
    }


`