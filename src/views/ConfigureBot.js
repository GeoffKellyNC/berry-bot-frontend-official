import React from 'react'
import { connect } from 'react-redux'
import * as botActions from '../store/botState/botState.actions'
import styled from 'styled-components'

// Imported Components
import Nav from '../components/nav/Nav'

const ConfigureBot = ({ isLoggedIn, checkLoggedIn, setTarget }) => {

  return (
    <>
      <Nav isLoggedIn = { isLoggedIn } checkLoggedIn = { checkLoggedIn } />
      <Configure>
    </Configure>
    </>
  )
}

const mapStateToProps = (state) => {
    return {
        currentTarget: state.currentTarget
    }
}

export default connect(mapStateToProps, botActions)(ConfigureBot)


const Configure = styled.div`
    max-width: 85%;
    margin: 0 0 0 auto;

`