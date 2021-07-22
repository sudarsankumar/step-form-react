import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const {values,handleFieldsChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Enter User Details"></AppBar>
                    <TextField 
                        hintText ="Enter your First Name"
                        floatingLabelText = "First Name"
                        onChange = {handleFieldsChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br></br>
                    <TextField 
                        hintText ="Enter your Last Name"
                        floatingLabelText = "Last Name"
                        onChange = {handleFieldsChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br></br>
                    <TextField 
                        hintText ="Enter your Email"
                        floatingLabelText = "Email"
                        onChange = {handleFieldsChange('email')}
                        defaultValue={values.email}
                    />
                    <br></br>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button : {
        margin : 15
    }
}
export default FormUserDetails