const actions = {
	add({state, commit, getters}, id) {
		const products = getters.products
		
		const product = products.find(product => product.id === id)
		const basketProduct = state.basket.find(item => item.id === product.id)
		const isAlreadyInBasket = Boolean(basketProduct)

		if (!isAlreadyInBasket) {
			commit('add', { ...product })
		} else {
			const newCount = basketProduct.count + product.count < 10 ? basketProduct.count + product.count : 10
			commit('changeCount', { id, count: newCount })
		}

		commit('productsModule/changeCount', { id: product.id, count: 1 }, {root: true})
		
	},
	remove({commit}, id) {
		commit('remove', id)
	},
	changeCount({ commit }, { id, count }) {
		commit('changeCount', { id, count })
	},
}

export default actions