import React, { useState } from 'react'
import styled from 'styled-components'

import { startAd } from '../../util/commercial'
import { connect } from 'react-redux'
import * as authActions from '../../store/authState/authState.creators'


const Commercial = ({userData}) => {
    const [ duration, setDuration ] = useState(30)
    const [ error, setError ] = useState(null)


    const runAd = async () => {
        const token = await localStorage.getItem('jwtToken')
       const ad =  await startAd(token, userData.unx_id, userData.twitch_id, duration)
         if(ad.error){
             setError(ad.message)
         }

    }

  return (
    <CommercialStyled>
        <div className='commercial-header'>
            <h1 className='commercial-title'>Commercial</h1>
        </div>
        <div className='commercial-config-form'>
            <label> Set Ad Duration </label>
            <select value={duration} 
                    onChange={(e) => setDuration(e.target.value)}>
                <option value={30}>30 Seconds</option>
                <option value={60}>60 Seconds</option>
                <option value={90}>90 Seconds</option>
                <option value={120}>120 Seconds</option>
            </select>
        </div>
        <div className='start-commercial-button'>
            <button onClick={ runAd }> Start Ad </button>
        </div>
        {error && <div className='error'>{error}</div>}
    </CommercialStyled>
  )
}


const mapStateToProps = state => {
    return({
        userData: state.userData
    })
}

export default connect(mapStateToProps, authActions) (Commercial)

const CommercialStyled = styled.div`
    width: 300px;
    height: auto;
    font-family: ${pr => pr.theme.fonts.primary};
    margin: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    background: ${pr => pr.theme.gradients.primary};

    .commercial-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
    .commercial-title {
        font-size: ${pr => pr.theme.fontSizes.large};
        text-align: center;
        color: ${pr => pr.theme.fontColors.primary};
        font-weight: bold;
    }
    .commercial-config-form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        & > label {
            font-size: ${pr => pr.theme.fontSizes.medium};
            font-weight: bold;
            color: ${pr => pr.theme.fontColors.primary};
            margin-bottom: 0.5rem;
        }

        & > select {
            font-size: ${pr => pr.theme.fontSizes.medium};
            font-weight: bold;
            color: ${pr => pr.theme.colors.secondary};
            margin-bottom: 0.5rem;
        }
    }

    .start-commercial-button button {
        width: 100%;
        padding: 10px;
        border: none;
        outline: none;
        background: ${pr => pr.theme.colors.white};
        color: ${pr => pr.theme.fontColors.secondary};
        font-size: ${pr => pr.theme.fontSizes.medium};
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
            background: ${pr => pr.theme.colors.berry};
            color: ${pr => pr.theme.colors.primary}
        }
    }

    .error {
        color: ${pr => pr.theme.colors.berry};
        font-size: ${pr => pr.theme.fontSizes.small};
        font-weight: bold;
        text-align: center;
        margin-top: 0.5rem;
    }



`