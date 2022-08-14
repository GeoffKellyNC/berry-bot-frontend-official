import React from 'react'
import styled from 'styled-components'





const RegisterForm = (props) => {
    const { handleSubmit, handleChange, formValues } = props

    return (
        <RegistrationForm>
            <label className='userName-text'>User Name</label>
            <input 
                type = 'text'
                name = 'userName'
                placeholder='User Name'
                value={formValues.userName}
                onChange = {handleChange}
            />
            <label className='firstName-text'>First Name</label>
            <input 
                type='text'
                name='firstName'
                placeholder='First Name'
                value={formValues.name}
                onChange={handleChange}
            />
            <label className='lastName-text'>Last Name</label>
            <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={formValues.lastName}
                onChange={handleChange}
            />
            <label className='email-text'>Email</label>
            <input
                type='text'
                name='email'
                placeholder='Email'
                value={formValues.email}
                onChange={handleChange}
            />
            <label className='twitch-text'>Twitch</label>
            <input
                type='text'
                name='twitchChannel'
                placeholder='Twitch Channel'
                value={formValues.twitchChannel}
                onChange={handleChange}
            />
            <label className='password-text'>Password</label>
            <input
                type = 'password'
                name = 'password'
                placeholder='Password'
                value={formValues.password}
                onChange={handleChange}
                />
            <label className='confirmPassword-text'>Confirm Password</label>
            <input
                type = 'password'
                name = 'confirmPassword'
                placeholder='Confirm Password'
                value={formValues.confirmPassword}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
        </RegistrationForm>
    )
}

export default RegisterForm


const RegistrationForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

`