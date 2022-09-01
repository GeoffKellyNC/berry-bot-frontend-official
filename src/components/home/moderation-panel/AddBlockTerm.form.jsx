import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as botActions from '../../../store/botState/botState.actions'

const AddBlockTerm = ({ userData, addBlockedTerm }) => {
    const [formValues, setFormValues] = useState({text: ''})

    const onChange = (e) =>{
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) =>{
        e.preventDefault()
        console.log(formValues)
        const token = localStorage.getItem('jwtToken')
        const userId = userData.unx_id
        const target = userData.twitch_user
        const twitchId = userData.twitch_id 
        const term = formValues.text
        await addBlockedTerm(token, userId, target, twitchId, term)
        setFormValues({ text: ''})

    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input 
                type='text' 
                placeholder='Enter Term or Phrase to block'
                name = 'text'
                value = {formValues.text}
                onChange = { onChange }
                className = 'blocked-term-form'
            />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

const mapStateToProps = state => {
    return({
        userData: state.userData
    })
}

export default connect(mapStateToProps, botActions) (AddBlockTerm)