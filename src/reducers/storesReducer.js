import {
	STORES_FETCHED
} from '../actions'

// Initial stores state
const initialStoresState = []

export const storesReducer = (state=initialStoresState, action) => {
	switch(action.type){
		case STORES_FETCHED:
			return action.stores 
		default:
			return state
	}
}