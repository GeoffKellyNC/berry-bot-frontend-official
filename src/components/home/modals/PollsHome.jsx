import React, {useState} from 'react'
import styled from 'styled-components'

import CreatePollForm from '../../forms/CreatePoll.form'

import { postPoll } from '../../../util/pollFunctions'

import { AiOutlineClose } from 'react-icons/ai'



const iFormValues = {
    bitVote: 0,
    channelPoints: 0,
    choiceArray: '',
    duration: 30,
    title: ''


}

const PollsHome = ({ userData, target, token, setSelected }) => {
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
    const newChoiceArray = choiceArray.split('&')
    const newPoll = await postPoll(target, userData.unx_id, token, bitVote, channelPoints, newChoiceArray, duration, title )
    setSelected(null)
    setFormValues(iFormValues)
    return newPoll
  }


  return (
    <StyledPoll>
        <CreatePollForm formValues = {formValues} onChange = { onChange } onSubmit = { onSubmit } />
        <AiOutlineClose className = 'close-button' onClick = { () => setSelected(null) } />
    </StyledPoll>
  )
}

export default PollsHome


const StyledPoll = styled.div`
  color: white; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  background: rgb(0,185,255);
  background: linear-gradient(180deg, rgba(0,185,255,1) 0%, rgba(24,24,24,1) 3%, rgba(46,46,46,1) 97%, rgba(0,185,255,1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  border-radius: 5px;
  border: 1px solid black;
  text-align: center;
  font-size: 1.5rem;
  z-index: 10;

  .close-button {
    color: white;
    font-size: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;

    &:hover {
      color: rgb(0,185,255);
    }
  }


`