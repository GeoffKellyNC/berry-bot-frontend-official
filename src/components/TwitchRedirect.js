import React, { useEffect, useCallback }  from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../store/authState/authState.creators'
import styled from 'styled-components'

const TwitchRedirect = ({loginUser, refreshUserData, getAccessToken}) => {
    const [searchParams] = useSearchParams()

    const navigate = useNavigate()


    const handleRedirect = useCallback( async () => {
        const code = searchParams.get('code')
        await loginUser(code)
        await refreshUserData()
        const token = localStorage.getItem('jwtToken')
        const userData = JSON.parse(localStorage.getItem('user'))
        await getAccessToken(token, userData.unx_id, userData.twitch_user)
    },[searchParams, loginUser, refreshUserData, getAccessToken])


    useEffect(() => {
        handleRedirect()

    },[handleRedirect])

    setTimeout(() => {
        navigate('/dashboard')
    }, 3000);




  return (
    <Redirect>
        <h1>LOADING DATA....</h1>
    </Redirect>
  )
}

export default connect(null, actions)(TwitchRedirect)

const Redirect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-family: ${pr => pr.theme.fonts.primary};
    background: radial-gradient(circle,rgb(42 0 50) 0%,rgb(27 24 28) 70%);
    color: ${pr => pr.theme.colors.secondary};
    font-size: 5rem;
    animation: fadein 2s;

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }


`