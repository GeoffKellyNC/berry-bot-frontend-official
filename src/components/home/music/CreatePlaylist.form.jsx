import React, { useState } from 'react'
import styled from 'styled-components'


const iFormValues = {
    playlist_name: ''
}

const bannedCharacters = ["'","!"]

const CreatePlaylist = ({ userData, createPlaylist, getUserPlaylists }) => {
    const [formValues, setFormValues] = useState(iFormValues)
    const [error, setError] = useState(null)

    const onSubmit = async (e) => {


        if (bannedCharacters.some(char => formValues.playlist_name.includes(char))){
            e.preventDefault()
            setError('Playlist name cannot contain any of the following characters: ' + bannedCharacters.join(', '))
            setFormValues(iFormValues)
            setTimeout(() => {
                setError(null)
            }, 3000);
            return
        }

        if (formValues.playlist_name.length < 1){
            e.preventDefault()
            setError('Playlist Must Have a Name!')
            setFormValues(iFormValues)
            setTimeout(() => {
                setError(null)
            }, 3000);
            return
        }

        if (formValues.playlist_name.length > 0){
            e.preventDefault()
            await createPlaylist(userData.unx_id, formValues.playlist_name)
            setFormValues(iFormValues)
            await getUserPlaylists(userData.unx_id)
            return
        }


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
            {
                error && <span className='error'>{error}</span>
            }
        </CreatePlaylistForm>
    )
}

export default CreatePlaylist

const CreatePlaylistForm = styled.form`
    & > input {
        color: ${pr => pr.theme.colors.secondary};
        padding: 10px;
        margin-bottom: 10px;
        width: 300px;
        box-sizing: border-box;
        font-size: ${pr => pr.theme.fontSizes.medium};
        height: 3rem;
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .error{
        font-size: ${pr => pr.theme.fontSizes.medium};
        color: ${pr => pr.theme.colors.berry};
    }

`