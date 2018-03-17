import React, { Component } from 'react'
import Dish from './Dish'
import { connect } from 'react-redux'

import { addProductToCart } from '../actions'

class DishesList extends Component {

	render(){

		const { items } = this.props

		return(
			<div className="dishes-list">
				{items.map(item => (
					<Dish key={item.id} dish={item} handleAdd={this.props.addProduct} />
				))}
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	addProduct: (product) => dispatch(addProductToCart(product))
})

export default connect(null, mapDispatchToProps)(DishesList)