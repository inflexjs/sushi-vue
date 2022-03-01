const mutations = {
	changeCount(state, {count, id}) {
		const product = state.products.find(product => product.id === id)
		product.count = count
	},
	setProducts(state, products) {
		state.products = products
	}
}

export default mutations