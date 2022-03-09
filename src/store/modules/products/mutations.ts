import { StateProducts, Product } from '@/store/modules/products/state'
import { MutationTree } from 'vuex'

const changeCount = (state: StateProducts, payload: { count: number, id: number }) => {
	const product = state.products.find(product => product.id === payload.id)
	if (product) {
		product.count = payload.count
	}
}

const setProducts = (state: StateProducts, products: any[] ) => {
	state.products = products
}

const mutations = {
	changeCount,
	setProducts
}

export default mutations