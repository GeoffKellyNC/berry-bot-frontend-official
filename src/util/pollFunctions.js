import axios from 'axios'

const POST_POLL_EP = 'https://twitch-berry-bot.herokuapp.com/twitchBot/startPoll'
export const postPoll = (target, unx_id, jwt, bitVote, channelPoints, choiceArray, duration, title) => {
    const res = axios.post(POST_POLL_EP,{data: {target, unx_id, jwt, bitVote, channelPoints, choiceArray, duration, title}})
    if (res.status === 200) {
        return res.data
    }
    if (res.status === 500) {
        return res.data
    }

}