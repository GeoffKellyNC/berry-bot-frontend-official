import axios from 'axios'




export const setCommand = async (unx_id, token, commandData, refreshCb) => {
    await axios.post('https://twitch-berry-bot.herokuapp.com/twitchBot/createCommand', { data: {unx_id, token, commandData}})

    await refreshCb()
}