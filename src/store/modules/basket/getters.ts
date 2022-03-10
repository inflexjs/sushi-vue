import { GetterTree } from 'vuex'
import { StateBasket } from '@/store/modules/basket/state'
import { StateRoot, Getter } from '@/store'

const basket = (state: StateBasket) => state.basket
export type BasketBasketGetter = ReturnType<typeof basket>

const deliveryText = (state: StateBasket, getters: Getter) => {
	return getters.isFreeDelivery ? 'Бесплатно' : `${state.deliveryOptions.price}$`
}
export type BasketDeliveryTextGetter = ReturnType<typeof deliveryText>

const sumProducts = (state: StateBasket) => {
	const sum = state.basket.reduce((total, product) => {
		return total + product.price * product.count
	}, 0).toFixed(2)
	return Number(sum)
}
export type BasketSumProductsGetter = ReturnType<typeof sumProducts>

const sumCheckout = (state: StateBasket, getters: Getter) => {
	if (state.basket.length === 0) {
		return 0
	}
	const chekout = getters.isFreeDelivery ? +getters.sumProducts : +getters.sumProducts + state.deliveryOptions.price
	return chekout.toFixed(2)
}
export type BasketSumCheckoutGetter = ReturnType<typeof sumCheckout>

const totalCount = (state: StateBasket) => {
	return state.basket.reduce((total, item) => {
		return total + item.count
	}, 0);
}
export type BasketTotalCountGetter = ReturnType<typeof totalCount>

const isFreeDelivery = (state: StateBasket, getters: Getter) => {
	return getters.sumProducts > state.deliveryOptions.condition
}
export type BasketIsFreeDeliveryGetter = ReturnType<typeof isFreeDelivery>

const getters: GetterTree<StateBasket, StateRoot> = {
	basket,
	deliveryText,
	sumProducts,
	sumCheckout,
	totalCount,
	isFreeDelivery,
}

export default getters