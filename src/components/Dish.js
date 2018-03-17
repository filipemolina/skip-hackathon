import React, { Component } from 'react'

// Material UI imports
import { Card, CardActions, CardHeader } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

class Dish extends Component {
	render(){

		const { dish } = this.props

		return(
			<Card key={dish.id} style={{ width: '20%'}} className="store-card">
				<CardHeader 
					avatar="https://picsum.photos/50/50"
					title={dish.name}
				/>
				<CardActions className="store-card-button">
					<RaisedButton label="Add to Cart" primary={true} onClick={() => this.props.handleAdd(dish)} />
				</CardActions>
			</Card>
		)
	}
}

export default Dish