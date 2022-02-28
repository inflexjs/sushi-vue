const mutations = {
	changeCount(state, {count, id}) {
		const product = state.products.find(product => product.id === id)
		product.count = count
	},
}

export default mutations