import React, { Component } from 'react'

// Material UI imports
import AppBar from 'material-ui/AppBar'

class TopBar extends Component {
	render() {
		return(
			<AppBar title="SkipTheDishes" onLeftIconButtonClick={this.props.handleClick}/>
		)
	}
}

export default TopBar