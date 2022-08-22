import axios from 'axios';






export const createClip = async (token, unx_id, target, id) => {
    const res = await axios.post('https://twitch-berry-bot.herokuapp.com/twitchBot/createClip', { data : {
        token, unx_id, target, id
    }})
    console.log('Should Be error', res.data.message)

    return res.data.message


}