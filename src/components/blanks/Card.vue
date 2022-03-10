<template lang="pug">
	.b-card
		img.__image(
			:src = "image ? image : 'none.jpg'"
		)
		p.__name {{title}}
		p.__info {{information}}
		.__options
			counter-component(
				v-model = "countModel"
				@keyDown = "$emit('add')"
			)
			span.__price {{price}} $
		button-component.__button.--full(
			v-if = "showButton"
			text = "normal"
			size = "small"
			@click = "$emit('add')"
			
		) В корзину
</template>

<script lang='ts'>
import { Component, Vue, Prop, ModelSync } from 'vue-property-decorator';

import Button from '@/components/UI/Button.vue'
import Counter from '@/components/blanks/Counter.vue'
import { Product } from '@/store/modules/products/state';

export interface ICardProps {
	title: Product['title']
	information: Product['information']
	price: Product['price']
	image: Product['image']
	showButton: boolean
}

@Component({
	components: {
		'button-component': Button,
		'counter-component': Counter
	}
})
export default class Card extends Vue{
	@Prop() title!: ICardProps['title']
	@Prop() information!: ICardProps['information']
	@Prop() price!: ICardProps['price']
	@Prop({default: 'none.jpg'}) image!: ICardProps['image']
	@Prop({default: true}) showButton!: ICardProps['showButton']

	@ModelSync('count', 'changeCount') countModel!: number
}
</script>