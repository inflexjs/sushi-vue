import api from '@/api'

function getCategoryOptions(categoryName) {
	const mapCategoryNames = {
		"Все": 0,
		"men's clothing": 1,
		"jewelery": 2,
		"women's clothing": 3,
		"electronics": 4
	}
	return {
		id: mapCategoryNames[categoryName],
		name: categoryName
	}
}

const actions = {
	changeCount({commit}, {count, id}) {
		commit('changeCount', { count, id })
	},
	async fetchProducts({state, dispatch}) {
		if (!state.products.length) {
			try {
				const { data } = await api.getProducts()
				const products = data.map(product => {
					return {
						id: product.id,
						title: product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title,
						information: product.description.length > 50 ? `${product.description.slice(0, 50)}...` : product.description,
						count: 1,
						price: product.price,
						image: product.image,
						category: getCategoryOptions(product.category)
					}
				})
				dispatch('setProducts', products)
			} catch (e) {
				console.log(e);
			}	
		}
	},
	setProducts({ commit }, products) {
		commit('setProducts', products)
	}
}

export default actions