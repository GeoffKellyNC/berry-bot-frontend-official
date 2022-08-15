import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import LogoutButton from '../../components/buttons/Logout.button'

import twitchLink from '../../util/twitchLink'

const LandingNav = ({ isLoggedIn }) => {

  async function onSubmit(e) {
    e.preventDefault()
    window.location.href = twitchLink

  }


  return (
    <StyledLandingNav>
          <div className = 'berry-logo-text-container'>
            <div className = 'berry-logo-text'>
              <h1>Berry</h1>
              <h1>Bot</h1>
            </div>
          </div>
          <div className = 'nav-links-container'>
            {
              isLoggedIn &&
              <>
                <NavLink to = '/dashboard' className = 'nav-link nav-dashboard'>
                  <span> DashBoard </span>
                </NavLink> 
                <LogoutButton />
              </>
            }
            {
              !isLoggedIn &&
              <>
              <button className = 'login-btn' onClick={onSubmit}>
                Login With Twitch
              </button>
                <NavLink to = '/about' className='nav-link nav-about'>
                    <span> About </span>
                </NavLink>
                <NavLink to = '/contact' className='nav-link nav-contact'>
                    <span> Contact </span>
                </NavLink>
              </>
            }


          </div>
    </StyledLandingNav>
  )
}

export default LandingNav

const StyledLandingNav = styled.div`
  color: white;
  font-family: ${pr => pr.theme.fonts.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  align-items: center;
  padding-top: 3rem;
  z-index: 22;
  position: relative;
  


  .berry-logo-text {
    display: flex;
  }

  .berry-logo-text h1 {
    font-size: ${pr => pr.theme.fontSizes.large};
    font-weight: bold;
    margin: 0;
    padding: 0;
    font-family: ${pr => pr.theme.fonts.primary};
  }

  .nav-links-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;    
  }


  .nav-link {
    text-decoration: none;
    color: white;
    font-size: ${pr => pr.theme.fontSizes.small};
    font-family: ${pr => pr.theme.fonts.primary};
    font-weight: bold;
    padding-left: 2rem;
    margin: 0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${pr => pr.theme.colors.primary};
    }
  }

  .login-btn {
    background-color: ${pr => pr.theme.colors.primary};
    color: white;
    font-size: ${pr => pr.theme.fontSizes.small};
    font-family: ${pr => pr.theme.fonts.primary};
    font-weight: bold;
    padding: 0.5rem;
    margin: 0;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${pr => pr.theme.colors.secondary};
    }

  }

`