import React, { Component } from 'react'
import DishesList from './DishesList'

class Cart extends Component {
	render(){
		return(
			<DishesList items={this.props.products} />
		)
	}
}

export default Cart