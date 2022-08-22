/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as action from '../../store/botState/botState.actions'

import { getUserData, getUserToken } from '../../util/localData'

import PointsMod5 from './Points-Mod-5'
import Banword from '../forms/Banword.form'

import { FiRefreshCw,  } from 'react-icons/fi'
import { TbSettings } from 'react-icons/tb'

import { setBannedWord } from '../../util/moderation'

const iFormValues = {
    word: '',
}

const ModerationPanel = (props) => {
    const { modPlayerPointData, getPlayerModPoints } = props
    const [ userData, setUserData ] = useState(getUserData())
    const [ formValues, setFormValues ] = useState(iFormValues)


    const onChangeBan = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }


    const onSubmitBan = async (e) => {
        e.preventDefault()
        const token = await getUserToken()
        setBannedWord(formValues.word, userData.unx_id, token)
        setFormValues(iFormValues)
        
    }





    useEffect(() => {
        getPlayerModPoints(userData.unx_id)
    }, [getPlayerModPoints, userData.unx_id])

    const refreshPoints = () => {
        getPlayerModPoints(userData.unx_id)
    }


  return (
    <ModPanel>
        <div className='mod-header'>
            <TbSettings className='mod-icon' />
            <h1 className='mod-panel-title'>Moderation Panel</h1>
            <FiRefreshCw className='refresh-icon' onClick={refreshPoints} />
        </div>
        <div className = 'mod-points'>
            <PointsMod5 pointData = { modPlayerPointData } />
        </div>
        <div className = 'mod-panel-bottom'>
            <Banword
                formValues = { formValues }
                onChange = { onChangeBan }
                onSubmit = { onSubmitBan }
            />
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
    min-width: 500px;
    height: auto;
    font-family: ${pr => pr.theme.fonts.primary};
    border-radius: 5px;
    box-sizing: border-box;
    background: rgba(19, 19, 19, 1);
    box-shadow: 0px 0px 10px 0px ${pr => pr.theme.colors.secondary};
    color: white;

    .mod-header{
        justify-content: space-around;
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid ${pr => pr.theme.colors.berry};

    }

    .mod-panel-title{
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: bold;
        color: ${pr => pr.theme.colors.berry};
        margin-bottom: 0.5rem;

    }

    .refresh-icon{
        font-size: ${pr => pr.theme.fontSizes.large};
        color: ${pr => pr.theme.colors.berry};
        cursor: pointer;
        
        &:hover{
            color: ${pr => pr.theme.colors.berry};
        }
    }

    .mod-icon{
        font-size: ${pr => pr.theme.fontSizes.large};
        color: ${pr => pr.theme.colors.secondary};
        cursor: pointer;

        &:hover{
            color: ${pr => pr.theme.colors.berry};
        }
    }


    @media(max-width: 520px){
        width: 50%;
    }

`