import * as types from './botState.types'
import axios from 'axios'

const START_BOT_EP = 'https://twitch-berry-bot.herokuapp.com/twitchBot/start'
const START_MOD_EP = 'https://twitch-berry-bot.herokuapp.com/twitchBot/startModeration'
const PLAYER_POINTS_EP = 'https://twitch-berry-bot.herokuapp.com/twitchBot/modPointData'
const KILL_BOT_EP = 'https://twitch-berry-bot.herokuapp.com/twitchBot/killBot'




export const startBerry = (target, unx_id, jwt, message) => async (dispatch) => {
    try{
        const res = await axios.post(START_BOT_EP, { data: { target, unx_id, jwt, message } })

        if (res.status === 200 || 'ok'){
            dispatch({
                type: types.START_BOT,
                payload: true
            })
        }

        return res.status

    } catch(err){
        console.log(err)
    }
}

export const killBot = (target, unx_id, jwt, message) => async (dispatch) => {
    try {
        const killres =await axios.post(KILL_BOT_EP, { data: {target, unx_id, jwt, message}})
        if (killres === 200 || 'ok'){
            dispatch({
                type: types.KILL_BOT,
                payload: false
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const startModeration = (target, unx_id, jwt, message) => async (dispatch) => {
    try{
        const res = await axios.post(START_MOD_EP, { data: { target, unx_id, jwt, message } })
        return res.status

    } catch(err){
        console.log(err)
    }
}


export const getPlayerModPoints = (unx_id) => async (dispatch) => {
    try {
        const res = await axios.get(`${PLAYER_POINTS_EP}/${unx_id}`)
        const data = res.data.message
        if (data.length > 0) {
            dispatch({
                type: types.GET_PLAYER_POINT_DATA,
                payload: data
            })
        }
        if (data.length === 0) {
            dispatch({
                type: types.GET_PLAYER_POINT_DATA,
                payload: []
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const getChatSettings = (token, unx_id, id, target) => async (dispatch) => {
    try {
        const res = await axios.post(`https://twitch-berry-bot.herokuapp.com/twitchBot/getChatSettings`, { data: { token, unx_id, id, target } })
        const chatSettings = res.data.message.data[0]
        dispatch({
            type: types.GET_CHAT_SETTINGS,
            payload: chatSettings
        })
    } catch (error) {
        console.log(error)
    }
}

export const getCustomCommands = (token, unx_id) => async (dispatch) => {
    try {
        const commands = await axios.post('https://twitch-berry-bot.herokuapp.com/twitchBot/getCustomCommands', { data : { token, unx_id}})
        dispatch({
            type: types.GET_CUSTOM_COMMANDS,
            payload: commands.data.message
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAutoModSettings = (token, userObj) => async (dispatch) => {
    try {
        const res = await axios.post('https://twitch-berry-bot.herokuapp.com/twitchBot/getAutoModSettings', { data : { token, userObj}})
        dispatch({
            type: types.GET_CURRENT_AUTO_MOD_SETTINGS,
            payload: res.data.message
        })
    } catch (error) {
        console.log(error)
    }
}


