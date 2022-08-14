import axios from 'axios'


const pingServer =  async (unx_id, jwt) => {
    const res = await axios.post('http://localHost:9001/twitchBot/ping', {data: {unx_id, jwt, message: 'ping'}})
    return res.data.message === 'pong' ? true : false 
}


export default pingServer;