{
	
	products: [
		{
			id: 1,
			storeId: 1,  
			name: 'Tempura',
			description: 'Nice delicious Tempura',
			price: 2,
		},
		{
			id: 2,
			storeId: 1,  
			name: 'Sushi',
			description: 'Nice delicious Sushi',
			price: 1,
		},
	],

	
	orderItems: [
		{
			id: 1,
			orderId: 1,
			productId: 1, 
			product: {
				id: 1,
				storeId: 1,  
				name: 'Tempura',
				description: 'Nice delicious Tempura',
				price: 2,
			},
			price: 2,
			quantity: 3, 
			total: 6
		}
	],

	
	orders: [
		{
			id: 1,
			date: "03/17/2018",
			customerId: 1,
			deliveryAddress: "Rua dos bobos, n 0",
			contact: "21 95754-9586",
			storeId: "1",
			orderItems: [
				{
					id: 1,
					orderId: 1,
					productId: 1, 
					product: {
						id: 1,
						storeId: 1,  
						name: 'Tempura',
						description: 'Nice delicious Tempura',
						price: 2
					},
					price: 2,
					quantity: 3, 
					total: 6,
				}			
			],
			total: 6,
			status: "Store is preparing the order",
			lastUpdate: "03/17/2018",
		}
	],

	

	customers: [
		{
			id: 1,
			email: "filipemolina@live.com",
			name: "Filipe Molina",
			address: "Rua Aluisio Pinto de Barros, 600",
			creation: "03/17/2018",
			password: "testPassword",
		}
	]
}