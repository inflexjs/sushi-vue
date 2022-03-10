import { StateProducts } from '@/store/modules/products/state'
import { TabItem } from '@/types/components/blanks/Tabs'

const products = (state: StateProducts) => {
	return state.products
}
export type ProductsProductsGetter = ReturnType<typeof products>

const categories = (state: StateProducts) => {
	const categories: TabItem[] = [{
		id: 0,
		name: 'Все'
	}]
	state.products.forEach(product => {
		const isInCategory = categories.some(category => {
			return category.id === product.category.id
		})
		if (!isInCategory) {
			categories.push(product.category)
		}
	});
	return categories
}
export type ProductsCategoriesGetter = ReturnType<typeof categories>

const isFetch = (state: StateProducts) => state.isFetch
export type ProductsisFetchGetter = ReturnType<typeof isFetch>

const getters = {
	products,
	categories,
	isFetch
}

export default getters