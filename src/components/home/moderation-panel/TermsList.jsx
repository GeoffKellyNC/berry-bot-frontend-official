import React from 'react'
import styled from 'styled-components'

const TermsList = ({blockedTerms}) => {
  return (
    <TermsListStyled>
      {
        blockedTerms.length > 0 ? blockedTerms.map(term => {
          return (
            <div key = {term.id} className='blocked-term'>
              <span className='term'>{term.text}</span>
            </div>
          )
        }) : 'No Blocked Terms'
      }
    </TermsListStyled>
  )
}

export default TermsList


const TermsListStyled = styled.div`
  .blocked-term {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid #e6e6e6;
  }



`