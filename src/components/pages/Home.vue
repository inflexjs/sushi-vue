<template lang="pug">
	section.b-home
		.__wrapper
			template(
					v-if = "!products.length"
				)
					skeleton-tab-component(
						v-for = "_ in 4"
					)
			template(
				v-else
			)
				tabs-component.__tabs(
					v-model = "currentCategory"
					:list = "categories"
				)
			.__products
				template(
					v-if = "!products.length"
				)
					skeleton-card-component(
						v-for = "_ in 9"
					)
				template(
					v-else
				)
					card-component(
						v-for = "product in sortProducts"
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
import Tabs from '@/components/blanks/Tabs.vue'
import SkeletonCard from '@/components/blanks/SkeletonCard.vue'
import SkeletonTabs from '@/components/blanks/SkeletonTabs.vue'

import { mapGetters, mapActions } from "vuex";

export default {
	data() {
		return {
			currentCategory: 0
		}
	},
	async created() {
		this.$store.dispatch('productsModule/fetchProducts')

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
			categories: "productsModule/categories",
		}),
		sortProducts() {
			return this.currentCategory ? this.products.filter(product => product.category.id === this.currentCategory) : this.products
		}
	},
	components: {
		'card-component': Card,
		'basket-component': Basket,
		'tabs-component': Tabs,
		'skeleton-card-component': SkeletonCard,
		'skeleton-tab-component': SkeletonTabs
	}
}
</script>