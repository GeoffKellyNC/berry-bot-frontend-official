import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as authActions from '../../store/authState/authState.creators'

import { createClip } from '../../util/createClip'

const ClipIt = ({ userData }) => {
    const [clipLink, setClipLink] = useState(null)
    const [error, setError] = useState(null)


    const makeClip = async () => {
        const token = await localStorage.getItem('jwtToken')
        const clip = await createClip(token, userData.unx_id, userData.twitch_user, userData.twitch_id)
        if(clip.error){
            setError(clip.message)
        }

        setClipLink(clip.edit_url)
        setTimeout(() => {
            setError(null)
        }, 5000); //
    }


  return (
    <Clips>
        <button className='clip-button' onClick={makeClip}>
            CLIP IT
        </button>
        {
            clipLink && (
            <a href={clipLink} target='_blank' rel='noopener noreferrer'>
                CLICK TO EDIT CLIP
            </a>)
        }
        {
            error && (
            <div className='error'>
                {error}
            </div>)
        }
    </Clips>
  )
}

const mapStateToProps = state => {
    return({
        userData: state.userData
    })
}

export default connect(mapStateToProps, authActions) (ClipIt)


const Clips = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > a {
        color: ${pr => pr.theme.colors.berry};
        text-decoration: none;
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: bold;
        font-family: ${pr => pr.theme.fonts.primary};
        margin-top: 1rem;
        cursor: pointer;

        &:hover {
            color: ${pr => pr.theme.colors.secondary}; 
        }
    }

    .clip-button {
        width: 300px;
        height: 75px;
        background: ${pr => pr.theme.gradients.primary};
        border: none;
        outline: none;
        border-radius: 0.5rem;
        color: ${ pr => pr.theme.fontColors.primary };
        font-size: ${(pr) => pr.theme.fontSizes.large};
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
            &:hover {
            background-color: ${(pr) => pr.theme.colors.berry};
        }
  }

    .error {
        color: ${(pr) => pr.theme.colors.berry};
        font-size: ${(pr) => pr.theme.fontSizes.medium};
        font-weight: bold;
        font-family: ${(pr) => pr.theme.fonts.primary};
        margin-top: 1rem;
    }


`