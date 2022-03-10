import api from '@/api'
import { ActionType } from '@/types/store'
import { ActionContext } from 'vuex'
import { StateRoot } from '@/store/index'
import { StateProducts } from '@/store/modules/products/state'
import { Category, CategoryName, Product } from '@/store/modules/products/state'
import { mutationTypesProducts } from '@/store/modules/products/mutations'

function getCategoryOptions(categoryName: CategoryName ): Category {
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

const changeCount = ({ commit }: ActionContext<StateProducts, StateRoot>, payload:{count: number, id: number}) => {
	commit(mutationTypesProducts.CHANGE_COUNT, payload)
}
export type ProductsChangeCountAction = ActionType<typeof changeCount>

const fetchProducts = async ({ state, dispatch, commit }: ActionContext<StateProducts, StateRoot>) => {
	try {
		commit(mutationTypesProducts.SET_IS_FETCH, true)
		const { data } = await api.getProducts(state.pagination.page,state.pagination.perPage)
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
		commit(mutationTypesProducts.SET_PAGINATION_PAGE, state.pagination.page + 1)
		dispatch('setProducts', products)
		commit(mutationTypesProducts.SET_IS_FETCH, false)
	} catch (e) {
		console.log(e);
		commit(mutationTypesProducts.SET_IS_FETCH, true)
	}
}
export type ProductsFetchProductsAction = ActionType<typeof fetchProducts>

const setProducts = ({ commit }: ActionContext<StateProducts, StateRoot>, products: Product ) => {
	commit(mutationTypesProducts.SET_PRODUCTS, products)
}
export type ProductsSetProductsAction = ActionType<typeof setProducts>

const actions = {
	changeCount,
	fetchProducts,
	setProducts,
}

export default actions