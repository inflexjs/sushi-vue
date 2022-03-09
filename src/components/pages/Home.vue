<template lang="pug">
	section.b-home
		.__wrapper
			template(
				v-if = "!products.length"
			)
				skeleton-tab-component.__tabs
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
						v-for = "(_,index) in 9"
						:key = "index"
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

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from '@/decorators'

import Card from '@/components/blanks/Card.vue'
import Basket from '@/components/blanks/Basket.vue'
import Tabs from '@/components/blanks/Tabs.vue'
import SkeletonCard from '@/components/blanks/SkeletonCard.vue'
import SkeletonTabs from '@/components/blanks/SkeletonTabs.vue'


@Component({
	components: {
		'card-component': Card,
		'basket-component': Basket,
		'tabs-component': Tabs,
		'skeleton-card-component': SkeletonCard,
		'skeleton-tab-component': SkeletonTabs
	}
})
export default class Home extends Vue{
	currentCategory = 0

	async created() {
		this.$store.dispatch('productsModule/fetchProducts')

	}

	get sortProducts() {
		return this.currentCategory ? this.products.filter(product => product.category.id === this.currentCategory) : this.products
	}

	@Action('basketModule/add') add!: number
	@Action('productsModule/changeCount') changeCount!: number
	@Getter('productsModule/products') products!: any[]
	@Getter('productsModule/categories') categories!: any[]
}
</script>