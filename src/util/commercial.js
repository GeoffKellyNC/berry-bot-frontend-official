import axios from 'axios';



export const startAd = async (token, unx_id, channel_id, duration) => {
    try {
        const target = localStorage.getItem('target');
        const res = await axios.post('http://localhost:9001/twitchBot/runAd', {
            token,
            unx_id,
            channel_id,
            duration,
            target
        })
        const resMessage = res.data.message;
        return resMessage;
    } catch (error) {
        console.log(error)
    }
}