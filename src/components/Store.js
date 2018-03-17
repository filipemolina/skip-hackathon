import React, { Component } from 'react'

// Material UI imports
import { Card, CardActions, CardHeader } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

class Store extends Component {
	render(){

		const { store, cuisineName } = this.props

		return(
			<Card key={store.id} style={{ width: '20%'}} className="store-card">
				<CardHeader 
					avatar="https://picsum.photos/50/50"
					title={store.name}
					subtitle={cuisineName}
				/>
				<CardActions className="store-card-button">
					<RaisedButton label="See Menu" primary={true}/>
				</CardActions>
			</Card>
			)
	}
}

export default Store