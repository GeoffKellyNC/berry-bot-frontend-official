/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../store/authState/authState.creators'

import ModerationPanel from '../components/home/ModerationPanel'
import ButtonPanel from '../components/control-panel/ButtonPanel'
import TitleBox from '../components/home/TitleBox'
import TestModal from '../components/home/modals/TestModal'
import TwitchChat from '../components/iframe/TwitchChat'



function Home(props) {
  const [selected, setSelected] = useState(null)





  const handelSelection = (selection) => {
    switch (selection){
      case 'test': {
        setSelected('test')
        break
      }
      default:
        return 'default'
    }
  }

  const target = 'rhyeznc'




  return (
    <HomeStyled>
      {
        selected === 'test' && <TestModal setSelected = { setSelected } />
      }
      <div className='home-body'>
        <div className = 'column-1'>
          <TitleBox />
          <ButtonPanel />
          <ModerationPanel />
        </div>
        <div className = 'column-2'>
          <TwitchChat target = { target } />
        </div>
      </div>
    </HomeStyled>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    modPlayerPointData: state.modPlayerPointData
  }
}

export default connect(mapStateToProps, actions)(Home)

const HomeStyled = styled.div`
  height: 100vh;
  background: rgb(0,185,255);
  background: linear-gradient(180deg, rgba(0,185,255,1) 0%, rgba(24,24,24,1) 3%, rgba(46,46,46,1) 97%, rgba(0,185,255,1) 100%);

  .home-body {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 5rem;
  }

  .column-1 {
    display: flex;
    padding-top: 5%;
    flex-direction: column;

  }

  .column-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
  }

  .test-modal {
    background: rgb(0,185,255);
    background: linear-gradient(180deg, rgba(0,185,255,1) 0%, rgba(24,24,24,1) 3%, rgba(46,46,46,1) 97%, rgba(0,185,255,1) 100%);
    width: 50%;
    height: 25vh;
    margin: 0 auto;
    padding: 2%;
    border-radius: 5px;
    border: 1px solid black;
    text-align: center;
    font-size: 1.5rem;
  }


`