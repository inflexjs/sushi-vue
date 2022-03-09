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
}

const state = (): StateProducts => ({
	products: [
		// {
		// 	id: 1,
		// 	title: 'Классический ролл лосось',
		// 	information: '6 шт. / 205г.',
		// 	count: 1,
		// 	price: 240,
		// 	image: 'sushi1.png',
		// 	category: getCategoryOptions(1)
		// }
	]
})

export default state