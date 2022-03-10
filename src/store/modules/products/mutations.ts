import { Product, StateProducts } from '@/store/modules/products/state'
import { MutationTree } from 'vuex'

export enum mutationTypesProducts {
	CHANGE_COUNT = 'CHANGE_COUNT',
	SET_PRODUCTS = 'SET_PRODUCTS',
}

const mutations: MutationTree<StateProducts> = {
	[mutationTypesProducts.CHANGE_COUNT](state: StateProducts, payload: { count: number, id: number }) {
		const product = state.products.find(product => product.id === payload.id)
		if (product) {
			product.count = payload.count
		}
	},
	[mutationTypesProducts.SET_PRODUCTS](state: StateProducts, products: Product[]) {
		state.products = products
	}
}

export default mutations