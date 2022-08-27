import React, { useState } from 'react'
import styled from 'styled-components'


const iFormValues = {
    playlist_name: ''
}

const CreatePlaylist = ({ userData, createPlaylist, getUserPlaylists }) => {
    const [formValues, setFormValues] = useState(iFormValues)

    const onSubmit = async (e) => {
        e.preventDefault()
        await createPlaylist(userData.unx_id, formValues.playlist_name)
        setFormValues(iFormValues)
        await getUserPlaylists(userData.unx_id)
    }
    
    return (
        <form>
            <input 
                type = 'text'
                name = 'playlist_name'
                value = {formValues.playlist_name}
                onChange = {(e) => setFormValues({...formValues, [e.target.name]: e.target.value})}
                className = 'playlist-name'
            />
            <button onClick = {onSubmit}> Create Playlist </button>
        </form>
    )
}

export default CreatePlaylist