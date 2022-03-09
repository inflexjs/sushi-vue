import { StateBasket } from '@/store/modules/basket/state'
import { Product } from '@/store/modules/products/state'

const add = (state: StateBasket, product: Product) => {
	state.basket.push(product)
}
const remove = (state: StateBasket, id: number) => {
	const copy = [...state.basket]
	const deleteIndexProduct = copy.findIndex(item => item.id === id)
	copy.splice(deleteIndexProduct, 1)
	state.basket = copy
}
const changeCount = (state: StateBasket, payload:{ id: number, count: number }) => {
	const product = state.basket.find(product => product.id === payload.id)
	if (product) {
		product.count = payload.count
	}
}
const clearBasket = (state: StateBasket) => {
	state.basket = []
}

const mutations = {
	add,
	remove,
	changeCount,
	clearBasket
}

export default mutations