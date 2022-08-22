import axios from 'axios'


const pingServer =  async (unx_id, jwt) => {
    const res = await axios.post('https://twitch-berry-bot.herokuapp.com/twitchBot/ping', {data: {unx_id, jwt, message: 'ping'}})
    return res.data.message === 'pong' ? true : false 
}


export default pingServer;