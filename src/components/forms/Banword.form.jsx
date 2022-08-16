import React from 'react'
import styled from 'styled-components'

import { MdOutlineDownloadDone } from 'react-icons/md'



const Banword = ({ formValues, onChange, onSubmit}) => {
  return (
    <BanwordInput>
      <input 
        type='text'
        name='word'
        placeholder='Enter word to Ban'
        value={formValues.word}
        onChange={onChange}
        className='banword-input'
      />
      <MdOutlineDownloadDone className='banword-icon' onClick={onSubmit} />
    </BanwordInput>
  )
}

export default Banword


const BanwordInput = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;


  .banword-input{
    background: black;
    outline: none;
    border: none;
    color: white;
    font-size: ${pr => pr.theme.fontSizes.medium};
    font-weight: bold;
    padding: 0.5rem;
    width: 100%;
  }

  .banword-icon{
    font-size: 2rem;
    color: ${pr => pr.theme.colors.berry};
    cursor: pointer;
    margin-left: 0.5rem;
    transition: color 0.2s ease-in-out;
    background: ${pr => pr.theme.colors.secondary};
    &:hover{
      color: ${pr => pr.theme.colors.green};
    }
  }
`