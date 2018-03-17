import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar'
import HomePage from './HomePage'
import LoginRegister from './LoginRegister'
import Cart from './Cart'
import { connect } from 'react-redux'
import { NotificationStack } from 'react-notification'

// React Router Dom imports
import { Route, Redirect, withRouter } from 'react-router-dom'

// Material UI imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

///// Action Creators
import { fetchStores, fetchCuisines, fetchProducts, addProductToCart } from '../actions'

class App extends Component {

  state = {
    isMenuOpen: false,
    notifications: []
  }

	// Customize the theme of the app
	newTheme = getMuiTheme({
    palette: {
      primary1Color: "#BE2C2C",
      primary2Color: "#333",
      primary3Color: "#952222"
    }
  })

  addNotification () {
    const newCount = count + 1;
    return this.setState({
      notifications: this.state.notifications.add({
        message: `Product Added to Cart`,
        key: newCount,
        action: 'Dismiss',
        onClick: (notification, deactivate) => {
          deactivate()
          this.removeNotification('some UID')
        },
      })
    })
  }

  removeNotification (count) {
    this.setState({
      notifications: this.state.notifications.filter(n => n.key !== count)
    })
  }

  componentDidMount = () => {
    // Get all the stores...
    this.props.getStores()
    // And the cuisines...
    this.props.getCuisines()
    // And finally the products
    this.props.getProducts()
  }

  handleClose = () => this.setState({ isMenuOpen: false })

  goToCart = () => {
    this.handleClose()
    this.props.history.push("/cart")
  }

  logout = () => {
    this.handleClose()
    localStorage.removeItem('authToken')
    this.props.history.push("/")
  }

  render() {

    const { stores, products, cuisines } = this.props

    return (
    	<MuiThemeProvider muiTheme={this.newTheme}>
	      <div className="App">
          <Drawer docked={false} onRequestChange={(open) => this.setState({open})} open={this.state.isMenuOpen}>
            <MenuItem onClick={this.goToCart}>Cart</MenuItem>
            <MenuItem onClick={this.logout}>Logout</MenuItem>
          </Drawer>
					<TopBar handleClick={() => this.setState({ isMenuOpen: true })}/>

          <Route exact path="/" render={(props) => (
            localStorage.getItem("authToken") ? (
              <Redirect to="/menu" />
            ) : (
              <LoginRegister />
            )
          )} />

          <Route exact path="/menu" render={(props) => (
            <HomePage {...props} stores={stores} cuisines={cuisines} products={products} />
          )} />

          <Route exact path="/cart" render={(props) => (
            <Cart products={this.props.cart} />
          )} />
          
	      </div>
	    </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, props) => ({
  stores: state.stores,
  cuisines: state.cuisines,
  products: state.products,
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  getStores: () => dispatch(fetchStores()),
  getCuisines: () => dispatch(fetchCuisines()),
  getProducts: () => dispatch(fetchProducts())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App))
