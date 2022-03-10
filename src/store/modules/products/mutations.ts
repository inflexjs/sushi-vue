import { Product, StateProducts } from '@/store/modules/products/state'
import { MutationTree } from 'vuex'

export enum mutationTypesProducts {
	CHANGE_COUNT = 'CHANGE_COUNT',
	SET_PRODUCTS = 'SET_PRODUCTS',
	SET_PAGINATION_PAGE = 'SET_PAGINATION_PAGE',
	SET_IS_FETCH = 'SET_IS_FETCH'
}

const mutations: MutationTree<StateProducts> = {
	[mutationTypesProducts.CHANGE_COUNT](state: StateProducts, payload: { count: number, id: number }) {
		const product = state.products.find(product => product.id === payload.id)
		if (product) {
			product.count = payload.count
		}
	},
	[mutationTypesProducts.SET_PRODUCTS](state: StateProducts, products: Product[]) {
		state.products = [
			...state.products,
			...products
		]
	},
	[mutationTypesProducts.SET_PAGINATION_PAGE](state: StateProducts, page: number) {
		state.pagination.page = page
	},
	[mutationTypesProducts.SET_IS_FETCH](state: StateProducts, status: boolean) {
		state.isFetch = status
	},
}

export default mutations