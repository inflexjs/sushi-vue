<template lang="pug">
	section.b-home
		.__products
			card-component(
				v-for = "product in products"
				:title = "product.title"
				:information = "product.information"
				:count = "product.count"
				:price = "product.price"
				:key = "product.id"
				@changeCount = "changeCount($event, product.id)"
				@add = "addToBasket(product.id)"
			)
		basket-component(
			:list = "basket"
			@changeCount = "changeBasketCount"
			@remove = "removeFromBasket"
		)
</template>

<script>
import Card from '@/components/blanks/Card.vue'
import Basket from '@/components/blanks/Basket.vue'

export default {
	data() {
		return {
			basket: [],
			products: [
				{
					id: 1,
					title: 'Классический ролл лосось',
					information: '6 шт. / 205г.',
					count: 1,
					price: 240
				},
				{
					id: 2,
					title: 'Ролл Филадельфия спешл',
					information: '8 шт. / 190г.',
					count: 1,
					price: 225
				},
				{
					id: 3,
					title: 'Запеченный ролл Киото',
					information: '8 шт. / 260г.',
					count: 1,
					price: 387
				},
				{
					id: 4,
					title: 'Ролл Шиитаке сыр',
					information: '8 шт. / 190г.',
					count: 1,
					price: 149
				},
				{
					id: 5,
					title: 'Ролл Саваяки',
					information: '6 шт. / 200г.',
					count: 1,
					price: 160
				},
				{
					id: 6,
					title: 'Тартар ролл Огненный тунец',
					information: '8 шт. / 210г.',
					count: 1,
					price: 245
				},
				{
					id: 7,
					title: 'Тартар ролл Огненный тунец',
					information: '8 шт. / 210г.',
					count: 1,
					price: 245
				},
				{
					id: 8,
					title: 'Тартар ролл Огненный тунец',
					information: '8 шт. / 210г.',
					count: 1,
					price: 245
				},
				{
					id: 9,
					title: 'Тартар ролл Огненный тунец',
					information: '8 шт. / 210г.',
					count: 1,
					price: 245
				},
			]
		}
	},
	methods: {
		addToBasket(id) {
			const product = this.products.find(product => product.id === id)
			const basketProduct = this.basket.find(item => item.id === product.id)
			const isAlreadyInBasket = Boolean(basketProduct)
			if (!isAlreadyInBasket) {
				this.basket.push({...product})
			} else {
				basketProduct.count = basketProduct.count + product.count
			}
			product.count = 1
		},
		removeFromBasket(id) {
			const deleteIndexProduct = this.basket.findIndex(item => item.id === id)
			this.basket.splice(deleteIndexProduct, 1)
		},
		changeCount(count, id) {
			const product = this.products.find(product => product.id === id)
			product.count = count
		},
		changeBasketCount({id, count}) {
			const product = this.basket.find(product => product.id === id)
			product.count = count
		}
	},
	components: {
		'card-component': Card,
		'basket-component': Basket
	}
}
</script>