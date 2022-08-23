/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import styled from 'styled-components'

import { setCommand } from '../../../util/addCommand'



const iFormValue = {
    command_name: '',
    command_action: '',
    command_desc: '',
    chat_command: '',
}
const AddCommand = ({ userData, refreshCommands, token}) => {
    const [ formValues, setFormValues ] = useState(iFormValue)

    const onChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(formValues)
        const commandData = {
            command_name: formValues.command_name,
            command_action: formValues.command_action,
            command_desc: formValues.command_desc,
            chat_command: formValues.chat_command,
        }
        await setCommand(userData.unx_id, token, commandData,refreshCommands )
    }

    return (
    <form>
        <label className='command-name'> Command Name: </label>
        <input
            type='text'
            name='command_name'
            value={formValues.command_name}
            onChange={onChange}
            className='command-name'
        />
        <label className='command-action'> Command Action: </label>
        <input
            type='text'
            name='command_action'
            value={formValues.command_action}
            onChange={onChange}
            className='command-action'
        />
        <label className='command-desc'> Command Description: </label>
        <input
            type='text'
            name='command_desc'
            value={formValues.command_desc}
            onChange={onChange}
            className='command-desc'
        />
        <label className='command-chat'> Command Chat: </label>
        <input
            type='text'
            name='chat_command'
            value={formValues.chat_command}
            onChange={onChange}
            className='command-chat'
        />
        <button className='add-command-button' onClick={onSubmit}> Add Command </button>
    </form>
    )
}

export default AddCommand
