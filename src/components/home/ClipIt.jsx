import React, { useState } from 'react'
import styled from 'styled-components'

import { createClip } from '../../util/createClip'

const ClipIt = ({ userData, token}) => {
    const [clipLink, setClipLink] = useState(null)
    const [error, setError] = useState(null)


    const makeClip = async () => {
        const clip = await createClip(token, userData.unx_id, userData.twitch_user, userData.twitch_id)
        if(clip.error){
            setError(clip.message)
        }

        setClipLink(clip.edit_url)
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

export default ClipIt


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
        background: rgba(19, 19, 19, 1);
        box-shadow: 0px 0px 10px 0px ${pr => pr.theme.colors.secondary};
        border: none;
        outline: none;
        border-radius: 0.5rem;
        color: ${(pr) => pr.theme.colors.berry};
        font-size: ${(pr) => pr.theme.fontSizes.large};
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
            &:hover {
            background-color: ${(pr) => pr.theme.colors.berry};
            color: ${(pr) => pr.theme.colors.secondary};
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