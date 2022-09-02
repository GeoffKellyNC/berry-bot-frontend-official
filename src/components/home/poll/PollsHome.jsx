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
    const token = await localStorage.getItem('jwtToken')
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  border: 1px solid ${pr => pr.theme.colors.berry};
  text-align: center;
  font-size: 1.5rem;
  z-index: 10;
  height: auto;
  font-family: ${pr => pr.theme.fonts.primary};
  border-radius: 5px;
  box-sizing: border-box;
  background: rgba(19, 19, 19, 1);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

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