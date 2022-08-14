import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../store/botState/botState.actions'


// Importing Components 
import StartbotBtn from '../buttons/Startbot.btn'
import StartMod from '../buttons/StartMod.btn'


const ButtonPanel = (props) => {


    return (
        <PanelStyled>
            <div className='panel-info-display'>
                <h3 className = 'control-panel-text'> Bot Controls </h3>
            </div>
            <div className = 'panel-btns'>
                <StartbotBtn />
                <StartMod />
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
   /* From https://css.glass */
    background: rgba(0, 184, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(0, 184, 255, 0.3);
    margin: 10px;

    .panel-btns{
        display: flex;
        
    }

    
 



`