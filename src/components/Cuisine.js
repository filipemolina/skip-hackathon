import React, { Component } from 'react'

// Material UI imports
import { Card, CardActions, CardHeader } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

class Cuisine extends Component {
	render(){

		const { cuisine } = this.props

		return(
			<Card key={cuisine.id} style={{ width: '20%'}} className="store-card">
				<CardHeader 
					avatar="https://picsum.photos/50/50"
					title={cuisine.name}
				/>
				<CardActions className="store-card-button">
					<RaisedButton label="See" primary={true}/>
				</CardActions>
			</Card>
		)
	}
}

export default Cuisine