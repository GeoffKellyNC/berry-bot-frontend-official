/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as action from '../../store/botState/botState.actions'

import { getUserData } from '../../util/localData'

import PointsMod from './Points-Mod'

const ModerationPanel = (props) => {
    const { modPlayerPointData, getPlayerModPoints } = props

    const [ userData, setUserData ] = useState(getUserData())





    useEffect(() => {
        getPlayerModPoints(userData.unx_id)
    }, [getPlayerModPoints, userData.unx_id])

    const refreshPoints = () => {
        getPlayerModPoints(userData.unx_id)
    }


  return (
    <ModPanel>
        <div className='mod-header'>
            <h1>Moderation Panel</h1>
            <button className = 'refresh-mod-btn' onClick={refreshPoints}>Refresh</button>
        </div>
        <div className = 'mod-points'>
            <PointsMod pointData = { modPlayerPointData } />
        </div>
    </ModPanel>
  )
}

const mapStateToProps = (state) => {
    return {
        modPlayerPointData: state.modPlayerPointData
    }
}

export default connect(mapStateToProps, action)(ModerationPanel)



const ModPanel = styled.div`
    width: 300px;
    height: 300px;
    font-family: ${pr => pr.theme.fonts.primary};
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid ${pr => pr.theme.colors.secondary};
    margin: 10px;

    .mod-points{
    }

    .refresh-mod-btn{
        background: rgba(255, 183, 3, 0.35);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 183, 3, 1);
        color: ${props => props.theme.colors.white};
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: bold;
        padding: 5px;
        margin: 5px;
        cursor: pointer;
        outline: none;
        transition: all 0.2s ease-in-out;
        &:hover{
            color: ${props => props.theme.colors.white};
            background: rgba(255, 3, 148, 0.41);
            border-radius: 5px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(4.9px);
            -webkit-backdrop-filter: blur(4.9px);
            border: 1px solid rgba(255, 3, 148, 1);
        }
    }

`