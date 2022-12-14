/* eslint-disable no-unused-vars */
import * as types from './authState.types';
import * as botStateTypes from '../botState/botState.types';
import axios from 'axios'

const START_BOT_EP = 'https://twitch-berry-bot.herokuapp.com/twitchBot/start'
const LOGIN_EP = process.env.REACT_APP_LOGIN

export const loginUser = (code) => async (dispatch) => {
    try{
        const res = await axios.post('https://twitch-berry-bot.herokuapp.com/users/login', { data : { code } })
        const { jwtToken, userData, access_token } = res.data
        localStorage.setItem('jwtToken', jwtToken)
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('target', userData.twitch_user)
        sessionStorage.setItem('access_token', access_token)

        await axios.post(START_BOT_EP, { data: { target: userData.twitch_user, unx_id: userData.unx_id, jwt: jwtToken, message: 'startBot'}})

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

        dispatch({
            type: botStateTypes.START_BOT,
            payload: true
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
    console.log('Logging Out')
    try{
        const userData = JSON.parse(localStorage.getItem('user'))
        const jwtToken = localStorage.getItem('jwtToken')
        await axios.post(START_BOT_EP, { data: { target: userData.twitch_user, unx_id: userData.unx_id, jwt: jwtToken, message: 'kill'}})

        localStorage.clear()
        sessionStorage.clear()
        dispatch({
            type: types.SET_USER_DATA,
            payload: null
        })
        dispatch({
            type: types.LOG_OUT
        })
        return

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
                payload: true
            })
            dispatch({
                type: types.SET_EXPIRE_TIME,
                payload: data.data.expires_in
            })
            return true
        }

        if (veriRes.status === 401) {
            console.log('Access token is invalid') //!REMOVE
            dispatch({
                type: types.SET_TWITCH_VERIFIED,
                payload: false
            })
            return false
        }
    } catch (error) {
        dispatch({
            type: types.SET_TWITCH_VERIFIED,
            payload: false
        })
        return false
    }
}