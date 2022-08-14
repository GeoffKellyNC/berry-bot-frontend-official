import axios from 'axios'

const POST_POLL_EP = 'http://localHost:9001/twitchBot/startPoll'
export const postPoll = (target, unx_id, jwt, bitVote, channelPoints, choiceArray, duration, title) => {
    console.log('Poll Functions Data: ', target, unx_id, jwt, bitVote, channelPoints, choiceArray, duration, title)
    const res = axios.post(POST_POLL_EP,{data: {target, unx_id, jwt, bitVote, channelPoints, choiceArray, duration, title}})
    if (res.status === 200) {
        return res.data
    }
    if (res.status === 500) {
        console.log('Server Error') //! REMOVE
        return res.data
    }

}