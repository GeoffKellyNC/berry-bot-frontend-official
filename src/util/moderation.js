import axios from 'axios';




export const setBannedWord = async (word, unx_id, token) => {
    try {
        const res = await axios.post('http://localhost:9001/twitchBot/setBannedWord', {
            word,
            unx_id,
            token
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}