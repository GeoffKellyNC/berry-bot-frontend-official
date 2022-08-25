import React, { useState } from 'react'
import styled from 'styled-components'

const iFormValues = {
    link: '',
    artist_name: '',
    song_title: '',
    terms: false,
    for_twitch: false,
    twitch_channel:''
}

const SubmitSong = ({ userData }) => {
    const [formValues, setFormValues] = useState(iFormValues)


    console.log('Music Form UserData: ', userData)

    const onChange = (e) => {
        if (e.target.name === 'terms') {
            if (e.target.checked) {
                setFormValues({
                    ...formValues,
                    [e.target.name]: !e.target.checked
                })
            }
            if (!e.target.checked) {
                setFormValues({
                    ...formValues,
                    [e.target.name]: formValues.terms
                })
            }
        }

        if (e.target.name === 'for_twitch') {
            if (e.target.checked) {
                setFormValues({
                    ...formValues,
                    [e.target.name]: true
                })
            }
            if (!e.target.checked) {
                setFormValues({
                    ...formValues,
                    [e.target.name]: formValues.for_twitch
                })
            }
        }
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
        setFormValues(iFormValues)
    }


  return (

    <form>
        <input
            type='text'
            name='link'
            placeholder='Link'
            value={formValues.link}
            onChange={onChange}
         />
        <input 
            type='text'
            name='artist_name'
            placeholder='Artist Name'
            value={formValues.artist_name}
            onChange={onChange}
        />
        <input 
            type='text'
            name='song_title'
            placeholder='Song Title'
            value={formValues.song_title}
            onChange={onChange}
        />
        <input 
            type='text'
            name='twitch_channel'
            placeholder='Twitch Channel'
            value={formValues.twitch_channel}
            onChange={onChange}
        />
        <label className='twitch-label'> For Twitch: </label>
        <input 
            type='checkbox'
            name='for_twitch'
            placeholder='For Twitch'
            defaultChecked={formValues.for_twitch}
            onChange={onChange}
        />
        <label className='terms-label'> Terms: </label>
        <input
            type='checkbox'
            name='terms'
            placeholder='Terms'
            defaultChecked={formValues.terms}
            onChange={onChange}
        />
        <button onClick={onSubmit}>Submit</button>
    </form>
  )
}

export default SubmitSong