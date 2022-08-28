/* eslint-disable no-unused-vars */
import * as types from './musicState.types'
import axios from 'axios'




export const getAllSongs = () => async (dispatch) => {
    try {
        const songsRes = await axios.get('https://twitch-berry-bot.herokuapp.com/music/getAllSongs')
        dispatch({
            type: types.GET_ALL_SONGS,
            payload: songsRes.data.message
        })
    } catch (error) {
        console.log(error)
    }
}


export const addSong = (songObj) => async (dispatch) => {
    try {
        const postSong = await axios.post('https://twitch-berry-bot.herokuapp.com/music/postNewSong', { data: songObj})

    } catch (error) {
        console.log(error)
    }
}

export const setCurrentSong = (link) => async (dispatch) => {
    try {
        dispatch({
            type: types.SET_CURRENT_SONG,
            payload: link
        })
    } catch (error) {
        console.log(error)
    }
}


export const createPlaylist =  (user_unx_id, playlist_name ) => async (dispatch) => {
    try {
        const newPlaylistData = await axios.post('https://twitch-berry-bot.herokuapp.com/music/createPlaylist', { data: { user_unx_id, playlist_name }})
        dispatch({
            type: types.ADD_PLAYLIST,
            payload: newPlaylistData
        })
    } catch (error) {
        console.log(error)
    }
}

export const getUserPlaylists = (unx_id) => async (dispatch) => {
    try {
        const userPlaylistData = await axios.post('https://twitch-berry-bot.herokuapp.com/music/getUserPlaylist', { data: { unx_id }})
        dispatch({
            type: types.GET_USER_PLAYLISTS,
            payload: userPlaylistData.data.message
        })

    } catch (error) {
        console.log(error)
    }
}


export const addSongToPlaylist = (song_id, playlist_id) => async (dispatch) => {
    try {
        const addSongToPlaylistData = await axios.post('https://twitch-berry-bot.herokuapp.com/music/addSongToPlaylist', { data: { song_id, playlist_id }})


    } catch (error) {
        console.log(error)
    }
}


export const getPlaylistSongs = (playlist_id) => async (dispatch) => {
    try {
        const playlistSongsData = await axios.post('https://twitch-berry-bot.herokuapp.com/music/getPlaylistSongs', { data: { playlist_id }})
        dispatch({
            type: types.GET_PLAYLISTS_SONGS,
            payload: playlistSongsData.data.message
        })
        

        return playlistSongsData.data.message
    } catch (error) {
        console.log(error)
    }
}