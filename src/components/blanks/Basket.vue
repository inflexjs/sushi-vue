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
				p.__delivery-info Бесплатно при заказе от 200 $
			.__amount
				h3.__title Итого:
				span {{sumCheckout}} $
			button-component.__button.--full(
				v-show = "basket.length"
				text = "normal"
				size = "medium"
				tag = "router-link"
				:href = "basket.length ? '/order' : ''"
			) Заказать
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from '@/decorators'

import Card from '@/components/blanks/Card.vue'
import BasketCard from '@/components/blanks/BasketCard.vue'
import Button from '@/components/UI/Button.vue'

@Component({
	components: {
		'card-component': Card,
		'basket-card-component': BasketCard,
		'button-component': Button
	}
})
export default class Basket extends Vue{
	@Action('basketModule/remove') remove!: () => void
	@Action('basketModule/remove') changeCount!: () => void

	@Getter('basketModule/basket') basket!: Object[]
	@Getter('basketModule/deliveryText') deliveryText!: string
	@Getter('basketModule/sumCheckout') sumCheckout!: number
}
</script>