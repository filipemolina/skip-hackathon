import React, { Component } from 'react'
import RegisterForm from "./RegisterForm"
import LoginForm from './LoginForm'
import * as skipAPI from '../utils/skipAPI'
import { withRouter } from 'react-router-dom'

class LoginRegister extends Component {

	// This component has local state because of the controlled components
	state = {
		name: "",
		address: "",
		email: "",
		password: "",
		login_email: "",
		login_password: "",
	}

	// Handles changes in the inputs
	handleChange = (event, field) => {
		this.setState({
			[field] : event.target.value
		})
	}

	// Handles sending the user information to the skipAPI
	registerCustomer = () => {
		
		// Make the API call
		skipAPI.addCustomer(this.state)
			.then(data => {
				this.storeCustomerData(data)
				this.props.history.push("/menu")
			})
	}

	// Handles authentication of customer using email and password
	loginCustomer = () => {

		skipAPI.authenticateCustomer(this.state.login_email, this.state.login_password)
			.then(data => {
				this.storeCustomerData(data)
				this.props.history.push("/menu")
			})

	}

	// Stores the data on localStorage
	storeCustomerData = (data) => {
		// Store the user info on localStorage
		localStorage.setItem("customer", this.state)
		// Store the Auth Token on localStorage
		localStorage.setItem("authToken", data)
	}

	render(){
		return(
			<div className="register-page">
				<RegisterForm handleChange={this.handleChange} handleClick={this.registerCustomer} />
				<LoginForm handleChange={this.handleChange} handleClick={this.loginCustomer} />
			</div>
		)
	}
}

export default withRouter(LoginRegister)