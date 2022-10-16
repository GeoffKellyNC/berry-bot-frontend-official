/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import * as actions from '../../store/botState/botState.actions'

import { TiCancel } from 'react-icons/ti'

const KillBot = (props) => {
  const { userData, killBot } = props;

  const handleKillBot = async () => {
    // const target = userData.twitch_user
    // const unx_id = userData.unx_id
    // const jwt = localStorage.getItem('jwtToken')
    // await killBot(target, unx_id, jwt )
    console.log('kill bot')
  }

  return (
    <KillBotStyled >
        <TiCancel onClick={handleKillBot} className = 'kill-btn' />
        <span className='kill-text'>Kill Bot</span>
    </KillBotStyled>
  )
}

const mapStateToProps = state => {
  return({
    userData: state.userData
  })
}

export default connect(mapStateToProps, actions)(KillBot)

const KillBotStyled = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;


  .kill-btn{
      color: white;
      font-size: 2rem;
      transition: all 0.3s ease-in-out;
      
      &:hover{
            cursor: pointer;
            color: ${pr => pr.theme.colors.secondary};
        }

        &:onClick{
            cursor: pointer;
            transform: scale(1.1);
        }
  }

  .kill-text{
    font-size: ${pr => pr.theme.fontSizes.medium};
    padding: 0.5rem;
    color: ${pr => pr.theme.fontColors.primary};
  }

    


`