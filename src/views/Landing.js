import React from 'react'
import styled from 'styled-components'

import FeaturesGrid from '../components/landing-page/FeaturesGrid'
import LandingNav from '../components/landing-page/Landing.nav'




const Landing = ({ isLoggedIn }) => {
  console.log('isLoggedIn', isLoggedIn) // !REMOVE
  return (
    <LandingPage>
        <LandingNav isLoggedIn = { isLoggedIn } />
        <div className = 'landing-hero'>
        </div>
        <div className = 'landing-body'>
          <div className='grid-container'>
            <h1 className='features-title'>Features</h1>
            <FeaturesGrid />
          </div>
        </div>
    </LandingPage>
  )
}

export default Landing


const LandingPage = styled.div`
  overflow-x: hidden;
  background-color: #181818;


  .landing-hero {
    border-bottom: 1px solid red;
  }



  .landing-body {
    height: 100vh;
    top: 0;

  }

  .features-title {
    font-size: 5rem;
    font-family: ${pr => pr.theme.fonts.primary};
    text-shadow: 0 0 10px white;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 15rem;
  }




`