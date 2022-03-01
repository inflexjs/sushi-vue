<template lang="pug">
	.b-basket
		.__top
			h3.__title Ваш заказ
		.__main(
			v-on:mouseover = "$emit('mouseover')"
			v-on:mouseleave = "$emit('mouseleave')"
		)
			template(
				v-if = "basket.length"
			)
				basket-card-component(
					v-for = "product in basket"
					:title = "product.title"
					:information = "product.information"
					:count = "product.count"
					:price = "product.price"
					:image = "product.image"
					:key = "product.id"
					@remove = "remove(product.id)"
					@changeCount = "changeCount({count: $event, id: product.id})"
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
					span {{deliveryText}}
				p.__delivery-info Бесплатно при заказе от 300 $
			.__amount
				h3.__title Итого:
				span {{sum}} $
			button-component.__button.--full(
				text = "normal"
				size = "medium"
			) Заказать
</template>

<script>
import Card from '@/components/blanks/Card.vue'
import BasketCard from '@/components/blanks/BasketCard.vue'
import Button from '@/components/UI/Button.vue'

import { mapGetters, mapActions } from "vuex";

export default {
	props: {
	},
	data() {
		return {
			freeDelivery: 300,
			deliveryPrice: 300,
		}
	},
	methods: {
		...mapActions({
			remove: "basketModule/remove",
			changeCount: "basketModule/changeCount",
		})
	},
	computed: {
		...mapGetters({
			basket: "basketModule/basket"
		}),
		deliveryText() {
			return this.sum >= this.freeDelivery ? 'Бесплатно':`${this.deliveryPrice}$`
		},
		sum() {
			return this.basket.reduce((total, product) => {
				return total + product.price * product.count
			}, 0)
		}
	},
	components: {
		'card-component': Card,
		'basket-card-component': BasketCard,
		'button-component': Button
	}
}
</script>