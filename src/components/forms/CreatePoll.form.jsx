import React from 'react'

const CreatePollForm = ({ formValues, onChange, onSubmit}) => {



  return (
    <form>
        <label className='poll-title-text'>Poll Title</label>
        <input 
            type = 'text'
            name = 'title'
            value = { formValues.title}
            onChange = { onChange }
            className = 'poll-title-input'
        />
        <label className='poll-bit-text' title='How many bits it will cost to participate. Leave plank to disable'>Bits: </label>
        <input 
            type = 'number'
            name = 'bitVote'
            value = { formValues.bitVote }
            onChange = { onChange }
            className = 'poll-bit-input'
        />
        <label className='poll-cPoint-text' title = 'How many channel points it will cost to participate. Leave blank to disable'> Channel Points: </label>
        <input 
            type = 'number'
            name = 'channelPoints'
            value = { formValues.channelPoints }
            onChange = { onChange }
            className = 'poll-cPoint-input'
        />
        <label className = 'poll-set-choice-text' title='Input Choices seperated by & symbol'>Poll Choices. Separate each choice with & symbol:</label>
        <input
            type = 'textarea'
            name = 'choiceArray'
            value = { formValues.choiceArray }
            onChange = { onChange }
            className = 'poll-set-choice-input'
        />
        <label className = 'poll-duration-text' title='How long the poll will last in seconds. '>Duration: </label>
        <input
            type = 'number'
            name = 'duration'
            value = { formValues.duration }
            onChange = { onChange }
            className = 'poll-duration-input'
        />
        <button onClick = { onSubmit } className = 'poll-submit-button'>Submit</button>
    </form>
  )
}

export default CreatePollForm