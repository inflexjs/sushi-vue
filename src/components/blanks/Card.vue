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

@Component({
	components: {
		'button-component': Button,
		'counter-component': Counter
	}
})
export default class Card extends Vue{
	@Prop() title!: string
	@Prop() information!: string
	@Prop() price!: number
	@Prop({default: 'none.jpg'}) image!: string
	@Prop({default: true}) showButton!: boolean

	@ModelSync('count', 'changeCount') countModel!: number
}
</script>