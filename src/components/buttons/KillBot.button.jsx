import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import * as actions from '../../store/botState/botState.actions'

import { TiCancel } from 'react-icons/ti'

const KillBot = (props) => {
  const { userData } = props;

  const handleKillBot = async () => {
    console.log('KillBot.handleKillBot')
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