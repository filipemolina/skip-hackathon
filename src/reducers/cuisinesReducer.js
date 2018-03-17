import {
	CUISINES_FETCHED
} from '../actions'

const initialCuisinesState = []

export const cuisinesReducer = (state=initialCuisinesState, action) => {
	switch(action.type){
		case CUISINES_FETCHED:
			return action.cuisines
		default:
			return state
	}
}