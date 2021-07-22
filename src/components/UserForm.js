import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

class UserForm extends Component {
    state = {
        step: 1,
        firstName : '',
        lastName : '',
        email: '',
        occupation: '',
        city : '',
        bio : ''
    }
    nextStep = () => {
        const {step} =  this.state
        this.setState({
            step: step + 1
        })
    }
    prevStep = () => {
        const {step} =  this.state
        this.setState({
            step: step - 1
        })
    }
    handleFieldsChange = input => e => {
        this.setState({
            [input] : e.target.value
        })
    }
    render() {
        const {step} = this.state
        const {firstName , lastName , email , occupation , city , bio} = this.state
        const values = {firstName , lastName , email , occupation , city , bio}
        switch(step)
        {
            case 1 :
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleFieldsChange = {this.handleFieldsChange}
                        values={values}
                    />
                )
            case 2 :
                return (
                    <FormPersonalDetails 
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleFieldsChange = {this.handleFieldsChange}
                        values={values}
                    />
                )
            case 3 :
                return (
                    <Confirm 
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                )
            case 4 :
                return <Success></Success>
        }
    }
}
export default UserForm
