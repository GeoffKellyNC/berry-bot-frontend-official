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
        <CreatePlaylistForm>
            <input 
                type = 'text'
                name = 'playlist_name'
                value = {formValues.playlist_name}
                onChange = {(e) => setFormValues({...formValues, [e.target.name]: e.target.value})}
                className = 'playlist-name'
            />
            <button onClick = {onSubmit}> Create Playlist </button>
        </CreatePlaylistForm>
    )
}

export default CreatePlaylist

const CreatePlaylistForm = styled.form`
    & > input {
        background: black;
        color: ${pr => pr.theme.colors.secondary};
        border: none;
        border-bottom: 1px solid ${pr => pr.theme.colors.berry};
        padding: 10px;
        margin-bottom: 10px;
        width: auto;
        box-sizing: border-box;
        font-size: 1.5rem;
        height: 3rem;
    }

`