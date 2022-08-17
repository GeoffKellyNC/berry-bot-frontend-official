/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect }  from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../store/authState/authState.creators'

const TwitchRedirect = ({loginUser}) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const navigate = useNavigate()


    const handleRedirect = async () => {
        const code = searchParams.get('code')
        await loginUser(code)

    }

    useEffect(() => {
        handleRedirect()
    },[])

    setTimeout(() => {
        navigate('/dashboard')
    }, 1500);




  return (
    <div>TwitchRedirect</div>
  )
}

export default connect(null, actions)(TwitchRedirect)