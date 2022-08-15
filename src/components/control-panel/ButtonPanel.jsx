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
                <StartVoteBtn />
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
    height: 300px;
    font-family: ${pr => pr.theme.fonts.primary};
    background: rgba(81, 95, 104, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(81, 95, 104, 0.3);
    border: 1px solid ${pr => pr.theme.colors.secondary};
    margin: 10px;

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
        color: ${pr => pr.theme.colors.berry};
        font-size: ${pr => pr.theme.fontSizes.small};
        font-weight: bold;        
    }


    
 



`