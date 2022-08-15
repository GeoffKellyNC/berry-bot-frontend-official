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
import PollsHome from '../components/home/PollsHome'



function Home(props) {
  const [selected, setSelected] = useState(null)

  const { userData, refreshUserData } = props

  useEffect(() => {
    refreshUserData()
  }, [])





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



  console.log(userData.profile_image_url)

  return (
    <HomeStyled>
      <div className = 'profile-information'>
        <div className = 'profile-image'>
          <img src={userData.profile_img} alt='profile-pic'/>
          <span className='profile-name'>{userData.twitch_user}</span>
        </div>
      </div>
      <div className='home-body'>
        <div className = 'column-1'>
          <TitleBox />
          <ButtonPanel />
          <ModerationPanel />
          <PollsHome target = { userData.twitch_user } userData = { userData }  />
        </div>
        <div className = 'column-2'>
          <TwitchChat target = { userData.twitch_user } />
        </div>
      </div>
    </HomeStyled>
  )
}

const mapStateToProps = (state) => {
  return {
        userData: state.userData
  }
}

export default connect(mapStateToProps, actions)(Home)

const HomeStyled = styled.div`
  height: 100vh;
  background: rgb(0,185,255);
  background: linear-gradient(180deg, rgba(0,185,255,1) 0%, rgba(24,24,24,1) 3%, rgba(46,46,46,1) 97%, rgba(0,185,255,1) 100%);

  .profile-information {
    display: flex;
    margin-top: 20px;
    color: white;
    font-size: ${pr => pr.theme.fontSizes.medium};
    width: 95%;
    margin-left: auto;
  }

  .profile-image img{
    width: 50px;
    height: 50px;
  }

  .profile-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: white;
    width: 100px;
    height: 100px;
    overflow: hidden;
  }

  .home-body {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 5rem;
  }

  .column-1 {
    display: flex;
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