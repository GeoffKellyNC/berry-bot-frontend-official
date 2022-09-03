import React, { useState } from 'react'
import issueAnnouncement from '../../../util/issueAnnouncement'
import styled from 'styled-components'
import { connect } from 'react-redux'


import { IoIosArrowDown } from "react-icons/io";
import { MdClose } from "react-icons/md";


const ChatAnnouncement = ({ userData }) => {
    const [ formValues, setFormValues ] = useState({ message: ''})
    const [showForm, setShowForm] = useState(false)

    const onChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }


    const onSubmit = async e => {
      e.preventDefault()
      const text = formValues.message
      await issueAnnouncement(text, userData.unx_id, userData.twitch_user, userData.twitch_id )
      setFormValues({ message: ''})

    }


    return (
      <AnnouncementStyled>
        <div className='announcement-header' onClick={() => setShowForm(!showForm)}>
          <span className='announcement-text'>Issue Announcement</span>
          {
            showForm ? <MdClose className='announcement-icon' /> : <IoIosArrowDown className='announcement-icon' />
          }
        </div>
        {
          showForm && (
            <div className='announcement-form'>
            <form onSubmit={onSubmit}>
              <input 
                type = 'text'
                name = 'message'
                className='announcement-input'
                onChange={onChange}
                value = { formValues.message }
              />
              <button type='submit' className='announcement-submit'>Send Announcement</button>
            </form>
          </div>
          )
        }
      </AnnouncementStyled>
    )
}

const mapStateToProps = state => {
  return({
    userData: state.userData
  })
}

export default connect(mapStateToProps, null) (ChatAnnouncement)

const AnnouncementStyled = styled.div`

  .announcement-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    color: ${pr => pr.theme.fontColors.primary};

    & > span {
        font-size: ${pr => pr.theme.fontSizes.large};
        font-weight: bold;
        color: ${pr => pr.theme.colors.secondary};
        font-family: ${pr => pr.theme.fonts.primary};

    }
  }


`