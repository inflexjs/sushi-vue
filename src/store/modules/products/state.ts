export type CategoryName = "Все" | 
													"men's clothing" |
													"jewelery" | 
													"women's clothing" | 
													"electronics"

export type Category = {
	id: number,
	name: CategoryName
}

export type Product = {
	id: number,
	title: string,
	information: string,
	count: number,
	price: number,
	image: string,
	category: Category
}

export type StateProducts = {
	products: Product[]
	pagination: {
		page: number
		perPage: number
	}
	isFetch: boolean
}

const state = (): StateProducts => ({
	products: [],
	pagination: {
		page: 1,
		perPage: 9
	},
	isFetch: false
})

export default state