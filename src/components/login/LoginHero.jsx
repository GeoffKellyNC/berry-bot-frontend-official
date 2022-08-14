import React from 'react'
import styled from 'styled-components'

const LoginHero = () => {
  return (
    <Hero>
        <div className = 'hero-head-container'>
            <h1 className = 'hero-title'>Welcome to Berry Bot</h1>
        </div>
    </Hero>
  )
}

export default LoginHero


const Hero = styled.div`
    color: white;
    font-size: ${pr => pr.theme.fontSizes.heading};
    font-family: ${pr => pr.theme.fonts.primary};

    .hero-head-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    


`