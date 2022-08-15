import React from 'react'
import { connect } from 'react-redux'
import * as action from '../../store/authState/authState.creators'
import styled from 'styled-components'
import { useNavigate  } from 'react-router'

const LogoutButton = (props) => {
    const { logoutUser } = props

    const navigate = useNavigate()

    const handleLogout = async () => {
        await logoutUser()
        navigate('/')
        
    }



  return (
    <LogOutButton onClick = { handleLogout } className = 'logout-btn'>
        LogOut
    </LogOutButton>
  )
}

const mapStateToProps = state => {
  return({
    isLoggedIn: state.isLoggedIn
  })
}

export default connect (mapStateToProps, action)(LogoutButton)


const LogOutButton = styled.button`
    background-color: ${pr => pr.theme.colors.secondary};
    color: ${pr => pr.theme.colors.primary};
    font-size: ${pr => pr.theme.fontSizes.small};
    font-weight: bold;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: ${pr => pr.theme.colors.berry};
        color: ${pr => pr.theme.colors.secondary};
    }

    


`