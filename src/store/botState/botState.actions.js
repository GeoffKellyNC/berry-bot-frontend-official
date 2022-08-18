import * as types from './botState.types'
import axios from 'axios'

const START_BOT_EP = 'http://localhost:9001/twitchBot/start'
const START_MOD_EP = 'http://localHost:9001/twitchBot/startModeration'
const PLAYER_POINTS_EP = 'http://localHost:9001/twitchBot/modPointData'




export const startBerry = (target, unx_id, jwt, message) => async (dispatch) => {
    try{
        const res = await axios.post(START_BOT_EP, { data: { target, unx_id, jwt, message } })
        return res.status

    } catch(err){
        console.log(err)
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
        const res = await axios.post(`http://localhost:9001/twitchBot/getChatSettings`, { data: { token, unx_id, id, target } })
        const chatSettings = res.data.message.data[0]
        dispatch({
            type: types.GET_CHAT_SETTINGS,
            payload: chatSettings
        })
    } catch (error) {
        console.log(error)
    }
}

