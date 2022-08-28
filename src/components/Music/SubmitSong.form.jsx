import React, { useState } from 'react'
import styled from 'styled-components'

const iFormValues = {
    link: '',
    artist_name: '',
    song_name: '',
    terms: false,
}

// artists_name, song_name, song_link, status, user_agreement

const SubmitSong = ({ userData, addSong }) => {
    const [formValues, setFormValues] = useState(iFormValues)



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
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addSong({
            artist_name: formValues.artist_name,
            song_name: formValues.song_name,
            song_link: formValues.link,
            status: 'pending',
            user_agreement: formValues.terms === 'on' ? 1 : 0,
        })
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
            name='song_name'
            placeholder='Song Title'
            value={formValues.song_name}
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