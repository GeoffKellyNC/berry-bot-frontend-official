/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../store/streamState/streamState.actions'

import { getUserData } from '../../util/localData'


const StatsPanel = (props) => {
  const { currentViewCount, getViewerCount, userData, authData, target } = props



  useEffect(() => {
    getViewerCount(userData.unx_id, 'viewers', target, authData.jwt)
  },[])

  // setInterval(() => {
  //     getViewerCount(userData.unx_id, 'viewers', target, authData.jwt)
  //   }, 60000); // every minute


  
  return (
    <Stats>
        <h1> Channel Stats </h1>
        <span>Current View Count: {currentViewCount}</span>
    </Stats>
  )
}

const mapStateToProps = state => {
  return({
    currentViewCount: state.currentViewCount
  })
}

export default connect(mapStateToProps, actions)(StatsPanel)


const Stats = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    font-family: ${pr => pr.theme.fonts.primary};
    background: rgb(105 3 165 / 12%);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    margin: 2rem 0;

`