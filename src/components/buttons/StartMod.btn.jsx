import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import * as actions from '../../store/botState/botState.actions'

import { MdAddModerator } from 'react-icons/md'

const StartMod = (props) => {
  const { startModeration } = props;

  const handleStartMod = async () => {
    const target = localStorage.getItem('target')
    const unx_id = JSON.parse(localStorage.getItem('user')).unx_id
    const jwt = localStorage.getItem('jwtToken')
    startModeration(target, unx_id, jwt, 'startModeration')
    localStorage.setItem('botRunning', true)
  }

  return (
    <StartModStyled >
        <MdAddModerator onClick={handleStartMod} className = 'mod-btn' />
        <span className='mod-text'>Start Moderation</span>
    </StartModStyled>
  )
}

export default connect(null, actions)(StartMod)

const StartModStyled = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;


  .mod-btn{
      color: white;
      font-size: 2rem;
      transition: all 0.3s ease-in-out;
      
      &:hover{
            cursor: pointer;
            color: ${pr => pr.theme.colors.berry};
        }

        &:onClick{
            cursor: pointer;
            transform: scale(1.1);
        }
  }

  .mod-text{
      font-size: ${pr => pr.theme.fontSizes.small};
  }

    


`