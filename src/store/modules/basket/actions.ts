import { ActionContext } from 'vuex'
import { StateRoot } from '@/store/index'
import { ActionType } from '@/types/store'
import { StateBasket } from '@/store/modules/basket/state'
import { mutationTypesBasket } from '@/store/modules/basket/mutations'
import { mutationTypesProducts } from '@/store/modules/products/mutations'

const add = ({ state, commit, rootState }: ActionContext<StateBasket, StateRoot>, payload: number) => {
	const products = rootState.productsModule.products

	const product = products.find(product => product.id === payload)
	
	if (product) {
		const basketProduct = state.basket.find(item => item.id === product.id)
		const isAlreadyInBasket = Boolean(basketProduct)
		if (!isAlreadyInBasket) {
			commit(mutationTypesBasket.ADD, { ...product })
		} else {
			if (basketProduct) {
				const newCount = basketProduct.count + product.count < 10 ? basketProduct.count + product.count : 10
				commit(mutationTypesBasket.CHANGE_COUNT, { id: payload, count: newCount })
			}
		}
		commit(`productsModule/${mutationTypesProducts.CHANGE_COUNT}`, { id: product.id, count: 1 }, { root: true })
	}
}
export type BasketAddAction = ActionType<typeof add>

const remove = ({ commit }: ActionContext<StateBasket, StateRoot>, payload: number) => {
	commit(mutationTypesBasket.REMOVE, payload)
}
export type BasketRemoveAction = ActionType<typeof remove>

const changeCount = ({ commit }: ActionContext<StateBasket, StateRoot>,  payload:{id:number, count: number} ) => {
	commit(mutationTypesBasket.CHANGE_COUNT, payload )
}
export type BasketChangeCountAction = ActionType<typeof changeCount>

const clearBasket = ({ commit }: ActionContext<StateBasket, StateRoot>, payload: number) => {
	commit(mutationTypesBasket.CLEAR_BASKET, payload)
}
export type BasketClearBasketAction = ActionType<typeof clearBasket>

const actions = {
	add,
	remove,
	changeCount,
	clearBasket
}

export default actions