
import * as types from './streamState.types';
import axios from 'axios';


const STREAM_DATA_VIEWERS_EP = 'https://twitch-berry-bot.herokuapp.com/channelData/viewers'
const STREAM_DATA_EP = 'https://twitch-berry-bot.herokuapp.com/channelData/streamData'
const UPDATE_TITLE_EP = 'https://twitch-berry-bot.herokuapp.com/channelData/updateStreamTitle'


export const getViewerCount = (unx_id, type, target, jwt) => async (dispatch) => {
    try {
        const res = await axios.post(STREAM_DATA_VIEWERS_EP, { data: { unx_id, type, target, jwt } })
        const data = res.data.message
        if (data > 0) {
            dispatch({
                type: types.GET_VIEWER_COUNT,
                payload: data
            })
        }
        if (data <= 0 || isNaN(data)) {
            dispatch({
                type: types.GET_VIEWER_COUNT,
                payload: 0
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const getStreamData = (token, unx_id, twitchId, access_token, target) => async (dispatch) => {
    console.log('Getting Stream Data....')
    try {
        const streamDataRes = await axios.post(STREAM_DATA_EP, { data: { token, unx_id, twitchId, access_token, target } })

        const streamData = streamDataRes.data.message

        console.log('Steamstate.actions Stream Data', streamData) //!REMOVE

        if(!streamData){
            dispatch({
                type: types.GET_STREAM_DATA,
                payload: false
            })
            return
        }

        dispatch({
            type: types.GET_STREAM_DATA,
            payload: streamData
        })


    } catch (error) {
        
    }
}

export const updateTitle = (token, unx_id, target, access_token, twitchId, newTitle ) => 
async (dispatch) => {
    try {
        const res = await axios.post(UPDATE_TITLE_EP, { data: { token, unx_id, target, access_token, twitchId, newTitle } })

        dispatch({
            type: types.SET_NEW_TITLE,
            payload: newTitle
        })

        return res.data.message

    } catch (error) {
        console.log(error)
    }
}

