


export const getUserData = () => {
    const userData = JSON.parse(localStorage.getItem('user'))
    return userData
}

export const getTargetLocal = () => {
    const target = JSON.parse(localStorage.getItem('user')).twitch_user
    return target
}

