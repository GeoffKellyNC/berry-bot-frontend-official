import React, { useState } from 'react'
import styled from 'styled-components'

import { startAd } from '../../util/commercial'


const Commercial = ({ token, userData}) => {
    const [ duration, setDuration ] = useState(30)
    const [ error, setError ] = useState(null)


    const runAd = async () => {
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

export default Commercial

const CommercialStyled = styled.div`
    width: 300px;
    height: auto;
    font-family: ${pr => pr.theme.fonts.primary};
    margin: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    background: rgba(19, 19, 19, 1);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

    .commercial-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
    .commercial-title {
        font-size: ${pr => pr.theme.fontSizes.medium};
        text-align: center;
        color: ${pr => pr.theme.colors.secondary};
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
            color: ${pr => pr.theme.colors.secondary};
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
        background: ${pr => pr.theme.colors.secondary};
        color: ${pr => pr.theme.colors.white};
        font-size: ${pr => pr.theme.fontSizes.small};
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.2s ease-in-out;
        &:hover {
            background: ${pr => pr.theme.colors.berry};
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