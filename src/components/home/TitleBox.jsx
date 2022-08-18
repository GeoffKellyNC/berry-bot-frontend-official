import React from 'react'
import styled from 'styled-components'

import LogoutButton from '../buttons/Logout.button'

const TitleBox = ({ userData }) => {
  return (
    <TitleBoxStyled>
        <h1 className='title-text'>Welcome <span>{ userData.user_name}</span> to Berry Bot </h1>
        <div className='log-out-button'>
            <LogoutButton />
        </div>
    </TitleBoxStyled>
  )
}

export default TitleBox


const TitleBoxStyled = styled.div`
    min-width: 300px;
    height: auto;
    font-family: ${pr => pr.theme.fonts.primary};
    margin: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    background: rgba(19, 19, 19, 1);
    box-shadow: 0px 0px 10px 0px ${pr => pr.theme.colors.secondary};

    .title-text {
        color: ${pr => pr.theme.colors.berry};
        font-size: ${pr => pr.theme.fontSizes.large};
        font-weight: bold;
        padding: 0.5rem 1rem;
        margin: 0;
        text-align: center;

        & > span {
            color: ${pr => pr.theme.colors.secondary};
        }
    }

    .log-out-button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 1rem;
        margin: 0;
        text-align: center;
    }


`