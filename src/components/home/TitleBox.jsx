import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../store/authState/authState.creators'

import { GrStatusGoodSmall } from "react-icons/gr";
import { pingServer } from '../../util/pingServer'


import LogoutButton from '../buttons/Logout.button'

const TitleBox = ({ userData, refreshUserData }) => {
    const [isConnected, setIsConnected] = useState(false)

    const getServerStatus = async () => {
        const token = localStorage.getItem('jwtToken')
        const status = await pingServer(userData.unx_id, token)
        setIsConnected(status)

    }

    useEffect(() => {
        refreshUserData()
        getServerStatus()
        console.log('Getting user Data')
    }, [refreshUserData])
  return (
    <TitleBoxStyled>
        <h1 className='title-text'> Welcome <span>{ userData.user_name.toUpperCase() }</span></h1>
        <div className='status-box'>
            <span className='status-text'> Server Status: </span>
            <GrStatusGoodSmall className= {`status-icon ${isConnected ? "connected":"not-connected"}`} />
        </div>
        <div className='log-out-button'>
            <LogoutButton />
        </div>
    </TitleBoxStyled>
  )
}

const mapStateToProps = state => {
    return ({
        userData: state.userData
    })
}

export default connect(mapStateToProps, actions) (TitleBox)


const TitleBoxStyled = styled.div`
    min-width: 300px;
    height: auto;
    font-family: ${pr => pr.theme.fonts.primary};
    margin: 10px;
    ${'' /* border-radius: 5px; */}
    box-sizing: border-box;
    ${'' /* background: rgba(19, 19, 19, 1); */}
    ${'' /* box-shadow: 0px 0px 10px 0px ${pr => pr.theme.colors.secondary}; */}




    background: ${pr => pr.theme.gradients.primary};

    &:hover {
        box-shadow: 0px 0px 20px 0px ${pr => pr.theme.colors.secondary};
    }

    .title-text {
        color: ${pr => pr.theme.colors.berry};
        font-size: ${pr => pr.theme.fontSizes.large};
        font-weight: bold;
        padding: 0.5rem 1rem;
        margin: 0;
        text-align: center;

        & > span {
            color: ${pr => pr.theme.colors.secondary};
        }
    }

    .log-out-button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 1rem;
        margin: 0;
        text-align: center;
    }

    .status-icon {
        font-size: ${pr => pr.theme.fontSizes.medium};
    }

    .status-text {
        color: ${pr => pr.theme.colors.berry};
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: bold;
        padding: 0.5rem 1rem;
        margin: 0;
        text-align: center;
    }

    .connected{
        color: ${pr => pr.theme.colors.green};
    }

    .not-connected{
        color: ${pr => pr.theme.colors.berry};
    }


`