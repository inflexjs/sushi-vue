import axios from 'axios'

function getProducts() {
	return axios.get('https://fakestoreapi.com/products?limit=20')
}

function checkout(data) {
	console.log(data);
}

export default {
	getProducts,
	checkout
}