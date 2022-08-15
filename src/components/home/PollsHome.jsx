import React, {useState} from 'react'
import styled from 'styled-components'

import CreatePollForm from '../forms/CreatePoll.form'

import { postPoll } from '../../util/pollFunctions'



const iFormValues = {
    bitVote: 0,
    channelPoints: 0,
    choiceArray: '',
    duration: 30,
    title: ''


}

const PollsHome = ({ userData, target, token }) => {
  const [formValues, setFormValues] = useState(iFormValues)

  const onChange = e =>{
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })

  }

  const onSubmit = async e => {
    e.preventDefault()
    const {bitVote, channelPoints, choiceArray, duration, title} = formValues
    console.log('formValues', formValues) // !REMOVE
    const newChoiceArray = choiceArray.split('&')
    console.log('PollsHome.js New Array: ',newChoiceArray) //! Remove
    const newPoll = await postPoll(target, userData.unx_id, token, bitVote, channelPoints, newChoiceArray, duration, title )
    return newPoll
  }


  return (
    <StyledPoll>
        <CreatePollForm formValues = {formValues} onChange = { onChange } onSubmit = { onSubmit } />
    </StyledPoll>
  )
}

export default PollsHome


const StyledPoll = styled.div`
  color: white; 


`