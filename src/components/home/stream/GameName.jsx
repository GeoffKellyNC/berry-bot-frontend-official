import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const GameName = ({ streamData }) => {
  return (
    <GameNameStyled>
        <span className = 'current-game-title'>Current Game: </span>
        {
            streamData ? <span>{streamData.game_name}</span> : <span>OFFLINE</span>
        }
    </GameNameStyled>
  )
}

const mapStateToProps = state => {
    return({
        streamData: state.streamData
    })
}

export default connect(mapStateToProps, null) (GameName)


const GameNameStyled = styled.div`
  font-family: ${pr => pr.theme.fonts.primary};
  font-size: ${pr => pr.theme.fontSizes.xlarge};
  margin: 1rem 0;

  .current-game-title {
    color: ${pr => pr.theme.colors.secondary};
  }
`