import React, { useState } from 'react'
import styled from 'styled-components'

import { startAd } from '../../util/commercial'


const Commercial = ({ token, userData}) => {
    const [ duration, setDuration ] = useState(30)


    const runAd = async () => {
        await startAd(token, userData.unx_id, userData.twitch_id, duration)
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
    </CommercialStyled>
  )
}

export default Commercial

const CommercialStyled = styled.div`
    width: 300px;
    height: 75px;
    font-family: ${pr => pr.theme.fonts.primary};
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid ${pr => pr.theme.colors.secondary};

    .commercial-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .commercial-title {
        font-size: ${pr => pr.theme.fontSizes.medium};
    }
    .commercial-config-form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid ${pr => pr.theme.colors.secondary};
    }



`