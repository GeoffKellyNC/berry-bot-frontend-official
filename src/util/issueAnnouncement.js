import axios from 'axios'




// token, unx_id, target, userId, text

const issueAnnouncement = async (text, unx_id, target,userId) => {
    const token = localStorage.getItem('jwtToken')
    
    await axios.post('https://twitch-berry-bot.herokuapp.com/twitchBot/issueAnnouncement', { data: {token, unx_id, target, userId, text }})
}


export default issueAnnouncement