const getters = {
	basket(state) {
		return state.basket
	},
	products(state, getters, rootState, rootGetters) {
		return rootGetters["productsModule/products"]
	}
}

export default getters