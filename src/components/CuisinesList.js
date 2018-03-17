import React, { Component } from 'react'
import Cuisine from './Cuisine'

class CuisinesList extends Component {
	render(){

		const { items } = this.props
 
		return(
			<div className="cuisines-list">
				{items.map(cuisine => (
					<Cuisine key={cuisine.id} cuisine={cuisine} />
				))}
			</div>

		)
	}
}

export default CuisinesList