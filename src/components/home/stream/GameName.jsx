import React from 'react'
import { connect } from 'react-redux'

const GameName = ({ streamData }) => {
  return (
    <div>
        <span>Current Game: </span>
        {
            streamData ? <span>{streamData.game_name}</span> : <span>OFFLINE</span>
        }
    </div>
  )
}

const mapStateToProps = state => {
    return({
        streamData: state.streamData
    })
}

export default connect(mapStateToProps, null) (GameName)