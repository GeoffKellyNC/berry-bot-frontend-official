import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as streamActions from '../../../store/streamState/streamState.actions'
import styled from 'styled-components'

import { AiTwotoneEdit } from 'react-icons/ai'

const StreamTitle = ({streamData, updateTitle, userData, accessToken}) => {
    const [formValues, setFormValues] = useState({ title: streamData.title})
    const [isEditing, setIsEditing] = useState(false)
    const [token] = useState(localStorage.getItem('jwtToken'))

    const onChange = e => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const onClear = e => {
        e.preventDefault()
        setFormValues({title: ''})
    }

    const onSubmit = async e => {
        e.preventDefault()
        const newTitle = formValues.title
        await updateTitle(token, userData.unx_id, userData.twitch_user, accessToken, userData.twitch_id, newTitle )
        setFormValues({ title: streamData.title})
        setIsEditing(false)
    }

    return (
        <StreamTitleStyled >
                <span className='current-stream-text'>Stream Title: </span>
                {
                    !isEditing ?(
                        <div className='title-text-container'>
                            <span className='current-stream-title'> {!streamData ? 'OFFLINE': streamData.title} </span>
                            {
                                streamData ? <AiTwotoneEdit className='edit-title-btn' onClick = {() => setIsEditing(!isEditing) }>Edit</AiTwotoneEdit> :
                                null
                            }
                        </div>
                        ) :
                    
                        <form onSubmit={onSubmit}>
                            <input 
                                type = 'text'
                                value = { formValues.title }
                                onChange = {onChange}
                                name = 'title'
                                className='change-stream-title-input'
                            />
                            <button onClick={onClear}>Clear</button>
                            <button type = 'submit'>Change</button>
                        </form>
                }
        </StreamTitleStyled>
    )
}

const mapStateToProps = state => {
    return({
        streamData: state.streamData,
        userData: state.userData,
        accessToken: state.accessToken
    })
}

export default connect(mapStateToProps, streamActions) (StreamTitle)

const StreamTitleStyled = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 1rem;
    font-size: ${pr => pr.theme.fontSizes.large};

    .edit-title-btn {
        font-size: ${pr => pr.theme.fontSizes.large};
        color: ${pr => pr.theme.colors.secondary};
        cursor: pointer;

        &:hover {
            color: ${pr => pr.theme.colors.primary};
        }
    }

    



`