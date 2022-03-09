import { ActionContext } from 'vuex'
import { StateRoot } from '@/store/index'
import { StateBasket } from '@/store/modules/basket/state'

const add = ({ state, commit, rootState }: ActionContext<StateBasket, StateRoot>, payload: number) => {
	const products = rootState.productsModule.products

	const product = products.find(product => product.id === payload)
	
	if (product) {
		const basketProduct = state.basket.find(item => item.id === product.id)
		const isAlreadyInBasket = Boolean(basketProduct)
		if (!isAlreadyInBasket) {
			commit('add', { ...product })
		} else {
			if (basketProduct) {
				const newCount = basketProduct.count + product.count < 10 ? basketProduct.count + product.count : 10
				commit('changeCount', { id: payload, count: newCount })
			}
		}

		commit('productsModule/changeCount', { id: product.id, count: 1 }, { root: true })

	}
}

const remove = ({ commit }: ActionContext<StateBasket, StateRoot>, payload: number) => {
	commit('remove', payload)
}

const changeCount = ({ commit }: ActionContext<StateBasket, StateRoot>,  payload:{id:number, count: number} ) => {
	commit('changeCount', payload )
}

const clearBasket = ({ commit }: ActionContext<StateBasket, StateRoot>, payload: number) => {
	commit('clearBasket', payload)
}

const actions = {
	add,
	remove,
	changeCount,
	clearBasket
}

export default actions