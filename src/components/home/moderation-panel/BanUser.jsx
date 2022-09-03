import React, { useState } from 'react'
import styled from 'styled-components'

import { MdOutlineDownloadDone } from 'react-icons/md'

import { IoIosArrowDown } from "react-icons/io";
import { MdClose } from "react-icons/md";

const iFormValues = {
    userName: '',
    reason: '',
}

const BanUser = ({ token, userData}) => {
    const [ formValues, setFormValues ] = useState(iFormValues)
    const [ isOpen, setIsOpen ] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }


  return (
    <StyledBanUser>
        <div className='ban-user-header' onClick={() => setIsOpen(!isOpen)}>
            <h3> Ban User </h3>
            {
                !isOpen ? <IoIosArrowDown className="view-ban-icon" onClick={() => setIsOpen(!isOpen)} /> : <MdClose className="view-ban-icon" onClick={() => setIsOpen(!isOpen)} />
            }
        </div>
        {
            isOpen && (
                <form>
                    <input 
                        type="text"
                        placeholder='User Name'
                        name="userName" 
                        value={formValues.userName} 
                        onChange={ onChange } />
                    <input 
                        type="text" 
                        placeholder='Reason'
                        className='reason-input'
                        name="reason" 
                        value={formValues.reason} 
                        onChange={ onChange } />
                    <MdOutlineDownloadDone className='banUser-icon' onClick={onSubmit} />
                </form>
            )
        }
    </StyledBanUser>
  )
}

export default BanUser

const StyledBanUser = styled.div`


    & > form {
        display: flex;
        flex-direction: row;
        ${'' /* justify-content: space-between; */}
        align-items: center;
        margin-bottom: 1rem;
        padding: 0.5rem;
    }

    & > form > input {
        background: black;
        outline: none;
        border: none;
        color: white;
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: bold;
        width: 100%;
        height: 2rem;
    }

    & h3 {
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: bold;
        color: ${pr => pr.theme.colors.secondary};
        font-family: ${pr => pr.theme.fonts.primary};
        
    }

    .banUser-icon{
    font-size: 2rem;
    width: 2rem;
    color: ${pr => pr.theme.colors.berry};
    cursor: pointer;
    margin-left: 0.5rem;
    transition: color 0.2s ease-in-out;
    background: ${pr => pr.theme.colors.secondary};
    &:hover{
      color: ${pr => pr.theme.colors.green};
    }
  }

    .reason-input{
        width: 100%;
        margin-left: 0.5rem;
    }

    .ban-user-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid ${pr => pr.theme.colors.berry};
        cursor: pointer;
    }




`