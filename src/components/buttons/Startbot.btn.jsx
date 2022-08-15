import React from 'react'

import styled from 'styled-components'


import { connect } from 'react-redux'
import * as action from '../../store/botState/botState.actions'

import { BiBot } from 'react-icons/bi'


function StartbotBtn(props) {
    const { startBerry } = props;


    const handleStartBerry = async () => {
            const target = localStorage.getItem('target')
            const unx_id = JSON.parse(localStorage.getItem('user')).unx_id
            const jwt = localStorage.getItem('jwtToken')
            startBerry(target, unx_id, jwt, 'startBot')
    }

    return (
        <StartBot>
            <BiBot onClick={handleStartBerry} className = 'start-btn' />
            <span className='start-bot-text'>Start Bot</span>
        </StartBot>
            
    )
}



export default connect(null, action)(StartbotBtn)


const StartBot = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    .start-btn{
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

    .start-bot-text{
        font-size: ${pr => pr.theme.fontSizes.small};
    }



`

 
    




