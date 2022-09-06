import React from 'react'
import { connect } from 'react-redux'

const MaturityRating = ({ streamData }) => {
  return (
    <div>
        <span>Maturity Level: </span>
        {
            streamData ? <span>{!streamData.is_mature ? 'NOT MATURE': 'MATURE'}</span> : <span>OFFLINE</span>
        }
    </div>
  )
}

const mapStateToProps = state => {
    return({
        streamData: state.streamData
    })
}

export default connect(mapStateToProps, null) (MaturityRating)