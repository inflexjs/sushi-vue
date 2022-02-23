<template lang="pug">
	.b-card
		img.__image(
			src = "@/assets/images/utility/sushi.svg"
		)
		p.__name Классический ролл лосось
		p.__info 6 шт. / 205г.
		.__options
			button.__button.--minus —
			input.__button.--input
			button.__button.--plus +
			span.__amount 265 ₽
		button-component.__button.--full(
			text = "normal"
			size = "small"
		) В корзину
</template>

<script>
import Button from '@/components/UI/Button.vue'

export default {
	data() {
		return {
		
		}
	},
	components: {
		'button-component': Button
	}
}
</script>