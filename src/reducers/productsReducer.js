import {
	PRODUCTS_FETCHED
} from '../actions'

const initialProductsState = []

export const productsReducer = (state=initialProductsState, action) => {
	switch(action.type){
		case PRODUCTS_FETCHED:
			return action.products
		default:
			return state
	}
}