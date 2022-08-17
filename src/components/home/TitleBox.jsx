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
    height: auto;
    font-family: ${pr => pr.theme.fonts.primary};
    margin: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    background: rgba(19, 19, 19, 1);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

    .title-text {
        color: ${pr => pr.theme.colors.berry};
        font-size: ${pr => pr.theme.fontSizes.small};
        font-weight: bold;
        padding: 0.5rem 1rem;
        margin: 0;
        text-align: center;
    }


`