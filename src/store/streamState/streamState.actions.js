/* eslint-disable no-unused-vars */
import * as types from './streamState.types';
import axios from 'axios';


const STREAM_DATA_VIEWERS_EP = 'https://twitch-berry-bot.herokuapp.com1/channelData/viewers'


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