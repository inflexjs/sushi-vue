const getters = {
	products(state) {
		return state.products
	},
	categories(state) {
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
}

export default getters