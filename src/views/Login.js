import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../store/authState/authState.creators'
import axios from 'axios'

// Components
import LoginHero from '../components/login/LoginHero'

//assets
import loginBg from '../assets/login-bg.webp'

import twitchLink from '../util/twitchLink'





const Login = (props) => {
  const { loginUser } = props;

  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({login: false})

  const navigate = useNavigate()



  async function onSubmit(e) {
    e.preventDefault()
    window.location.href = twitchLink


  }

  return (
    <>
      <LoginStyled>
        <LoginHero />
        <button className = 'login-btn' onClick={onSubmit}>Login With Twitch</button>

          {
            errors.login &&
            <div className = 'error-container'>
              <span className = 'error'>Email and/or Password Incorrect</span>
            </div>
          }
      </LoginStyled>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    authState: state.authState
  }
}

export default connect(mapStateToProps, actions)(Login)


const LoginStyled = styled.div`
  background-image: url(${loginBg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .error-container {
    margin-top: 10px;
    font-size: ${pr => pr.theme.fontSizes.medium};
    color: ${pr => pr.theme.colors.berry};
  }
  



`