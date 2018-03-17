import React, { Component } from 'react'
import Store from './Store'

class StoresList extends Component {

	render(){

		// Get the Items from Props
		const { items, cuisines } = this.props

		return(
			<div className="stores-list">
				{items && items.map(item => {

					let this_stores_cuisine = {}

					// Get the cuisine of this store
					if(cuisines)
						this_stores_cuisine = cuisines.find(cuisine => cuisine.id === item.cousineId)

					return (
						<Store store={item} cuisineName={this_stores_cuisine ? this_stores_cuisine.name : ""}/>
					)
				})}
			</div>
		)
	}
}

export default StoresList