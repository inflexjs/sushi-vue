<template lang="pug">
	.b-basket-card
		img.__image(
			:src = "image"
		)
		.__main
			.__top
				p.__name {{title}}
				p.__info {{information}}
			.__footer
				counter-component(
					v-model = "countModel"
				)
				span.__price {{sum}} $
				button.__button(
					@click = "$emit('remove')"
				) x
</template>

<script lang='ts'>
import { Component, Vue, Prop, ModelSync } from 'vue-property-decorator';
import Counter from '@/components/blanks/Counter.vue'
import { Product } from '@/store/modules/products/state';

export interface IBaskedCardProps {
	title: Product['title']
	information: Product['information']
	price: Product['price']
	image: Product['image']
}

@Component({
	components: {
		'counter-component': Counter
	}
})
export default class BasketCard extends Vue{
	@Prop() title!: string
	@Prop() information!: string
	@Prop() price!: number
	@Prop({default: 'none.jpg'}) image!: string

	@ModelSync('count', 'changeCount') countModel!: number

	get sum() {
		return (this.price * this.countModel).toFixed(2)
	}

	// countModel: {
	// 	get: function() {
	// 		return this.count
	// 	},
	// 	set: function(value) {
	// 		this.$emit('changeCount', value)	
	// 	}
	// }
}
</script>