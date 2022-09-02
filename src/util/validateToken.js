import { verifyAccessToken, getAccessToken } from '../store/authState/authState.creators'


export const verificationTimer = async () => {
    setInterval( async () => {
        console.log('Verification Timer') //!REMOVE
        const userData = localStorage.getItem('user')
        console.log(userData) //!REMOVE
        const token = localStorage.getItem('jwtToken')
        const access_token = await getAccessToken(token, userData.unx_id, userData.twitch_user)
        const isVerified = verifyAccessToken(access_token, userData.twitch_user, userData.unx_id, token)

        console.log('isVerified: ', isVerified) //!REMOVE

        if(!isVerified){
            localStorage.clear()
            window.location = '/'
        }
        return
    }, 5000);


}