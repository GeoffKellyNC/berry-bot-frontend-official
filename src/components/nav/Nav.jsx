/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect } from 'react'
import styled from 'styled-components'


// Icons Import 
import { AiOutlineDashboard } from 'react-icons/ai'
import {BsNewspaper} from 'react-icons/bs'
import {IoIosHelpBuoy} from 'react-icons/io'
import {MdQueuePlayNext} from 'react-icons/md'
import {TbSettings} from 'react-icons/tb'
import {VscDebugConsole} from 'react-icons/vsc'
import { BiBot } from 'react-icons/bi'



import { getUserData } from '../../util/localData'


import { NavLink } from 'react-router-dom'
import LogoutButton from '../buttons/Logout.button'

function Nav({ isLoggedIn, checkLoggedIn  } ) {
    const [userData, setUserData] = useState({})
    console.log('Nav is Showing!')


useEffect(() => {
    checkLoggedIn()
    setUserData(getUserData())
}, [])

  return (
    <StyledNav>
      <div className = 'top-nav'>
        <div className = 'reg-login-nav'>
          {
            isLoggedIn ? <LogoutButton /> : null
          }
          <span className = 'signed-in-as'> {isLoggedIn ? userData.user_name : null} </span>
        </div>
      </div>
        {
            isLoggedIn ?

        <>
            <div className = 'nav-container top-border'>
                <AiOutlineDashboard className='nav-icon' />
                <NavLink className = ' nav-home' to="/dashboard">Dashboard</NavLink>
            </div>

            <div className = 'nav-container'>
                <BsNewspaper className='nav-icon' />
                <NavLink className=' nav-log' to="/logs">Logs</NavLink>
            </div>

            <div className = 'nav-container'>
                <MdQueuePlayNext className='nav-icon' />
                <NavLink className=' nav-queue' to="/queue">Queue</NavLink>
            </div>

            <div className = 'nav-container'>
                <TbSettings className='nav-icon' />
                <NavLink className=' nav-config' to="/configure">Configure Bot</NavLink>
            </div>

            <div className='nav-container'>
                <VscDebugConsole className='nav-icon' />
                <NavLink className=' nav-commands' to="/commands">Commands</NavLink>
            </div>

            <div className='nav-container'>
                <IoIosHelpBuoy className='nav-icon' />
                <NavLink className=' nav-help' to="/help">Help</NavLink>
            </div> 
            <div className = 'nav-container'>
              <BiBot className='nav-icon' />
              <NavLink className=' nav-bot' to="/">Landing</NavLink>
            </div>
        </>: null
        }

    </StyledNav>
  )
}


export default Nav

const StyledNav = styled.div`
  display: block;
  position: absolute;
  width: 15%;
  height: 50%;
  top: 25%;
  background: rgb(40 19 71 / 100%);
  box-shadow: 0 0.75rem 2rem 0 rgb(0 0 0 / 10%);
  font-family: ${pr => pr.theme.fonts.primary};
  border-radius: 16px;

  a{
    text-decoration: none;
    color: white;
  }

  .logo{
    width: 5em;
    margin-right: 1em;
    
  }

  .nav-container{
    display: flex;
    align-items: center;
    padding: 10px;
    text-decoration: none;
    ${'' /* border: 1px solid black; */}
    color: red;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: start;

  }

  .nav-container:hover, a:hover{
    background-color: ${pr => pr.theme.colors.secondary};
  }

  .nav-icon{
    margin-right: 1em;
    color: white;
    width: 1.5em;
    height: auto;
    color: white;
  }


  .top-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: ${pr => pr.theme.colors.primary};
    font-size: 1.2rem;
    font-weight: bold;
    text-align: start;
    color: white;
    border-rad
  }





`