import React from 'react'
import styled from 'styled-components'

const ViewerCount = ({viewCount}) => {

  return (
    <CurrentViewers>
        <span className='current-viewers-text'> Viewers: </span>
        <span> {viewCount} </span>
    </CurrentViewers>
  )
}

export default ViewerCount


const CurrentViewers = styled.div`
  display: flex;
  font-family: ${pr => pr.theme.fonts.primary};
  font-size: ${pr => pr.theme.fontSizes.xlarge};
  gap: 1rem;

  .current-viewers-text {
    color: ${pr => pr.theme.colors.secondary};
  }

`