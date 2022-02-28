<template lang="pug">
	section.b-home
		.__products
			card-component(
				v-for = "product in products"
				:title = "product.title"
				:information = "product.information"
				:count = "product.count"
				:price = "product.price"
				:image = "product.image"
				:key = "product.id"
				@changeCount = "changeCount({count: $event, id: product.id})"
				@add = "add(product.id)"

			)
		basket-component
</template>

<script>
import Card from '@/components/blanks/Card.vue'
import Basket from '@/components/blanks/Basket.vue'

import { mapGetters, mapActions } from "vuex";

export default {
	mounted() {
	},
	methods: {
		...mapActions({
			add: "basketModule/add",
			changeCount: "productsModule/changeCount",
		})
	},
	computed: {
		...mapGetters({
			products: "productsModule/products",
		})
	},
	components: {
		'card-component': Card,
		'basket-component': Basket
	}
}
</script>