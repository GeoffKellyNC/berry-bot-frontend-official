import axios from 'axios'



export const pingServer = async (unx_id, jwt) => {
    const message = 'ping'
    const res = await axios.post('https://twitch-berry-bot.herokuapp.com/twitchBot/ping', { data: { unx_id, jwt, message } })

    return res.data.message = 'pong' ? true : false

}



