import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../store/authState/authState.creators'


import RegisterForm from '../components/forms/Register.form'


const initialFormValues = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    twitchChannel: '',
}

const Register = (props) => {

    const { registerUser } = props;

    const [formValues, setFormValues] = useState(initialFormValues)
    const [errors, setErrors] = useState()

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(formValues.password !== formValues.confirmPassword) {
            setErrors({
                password: 'Passwords do not match'
            })
        }else {
            const userData = {
                userName: formValues.userName,
                email: formValues.email,
                password: formValues.password,
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                twitchChannel: formValues.twitchChannel,
            }
            await registerUser(userData)
            navigate('/login')
        }
       
    }

  return (
    <div>
        <RegisterForm handleChange = {handleChange} handleSubmit = {handleSubmit} formValues = {formValues} />
        {
            errors && 
            <div className = 'err-container'>
                <span className = 'err'> {errors.password}</span>
            </div>

        }
        
    </div>
  )
}


const mapStateToProps = (state) => {
    return {
        authState: state.authState
    }
}

export default connect(mapStateToProps, actions) (Register)