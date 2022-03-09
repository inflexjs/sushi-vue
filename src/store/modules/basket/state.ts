import { Product } from '@/store/modules/products/state'

export type StateBasket = {
	basket: Product[]
	deliveryOptions: {
		price: number
		condition: number
	}
}

const state = (): StateBasket => ({
	basket: [],
	deliveryOptions: {
		price: 300,
		condition: 200,
	}
})

export default state