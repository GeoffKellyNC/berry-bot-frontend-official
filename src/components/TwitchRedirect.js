import React, { useEffect, useCallback }  from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../store/authState/authState.creators'

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
    }, 2500);




  return (
    <div>TwitchRedirect</div>
  )
}

export default connect(null, actions)(TwitchRedirect)