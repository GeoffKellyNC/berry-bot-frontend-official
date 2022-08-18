import axios from 'axios';






export const createClip = async (token, unx_id, target, id) => {
    const res = await axios.post('http://localhost:9001/twitchBot/createClip', { data : {
        token, unx_id, target, id
    }})
    console.log('Should Be error', res.data.message)

    return res.data.message


}