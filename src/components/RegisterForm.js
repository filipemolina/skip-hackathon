import React, { Component } from 'react'

// Material UI imports
import { Card, CardText, CardActions, CardHeader } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class RegisterForm extends Component {
	render(){
		return(
			<Card className="register-form">
				<CardHeader title="Registration Form" />
				<CardText>
					<TextField onChange={(event) => this.props.handleChange(event, "name")} floatingLabelText="Name" fullWidth={true} />
					<TextField onChange={(event) => this.props.handleChange(event, "address")} floatingLabelText="Address" fullWidth={true} />
					<TextField onChange={(event) => this.props.handleChange(event, "email")} floatingLabelText="E-mail" fullWidth={true} />
					<TextField onChange={(event) => this.props.handleChange(event, "password")} floatingLabelText="Password" fullWidth={true} />
				</CardText>
				<CardActions className="register-form-button">
					<RaisedButton label="Register" primary={true} onClick={this.props.handleClick}/>
				</CardActions>
			</Card>
		)
	}
}

export default RegisterForm