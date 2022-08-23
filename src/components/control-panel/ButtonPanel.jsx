/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../store/botState/botState.actions'


// Importing Components 
import StartbotBtn from '../buttons/Startbot.btn'
import StartMod from '../buttons/StartMod.btn'
import StartVoteBtn from '../buttons/StartVote.btn'


const ButtonPanel = (props) => {


    return (
        <PanelStyled>
            <div className='panel-info-display'>
                <h3 className = 'control-panel-text'> Bot Controls </h3>
            </div>
            <div className = 'panel-btns'>
                <StartbotBtn />
                <StartMod />
                {/* <StartVoteBtn /> */}
            </div>

        </PanelStyled>
    )
}

const mapStateToProps = state => {
    return {
      target: state.target,
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
    background: rgba(19, 19, 19, 1);
    box-shadow: 0px 0px 10px 0px ${pr => pr.theme.colors.secondary};
    color: white;

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
        color: ${pr => pr.theme.colors.secondary};
        font-size: ${pr => pr.theme.fontSizes.large};
        font-weight: bold;        
    }


    
 



`