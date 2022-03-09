import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import productsModule from './modules/products'
import { StateBasket } from '@/store/modules/basket/state'
import { StateProducts } from '@/store/modules/products/state'
import basketModule from './modules/basket'

Vue.use(Vuex)

const store: StoreOptions<StateRoot> = {
	modules: {
		productsModule,
		basketModule
	}
}
export type Getter = Record<string, number | string>

export type StateRoot = {
	basketModule: StateBasket
	productsModule: StateProducts
}

export default new Vuex.Store(store)