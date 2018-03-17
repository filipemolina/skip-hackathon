import { uiReducer } from './uiReducer'
import { storesReducer } from './storesReducer'
import { cuisinesReducer } from './cuisinesReducer' 
import { productsReducer } from './productsReducer'
import { cartReducer } from './cartReducer'

import { combineReducers } from 'redux'

export default combineReducers({
	ui: uiReducer,
	stores: storesReducer,
	cuisines: cuisinesReducer,
	products: productsReducer,
	cart: cartReducer,
})