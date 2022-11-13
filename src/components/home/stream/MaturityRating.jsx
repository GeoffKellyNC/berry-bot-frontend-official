import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const MaturityRating = ({ streamData }) => {
  return (
    <MaturityRatingStyled>
        <span className='maturity-title'>Maturity Level: </span>
        {
            streamData ? <span>{!streamData.is_mature ? 'NOT MATURE': 'MATURE'}</span> : <span>OFFLINE</span>
        }
    </MaturityRatingStyled>
  )
}

const mapStateToProps = state => {
    return({
        streamData: state.streamData
    })
}

export default connect(mapStateToProps, null) (MaturityRating)

const MaturityRatingStyled = styled.div`
  font-family: ${pr => pr.theme.fonts.primary};
  font-size: ${pr => pr.theme.fontSizes.xlarge};


  .maturity-title {
    color: ${pr => pr.theme.colors.secondary};
  }


`