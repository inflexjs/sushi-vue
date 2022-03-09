import { StateProducts } from '@/store/modules/products/state'

const products = (state: StateProducts) => {
	return state.products
}
const categories = (state: StateProducts) => {
	const categories = [{
		id: 0,
		name: 'Все'
	}]
	state.products.forEach(product => {
		const isInCategory = categories.some(category => {
			return category.id === product.category.id
		})
		if (!isInCategory) {
			categories.push(product.category)
		}
	});
	return categories
}

const getters = {
	products,
	categories
}

export default getters