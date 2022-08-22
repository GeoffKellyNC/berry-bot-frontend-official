import axios from 'axios'




export const setCommand = async (unx_id, token, commandData, refreshCb) => {
    await axios.post('http://localhost:9001/twitchBot/createCommand', { data: {unx_id, token, commandData}})

    await refreshCb()
}