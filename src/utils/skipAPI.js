import axios from 'axios'

// API Endpoint
const endPoint = "http://api-vanhack-event-sp.azurewebsites.net/api/v1"

//////////////////////////////////////// CUSTOMERS

// Authenticates a customer in the API
// Receives e-mail and password
export const authenticateCustomer = (email, password) => new Promise((resolve, reject) => {
	axios.post(`${endPoint}/Customer/auth?email=${email}&password=${password}`)
		.then(response => response.data)
		.then(data => resolve(data))
})

// Add a customer to the API
export const addCustomer = (customer) => new Promise((resolve, reject) => {
	axios({
		method: 'post',
		url: `${endPoint}/customer`,
		data: customer,
	}).then(response => response.data)
		.then(data => resolve(data))
})

//////////////////////////////////////// PRODUCTS

// Method to get all the products
export const getProducts = () => new Promise((resolve, reject) => {
	axios.get(`${endPoint}/Product`)
	.then(response => response.data)
	.then(data => resolve(data))
})

// Search products by string
export const searchProducts = (query) => new Promise((resolve, reject) => {
	axios.get(`${endPoint}/Product/search/${query}`)
	.then(response => response.data)
	.then(data => resolve(data))
})

// Get Product by Id
export const getProductById = (productId) => new Promise((resolve, reject) => {
	axios.get(`${endPoint}/Product/${productId}`)
	.then(response => response.data)
	.then(data => resolve(data))
})

//////////////////////////////////////// Cuisines

// Get all the cousine types available
export const getCuisines = () => new Promise((resolve, reject) => {
	axios.get(`${endPoint}/Cousine`)
	.then(response => response.data)
	.then(data => resolve(data))
})

// Search Cuisines by a specified query
export const searchCuisines = (query) => new Promise((resolve, reject) => {
	axios.get(`${endPoint}/Cousine/search/${query}`)
	.then(response => response.data)
	.then(data => resolve(data))
})

// Receives a cousineId and returns the stores that serve that type of food
export const getStoresByCuisine = (cousineId) => new Promise((resolve, reject) => {
	axios.get(`${endPoint}/Cousine/${cousineId}/stores`)
	.then(response => response.data)
	.then(data => resolve(data))
})

//////////////////////////////////////// ORDERS

// Get order info by id

export const getOrderInfo = (orderId) => new Promise((resolve, reject) => {
	axios({
		method: "get",
		url: `${endPoint}/Order/${orderId}`,
		headers: {
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiRmlsaWUgTW9saW5hIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiZmlsaXBlbW9saW5hQGxpdmUuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IjQ0IiwibmJmIjoxNTIxMzAyNzgzLCJleHAiOjE1MjM3MjE5ODMsImlzcyI6InZhbmhhY2stc2FvcGF1bG8tZmFpci1hcGkiLCJhdWQiOiJ2YW5oYWNrLXNhb3BhdWxvLWZhaXItYXBpIn0.gHk1SoWyu3YOWp0tqJ1slnsDB-UWD4yq_0MDAgyi9F0'
		}
	}).then(response => response.data)
		.then(data => resolve(data))
})

//////////////////////////////////////// STORES

// Get all stores
export const getStores = () => new Promise((resolve, reject) => {
	axios.get(`${endPoint}/Store`)
	.then(response => response.data)
	.then(data => resolve(data))
})

// Search stores by query
export const searchStores = (query) => new Promise((resolve, reject) => {
	axios.get(`${endPoint}/Store/search/${query}`)
	.then(response => response.data)
	.then(data => resolve(data))
})

// Get Store by Id
export const getStoreById = (storeId) => new Promise((resolve, reject) => {
	axios.get(`${endPoint}/Store/${storeId}`)
	.then(response => response.data)
	.then(data => resolve(data))
})

// Get all products from a Store
export const getStoreProducts = (storeId) => new Promise((resolve, reject) => {
	axios.get(`${endPoint}/Store/${storeId}/Products`)
	.then(response => response.data)
	.then(data => resolve(data))
})