import { StateBasket } from '@/store/modules/basket/state'
import { Product } from '@/store/modules/products/state'
import { MutationTree } from 'vuex'

export enum mutationTypesBasket {
	ADD = 'ADD',
	REMOVE = 'REMOVE',
	CHANGE_COUNT = 'CHANGE_COUNT',
	CLEAR_BASKET = 'CLEAR_BASKET'
}

const mutations: MutationTree<StateBasket> = {
	[mutationTypesBasket.ADD] (state: StateBasket, product: Product) {
		state.basket.push(product)
	},
	[mutationTypesBasket.REMOVE] (state: StateBasket, id: number) {
		const copy = [...state.basket]
		const deleteIndexProduct = copy.findIndex(item => item.id === id)
		copy.splice(deleteIndexProduct, 1)
		state.basket = copy
	},
	[mutationTypesBasket.CHANGE_COUNT] (state: StateBasket, payload: { id: number, count: number }) {
		const product = state.basket.find(product => product.id === payload.id)
		if (product) {
			product.count = payload.count
		}
	},
	[mutationTypesBasket.CLEAR_BASKET] (state: StateBasket) {
		state.basket = []
	}
}

export default mutations