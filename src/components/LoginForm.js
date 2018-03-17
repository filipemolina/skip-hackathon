import React, { Component } from 'react'

// Material UI imports
import { Card, CardText, CardActions, CardHeader } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class LoginForm extends Component {
	render(){
		return(
			<Card className="login-form">
				<CardHeader title="Registration Form" />
				<CardText>
					<TextField onChange={(event) => this.props.handleChange(event, "login_email")} floatingLabelText="E-mail" fullWidth={true} />
					<TextField onChange={(event) => this.props.handleChange(event, "login_password")} floatingLabelText="Password" fullWidth={true} />
				</CardText>
				<CardActions className="register-form-button">
					<RaisedButton label="Login" primary={true} onClick={this.props.handleClick}/>
				</CardActions>
			</Card>
		)
	}
}

export default LoginForm