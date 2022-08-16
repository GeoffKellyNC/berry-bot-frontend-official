import axios from 'axios';



export const startAd = async (token, unx_id, channel_id, duration) => {
    try {
        const target = localStorage.getItem('target');
        const res = axios.post('http://localhost:9001/twitchBot/runAd', {
            token,
            unx_id,
            channel_id,
            duration,
            target
        })
    } catch (error) {
        console.log(error)
    }
}