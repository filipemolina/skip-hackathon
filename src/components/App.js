import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar'
import HomePage from './HomePage'
import LoginRegister from './LoginRegister'
import { connect } from 'react-redux'

// React Router Dom imports
import { Route, Redirect, withRouter } from 'react-router-dom'

// Material UI imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

///// Action Creators
import { fetchStores, fetchCuisines, fetchProducts } from '../actions'

class App extends Component {

	// Customize the theme of the app
	newTheme = getMuiTheme({
    palette: {
      primary1Color: "#BE2C2C",
      primary2Color: "#333",
      primary3Color: "#952222"
    }
  })

  componentDidMount = () => {
    // Get all the stores...
    this.props.getStores()
    // And the cuisines...
    this.props.getCuisines()
    // And finally the products
    this.props.getProducts()

    localStorage.setItem('authToken', undefined)
  }

  render() {

    const { stores, products, cuisines } = this.props

    return (
    	<MuiThemeProvider muiTheme={this.newTheme}>
	      <div className="App">
					<TopBar />

          <Route exact path="/" render={(props) => {
            if(localStorage.getItem('authToken'))
              (<Redirect to={{ path: "/menu"}} />) 
            else 
              (<LoginRegister {...props} />)
          }} />

          <Route exact path="/menu" render={(props) => (
            <HomePage {...props} stores={stores} cuisines={cuisines} products={products} />
          )} />
          
	      </div>
	    </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, props) => ({
  stores: state.stores,
  cuisines: state.cuisines,
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  getStores: () => dispatch(fetchStores()),
  getCuisines: () => dispatch(fetchCuisines()),
  getProducts: () => dispatch(fetchProducts())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App))
