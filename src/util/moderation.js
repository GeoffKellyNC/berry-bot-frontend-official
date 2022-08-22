import axios from 'axios';




export const setBannedWord = async (word, unx_id, token) => {
    try {
        const res = await axios.post('https://twitch-berry-bot.herokuapp.com/twitchBot/setBannedWord', {
            word,
            unx_id,
            token
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}