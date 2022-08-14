/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../store/authState/authState.creators'

import { getTargetLocal } from '../../util/localData'



const StatusBar = (props) => {
    const [target, setTarget] = useState(getTargetLocal())
    const [botStatus, setBotStatus] = useState(false)



    useEffect(() => {
        const botRunning = localStorage.getItem('botRunning')
        if (botRunning){
            setBotStatus(true)
        }
       
    }, [])




  return (
    <StatusBarStyled>
        <div className = 'status-target'>
            <p className = 'status-target-text status-text'>Target:<span>{target ? target : 'No Target Set'}</span> </p>
        </div>
        <div className = 'bot-status'>
            <p className = 'bot-status-text status-text'>Bot Status: <span>{botStatus ? 'Running': 'Not Running'}</span></p>
        </div>
        <div className = 'mod-status'>
            <p className = 'mod-status-text status-text'>Mod Status: <span>{props.modRunning ? 'Running': 'Not Running'}</span></p>
        </div>
        <div className = 'server-status'>
            <p className = 'server-status-text status-text'>Server Status: <span>{props.serverIsUp? 'Running': 'Not Running'}</span></p>
        </div>
    </StatusBarStyled>
  )
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, actions)(StatusBar)

const StatusBarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${pr => pr.theme.colors.berry};
    color: white;
    font-family: ${pr => pr.theme.fonts.primary};
    font-size: ${pr => pr.theme.fontSizes.medium};
    padding: 10px;
    background: rgb(105 3 165 / 12%);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    margin: 2rem 0;
    .status-text{
        color: ${pr => pr.theme.colors.secondary};
        }
    .status-text span {
        color: ${pr => pr.theme.colors.primary};
        margin: 0 10px;
    }
`