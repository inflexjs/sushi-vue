import Vue from 'vue'
import Vuex from 'vuex'
import productsModule from './modules/products'
import basketModule from './modules/basket'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		productsModule,
		basketModule
	}
})