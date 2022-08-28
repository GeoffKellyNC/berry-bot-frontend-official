import * as types from './musicState.types';



export function songsData(state = [], action) {
    switch(action.type){
        case types.GET_ALL_SONGS:
            return action.payload
        default:
            return state
    }
}


export function userPlaylists(state = [], action) {
    switch(action.type){
        case types.GET_USER_PLAYLISTS:
            return action.payload
        case types.ADD_PLAYLIST:
            return [...state, action.payload]
        default:
            return state
    }
}

export function playlistsSongs (state = [], action) {
    switch(action.type){
        case types.GET_PLAYLISTS_SONGS:
            return action.payload
        default:
            return state
    }
}

export function currentSong (state = '', action) {
    switch(action.type){
        case types.SET_CURRENT_SONG:
            return action.payload
        default:
            return state
    }
}
