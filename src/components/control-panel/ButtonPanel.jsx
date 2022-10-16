/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../store/botState/botState.actions'


// Importing Components 
import StartbotBtn from '../buttons/Startbot.btn'
import StartMod from '../buttons/StartMod.btn'
import KillBot from '../buttons/KillBot.button'


const ButtonPanel = ({ killBot, userData, botRunning, getBotStatus }) => {
    const [token] = useState(localStorage.getItem('jwtToken'))

    const kill = async () => {
        const target = userData.twitch_user
        const unx_id = userData.unx_id
        const jwt = await localStorage.getItem('jwtToken')
        const message = 'killBot'
        await killBot(target, unx_id, jwt, message)
    }

    useEffect(() => {
        getBotStatus(token, userData.unx_id)
    }, [getBotStatus, token, userData.unx_id])



    return (
        <PanelStyled>
            <div className='panel-info-display'>
                <h3 className = 'control-panel-text'> Bot Controls </h3>
            </div>
            <div className = 'panel-btns'>
                {
                    !botRunning ? <StartbotBtn /> : <KillBot />
                }
                <StartMod />
            </div>

        </PanelStyled>
    )
}

const mapStateToProps = state => {
    return {
      target: state.target,
      userData: state.userData,
      botRunning: state.botRunning
    }
  }
  

export default connect(mapStateToProps, actions)(ButtonPanel)


const PanelStyled = styled.div`
    width: 300px;
    height: auto;
    font-family: ${pr => pr.theme.fonts.primary};
    margin: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    background: ${pr => pr.theme.gradients.primary};
    color: white;

    &:hover {
          background: ${(pr) => pr.theme.gradients.secondary};
      }

    .panel-btns{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;        
    }

    .panel-info-display{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 1rem;
        margin: 0;
    }

    .control-panel-text{
        color: ${ pr => pr.theme.fontColors.primary };
        font-size: ${pr => pr.theme.fontSizes.large};
        font-weight: bold;        
    }


    
 



`