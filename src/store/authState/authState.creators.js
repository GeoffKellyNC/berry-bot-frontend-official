/* eslint-disable no-unused-vars */
import * as types from './authState.types';
import axios from 'axios'


export const loginUser = (code) => async (dispatch) => {
    try{
        const res = await axios.post('https://twitch-berry-bot.herokuapp.com/users/login', { data : { code } })
        const { jwtToken, userData, access_token } = res.data
        localStorage.setItem('jwtToken', jwtToken)
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('target', userData.twitch_user)
        sessionStorage.setItem('access_token', access_token)

        // verificationTimer()

        const data = {
            jwtToken,
            userData
        }

        dispatch({
            type: types.GET_ACCESS_TOKEN,
            payload: access_token
        })

        dispatch({
            type: types.SET_USER_DATA,
            payload: data
        })
        

        
    }catch(err){
        console.log(err)
    }
}

export const refreshUserData = () => async (dispatch) => {
    try{
        const data = localStorage.getItem('user')
        dispatch({
            type: types.SET_USER_DATA,
            payload: JSON.parse(data)
        })
    }catch(err){
        console.log(err)
    }
}


export const logoutUser = () => async (dispatch) => {
    try{
        localStorage.clear()
        dispatch({
            type: types.SET_USER_DATA,
            payload: null
        })
        dispatch({
            type: types.LOG_OUT
        })
    }catch(err){
        console.log(err)
    }
}

export const checkLoggedIn = () => async (dispatch) => {
    try{
        const token = localStorage.getItem('jwtToken')
        if (token){
            dispatch({
                type: types.IS_LOGGED_IN,
                payload: true
            })
        }else{
            dispatch({
                type: types.IS_LOGGED_IN,
                payload: false
            })
        }
    }catch(err){
        console.log(err)
    }
}

export const getAccessToken = (token, unx_id, target) => async (dispatch) => {
    try {
        const getRes = await axios.post('https://twitch-berry-bot.herokuapp.com/users/getAccessToken', { data: {token, unx_id, target}})

        const access_token = getRes.data.message

        sessionStorage.setItem('access_token', access_token)

        dispatch({
            type: types.GET_ACCESS_TOKEN,
            payload: access_token
        })
        dispatch({
            type: types.SET_TWITCH_VERIFIED,
            payload: true
        })

    } catch (error) {
        console.log(error)
    }
}


export const verifyAccessToken = (access_token, userName, unx_id, token, twitchId) => async (dispatch) => {
    try {
        const veriRes = await axios.post('https://twitch-berry-bot.herokuapp.com/users/verifyAccess', { data: { access_token, userName, unx_id, token, twitchId }})

        console.log('veriRes Status: ', veriRes.status)

        if (veriRes.status === 200){
            const data = veriRes.data.message
            dispatch({
                type: types.SET_TWITCH_VERIFIED,
                payload: data.verified
            })
            dispatch({
                type: types.SET_EXPIRE_TIME,
                payload: data.data.expires_in
            })
            return true
        }

        if (veriRes.status === 401) {
            console.log('Access token is invalid') //!REMOVE
        }
    } catch (error) {
        dispatch({
            type: types.SET_TWITCH_VERIFIED,
            payload: false
        })
        return false
    }
}