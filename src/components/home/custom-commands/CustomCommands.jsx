/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../../store/botState/botState.actions'

import CommandList from '../modals/CommandList'
import AddCommand from './AddCommand.form'
import { FiRefreshCw } from 'react-icons/fi'


const CustomCommands = (props) => {
    const { customCommands, getCustomCommands, userData, token } = props
    const [ selected, setSelected] = useState(false)


    const handleClose = () => {
        setSelected(false)
    }
    
    const select = () => {
        setSelected(true)
    }

    const refreshCustomCommands = () => {
        getCustomCommands(token, userData.unx_id, userData.twitch_id, userData.twitch_user)
    }



    useEffect(() => {
        getCustomCommands(token, userData.unx_id)

    },[])


    return (
        <Commands>
            <div className='custom-commands-title'>
                <FiRefreshCw className='refresh-icon' onClick={refreshCustomCommands} />
                <h3> Custom Commands </h3>
                <button className = 'see-commands-button' onClick={select}> See Commands </button>
            </div>
            {
                selected && <CommandList commands={ customCommands } handleClose = { handleClose } />
            }
            <AddCommand userData = { userData } refreshCommands = { refreshCustomCommands } token = { token } />
        </Commands>
    )
}

const mapStateToProps = state => {
    return({
        customCommands: state.customCommands
    })

}

export default connect(mapStateToProps, actions) (CustomCommands)


const Commands = styled.div`
    width: 500px;
    height: auto;
    font-family: ${pr => pr.theme.fonts.primary};
    margin: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    background: rgba(19, 19, 19, 1);
    box-shadow: 0px 0px 10px 0px ${pr => pr.theme.colors.secondary};
    color: white;

    .custom-commands-title {
        justify-content: space-around;
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid ${pr => pr.theme.colors.berry};

        & h3 {
            font-size: ${pr => pr.theme.fontSizes.medium};
            font-weight: bold;
            color: ${pr => pr.theme.colors.berry};
        }
    }

    .refresh-icon{
        font-size: ${pr => pr.theme.fontSizes.large};
        color: ${pr => pr.theme.colors.berry};
        cursor: pointer;
        
        &:hover{
            color: ${pr => pr.theme.colors.berry};
        }
    }




`