import { GetterTree } from 'vuex'
import { StateBasket } from '@/store/modules/basket/state'
import { StateRoot, Getter } from '@/store'

const basket = (state: StateBasket) => state.basket
export type ProductsBasketGetter = ReturnType<typeof basket>

const deliveryText = (state: StateBasket, getters: Getter) => {
	return getters.isFreeDelivery ? 'Бесплатно' : `${state.deliveryOptions.price}$`
}

const sumProducts = (state: StateBasket) => {
	const sum = state.basket.reduce((total, product) => {
		return total + product.price * product.count
	}, 0).toFixed(2)
	return Number(sum)
}

const sumCheckout = (state: StateBasket, getters: Getter) => {
	if (state.basket.length === 0) {
		return 0
	}
	const chekout = getters.isFreeDelivery ? +getters.sumProducts : +getters.sumProducts + state.deliveryOptions.price
	return chekout.toFixed(2)
}

const totalCount = (state: StateBasket) => {
	return state.basket.reduce((total, item) => {
		return total + item.count
	}, 0);
}

const isFreeDelivery = (state: StateBasket, getters: Getter) => {
	return getters.sumProducts > state.deliveryOptions.condition
}

const getters: GetterTree<StateBasket, StateRoot> = {
	basket,
	deliveryText,
	sumProducts,
	sumCheckout,
	totalCount,
	isFreeDelivery,
}

export default getters