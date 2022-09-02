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
        case types.DELETE_PLAYLIST: 
            return state.filter(playlist => playlist.playlist_id !== action.payload)
        default:
            return state
    }
}

export function playlistsSongs (state = [], action) {
    switch(action.type){
        case types.GET_PLAYLISTS_SONGS:
            return action.payload
        case types.DELETE_SONG_FROM_PLAYLIST:
            return state.filter(song => song.song_id !== action.payload)
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
