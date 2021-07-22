import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List,ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class Success extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Success"></AppBar>
                    <h1>Thank you For your Submission</h1>
                    <h3>You will be notified about the updates via email</h3>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default Success