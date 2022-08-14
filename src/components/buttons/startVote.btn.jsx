import React from 'react'
import styled from 'styled-components'

const startVoteBtn = ({ startVote }) => {

    const handleClick = () => {
        startVote()
    }


  return (
    <StartVote
        onClick={handleClick}> Start Vote </StartVote>
  )
}

export default startVoteBtn


const StartVote = styled.button`
      background-color: ${props => props.theme.colors.secondary};
    border: none;
    color: ${props => props.theme.colors.white};
    font-size: ${pr => pr.theme.fontSizes.medium};
    font-weight: bold;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
    }
    

`