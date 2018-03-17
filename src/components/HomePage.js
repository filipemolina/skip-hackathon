import React, { Component } from 'react'
import StoresList from './StoresList'
import CuisinesList from './CuisinesList'
import DishesList from './DishesList'

// Materia UI imports
import { Tabs, Tab } from 'material-ui/Tabs'

class HomePage extends Component {

	render(){

		const { stores, cuisines, products } = this.props

		return(
			<Tabs>
				<Tab label="Restaurants">
					<StoresList items={stores} cuisines={cuisines}/>
				</Tab>
				<Tab label="Cuisines">
					<CuisinesList items={cuisines} />
				</Tab>
				<Tab label="Dishes">
					<DishesList items={products} />
				</Tab>
			</Tabs>
		)
	}	
}

export default HomePage