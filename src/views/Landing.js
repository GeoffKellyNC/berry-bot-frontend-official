import React from 'react'
import styled from 'styled-components'

import FeaturesGrid from '../components/landing-page/FeaturesGrid'
import LandingNav from '../components/landing-page/Landing.nav'




const Landing = ({ isLoggedIn }) => {
  return (
    <LandingPage>
        <LandingNav isLoggedIn = { isLoggedIn } />
        <div className = 'landing-hero'>
            <h1> Please Excuse the Mess. This app is still in its early stages and is considered still in Beta. Not all features are available as of yet.</h1>
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
    color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5rem 0;
    font-size: ${props => props.theme.fontSizes.heading};
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

  .under-development h1 {
    font-size: 2rem;
    font-family: ${pr => pr.theme.fonts.primary};
    color: ${pr => pr.theme.colors.berry};
  }




`