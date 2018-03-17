import * as skipAPI from "../utils/skipAPI"

/////////////////////////// STORES ACTIONS

export const FETCHING_STORES = "FETCHING_STORES"
export const STORES_FETCHED = "STORES_FETCHED"

/////////////////////////// CUISINE ACTIONS

export const FETCHING_CUISINES = "FETCHING_CUISINES"
export const CUISINES_FETCHED = "CUISINES_FETCHED"

/////////////////////////// PRODUCTS ACTIONS

export const FETCHING_PRODUCTS = "FETCHING_PRODUCTS"
export const PRODUCTS_FETCHED = "PRODUCTS_FETCHED"

/////////////////////////// CART ACTIONS

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"

/////////////////////////// ACTION CREATORS

////// STORES

const fetchingStores = () => ({
	type: FETCHING_STORES
})

const storesFetched = (stores) => ({
	type: STORES_FETCHED,
	stores
})

export const fetchStores = () => dispatch => {
	dispatch(fetchingStores())

	skipAPI.getStores()
	.then(data => dispatch(storesFetched(data)))
}

///// CUISINES

const fetchingCuisines = () => ({
	type: FETCHING_CUISINES
})

const cuisinesFetched = (cuisines) => ({
	type: CUISINES_FETCHED,
	cuisines
})

export const fetchCuisines = () => dispatch => {
	dispatch(fetchingCuisines())

	skipAPI.getCuisines()
	.then(data => dispatch(cuisinesFetched(data)))
}

///// PRODUCTS

const fetchingProducts = () => ({
	type: FETCHING_PRODUCTS
})

const productsFetched = (products) => ({
	type: PRODUCTS_FETCHED,
	products
})

export const fetchProducts = () => dispatch => {
	dispatch(fetchingProducts())

	skipAPI.getProducts()
	.then(data => dispatch(productsFetched(data)))
}


///// CART

export const addProductToCart = (product) => ({
	type: ADD_PRODUCT_TO_CART,
	product
})

