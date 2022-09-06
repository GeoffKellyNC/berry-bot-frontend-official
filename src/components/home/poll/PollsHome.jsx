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

const PollsHome = ({ userData, target, setSelected }) => {
  const [formValues, setFormValues] = useState(iFormValues)
  const [error, setError] = useState(null)

  const onChange = e =>{
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })

  }

  const onSubmit = async e => {
    e.preventDefault()
    const {bitVote, channelPoints, choiceArray, duration, title} = formValues
    if (title === '' || choiceArray === ''){
      setError('Please fill out all fields')
      return
    }
    const newChoiceArray = choiceArray.split('&')
    const token = await localStorage.getItem('jwtToken')
    const newPoll = await postPoll(target, userData.unx_id, token, bitVote, channelPoints, newChoiceArray, duration, title )
    setSelected(null)
    setFormValues(iFormValues)
    return newPoll
  }


  return (
    <StyledPoll>
        <CreatePollForm formValues = {formValues} onChange = { onChange } onSubmit = { onSubmit } error = {error} />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  text-align: center;
  font-size: 1.5rem;
  z-index: 10;
  height: auto;
  font-family: ${pr => pr.theme.fonts.primary};
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);


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