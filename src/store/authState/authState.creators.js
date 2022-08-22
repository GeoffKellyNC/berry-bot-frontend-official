import * as type from './authState.types';
import axios from 'axios'


export const loginUser = (code) => async (dispatch) => {
    try{
        const res = await axios.post('https://twitch-berry-bot.herokuapp.com/users/login', { data : { code } })
        const { jwtToken, userData } = res.data
        localStorage.setItem('jwtToken', jwtToken)
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('target', userData.twitch_user)
        const data = {
            jwtToken,
            userData
        }
        dispatch({
            type: type.SET_USER_DATA,
            payload: data
        })
        return res.status
        
    }catch(err){
        console.log(err)
    }
}

export const refreshUserData = () => async (dispatch) => {
    try{
        const data = localStorage.getItem('user')
        dispatch({
            type: type.SET_USER_DATA,
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
            type: type.SET_USER_DATA,
            payload: null
        })
        dispatch({
            type: type.LOG_OUT
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
                type: type.IS_LOGGED_IN,
                payload: true
            })
        }else{
            dispatch({
                type: type.IS_LOGGED_IN,
                payload: false
            })
        }
    }catch(err){
        console.log(err)
    }
}