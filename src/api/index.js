import axios from 'axios'

function getProducts() {
	return axios.get('https://fakestoreapi.com/products?limit=20')
}

export default {
	getProducts 
}