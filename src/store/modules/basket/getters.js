const getters = {
	basket(state) {
		return state.basket
	},
	products(state, getters, rootState, rootGetters) {
		return rootGetters["productsModule/products"]
	},
	deliveryText(state, getters) {
		return getters.isFreeDelivery ? 'Бесплатно' : `${state.deliveryOptions.price}$`
	},
	sumProducts(state) {
		const sum = state.basket.reduce((total, product) => {
			return total + product.price * product.count
		}, 0).toFixed(2)
		return Number(sum)
	},
	sumCheckout(state, getters) {
		if (state.basket.length === 0) {
			return 0
		}
		const chekout = getters.isFreeDelivery ? getters.sumProducts : getters.sumProducts + state.deliveryOptions.price
		return chekout.toFixed(2)
	},
	totalCount(state) {
		return state.basket.reduce((total, item) => {
			return total + item.count
		}, 0);
	},
	isFreeDelivery(state, getters) {
		return getters.sumProducts > state.deliveryOptions.condition
	}
}

export default getters