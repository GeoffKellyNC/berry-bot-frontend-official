import React from 'react'
import styled from 'styled-components'

// Icons

import { GiConsoleController} from 'react-icons/gi' // Controller Icon
import { MdSecurity, MdOutlineAddModerator } from 'react-icons/md' // Security Icon , Moderator Icon
import { FaTwitch } from 'react-icons/fa' // Twitch Icon
import { SiLogstash } from 'react-icons/si' // Logs Icon
import { VscDebugConsole } from 'react-icons/vsc' // Console Icon

const FeaturesGrid = () => {
  return (
    <Grid className = 'box-grid'>
        <div className="div1 box">
            <GiConsoleController className = 'icon icon-controller'/>
            <h1>Complete Control</h1>
            <p>Have complete control over the bot and your chat. Code Included!</p>
        </div>
        <div className="div2 light"> 
            <MdSecurity className = 'icon icon-security'/>
            <h1>Secure</h1>
            <p>No 3rd party sign in's. We don't sell your data. No personal info needed.</p>
        </div>
        <div className="div3 box">
            <FaTwitch className = 'icon icon-twitch'/>
            <h1>Multiple Channels</h1>
            <p>Connect Berry Bot to any or multiple twitch channel's! Make custom functions</p>
        </div>
        <div className="div4 light">
            <MdOutlineAddModerator className = 'icon icon-moderator'/>
            <h1>Custom Moderation</h1>
            <p>Enable Moderation on your channel. Keep your channel safe. Automatic punishments.</p> 
        </div>
        <div className="div5 box">
            <SiLogstash className = 'icon icon-logs'/>
            <h1>Channel Logs</h1>
            <p>Keep Detailed logs of your chats. Export chat logs and other data.</p>
        </div>
        <div className="div6 light">
            <VscDebugConsole className = 'icon icon-console'/>
            <h1>Full Console</h1>
            <p>Keep Track of what is going on in the console. Control Berry Bot's main features and backend with the console.</p>
        </div>
    </Grid>
  )
}

export default FeaturesGrid

const Grid = styled.div`
    color: white;
    margin-top: 12rem;
    display: grid;
    grid-template-columns: 400px 400px 400px;
    grid-template-rows: 300px 300px;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    justify-items: stretch;
    justify-content: center;
    align-items: stretch;

    & div {
        font-family: ${pr => pr.theme.fonts.primary};
    }

    & div h1 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    & div p {
        text-align: center;
        font-size: 1.5rem;
    }
    

   .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.7);
        color: black; 
        transition: all 0.3s ease-in-out;
        &:hover {
            background-color: rgba(255, 255, 255, 0.9);
            color: black;
            transform: scale(1.1);
        }

        & h1 {
            border-bottom: 3px solid black;
        }
   }

   .light{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease-in-out;
        
        &:hover {
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            transform: scale(1.1);
        }

        & h1 {
            border-bottom: 3px solid white;
        }
   }

    .icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

   
    
`