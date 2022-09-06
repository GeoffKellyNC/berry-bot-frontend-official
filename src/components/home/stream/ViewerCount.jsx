import React from 'react'
import styled from 'styled-components'

const ViewerCount = ({viewCount}) => {

  return (
    <CurrentViewers>
        <span> Viewers: { viewCount } </span>
    </CurrentViewers>
  )
}

export default ViewerCount


const CurrentViewers = styled.div`


`