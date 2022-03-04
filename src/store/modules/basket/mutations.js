const mutations = {
	add(state, product) {
		state.basket.push(product)
	},
	remove(state, id) {
		const copy = [...state.basket]
		const deleteIndexProduct = copy.findIndex(item => item.id === id)
		copy.splice(deleteIndexProduct, 1)
		state.basket = copy
	},
	changeCount(state, { id, count }) {
		const product = state.basket.find(product => product.id === id)
		product.count = count
	},
	clearBasket(state, payload){
		state.basket = []
	}
}

export default mutations