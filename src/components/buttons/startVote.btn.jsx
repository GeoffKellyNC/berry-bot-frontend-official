import React from 'react'
import styled from 'styled-components'

import { GiVote } from 'react-icons/gi'

const startVoteBtn = ({ startVote }) => {

    const handleClick = () => {
        startVote()
    }


  return (
    <StartVote>
        <GiVote onClick={handleClick} className = 'vote-btn' />
        <span className='start-vote-text'>Start Vote</span>
    </StartVote> 
  )
}

export default startVoteBtn


const StartVote = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    


    .vote-btn{
      color: white;
      font-size: 2rem;
      transition: all 0.3s ease-in-out;

      &:hover{
          cursor: pointer;
          color: ${pr => pr.theme.colors.secondary};
      }

      &:onClick{
          cursor: pointer;
          transform: scale(1.1);
      }
    }

    .start-vote-text{
      font-size: ${pr => pr.theme.fontSizes.medium};
      padding: 0.5rem;
      color: ${pr => pr.theme.colors.berry};
    }

`