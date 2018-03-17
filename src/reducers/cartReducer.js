import {
	ADD_PRODUCT_TO_CART
} from '../actions'

const initialCartState = []

export const cartReducer = (state=initialCartState, action) => {
	switch(action.type){
		case ADD_PRODUCT_TO_CART:
			return state.concat([action.product])
		default:
			return state
	}
}