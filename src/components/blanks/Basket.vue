<template lang="pug">
	.b-basket
		.__top
			h3.__title Ваш заказ
		.__main
			card-component(
				v-if = "basketList.length"
			)
			.__empty(
				v-else
			)
				img(
					src="@/assets/images/utility/box.svg"
				)
				p Ваша корзина пуста
		.__footer
			.__info
				h3.__title Доставка: 
				span.__delivery бесплатно
				p.__delivery-info Бесплатно при заказе от 600 ₽
			.__amount
				h3.__title Итого:
				span 750 ₽
			button-component.__button.--full(
				text = "normal"
				size = "medium"
			) Заказать
</template>

<script>
import Card from '@/components/blanks/Card.vue'
import Button from '@/components/UI/Button.vue'

export default {
	data() {
		return {
			basketList: []
		}
	},
	components: {
		'card-component': Card,
		'button-component': Button
	}
}
</script>