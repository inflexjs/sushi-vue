import { CategoryName } from '@/store/modules/products/state'
import axios from 'axios'

type ProductResponse = {
	id: number
	title: string
	price: number
	description: string
	image: string
	category: CategoryName
	rating: {
		rate: number
		count: number
	}
}

function getProducts(): Promise<Record<'data', ProductResponse[]>> {
	return axios.get('https://fakestoreapi.com/products?limit=20')
}

function checkout(data: {}) {
	console.log(data);
}

export default {
	getProducts,
	checkout
}