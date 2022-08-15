import React from 'react'
import styled from 'styled-components'

import LogoutButton from '../buttons/Logout.button'

const TitleBox = () => {
  return (
    <TitleBoxStyled>
        <h1 className='title-text'>Welcome to the Bot Control Panel</h1>
        <LogoutButton />
    </TitleBoxStyled>
  )
}

export default TitleBox


const TitleBoxStyled = styled.div`
    width: 300px;
    height: 100px;
    font-family: ${pr => pr.theme.fonts.primary};
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid ${pr => pr.theme.colors.secondary};
    margin: 10px;

    .title-text {
        color: ${pr => pr.theme.colors.berry};
        font-size: ${pr => pr.theme.fontSizes.small};
        font-weight: bold;
        padding: 0.5rem 1rem;
        margin: 0;
        text-align: center;
    }


`