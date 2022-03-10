<template lang="pug">
	section.b-order
		modal-component(
			v-if = "isOrdered"
			:loading = "loading"
			image = "thanks.svg"
			title = "Спасибо за заказ!"
			message = "Ваш заказ принят в обработку "
			@click = "closeModal"
		)
		.__wrapper
			h2.__title Оформление заказа
			.__products
				h3.__subtitle(
					:class = "classes"
				) Ваши товары 
					sup {{totalCount}}
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
				p.__empty(
					v-else
				) В вашей корзине пусто
			.__user-information
				h3.__subtitle Данные получателя
				radio-component.__radio(
					v-model = "fields.userInformation.value"
					:list = "fields.userInformation.list"
					:name = "fields.userInformation.name"
				)
				input-component.__input.--full(
					v-model = "fields.name.value"
					:placeholder = "fields.name.placeholder"
					:error.sync = "fields.name.error"
				)
				.__user-information-wrapper
					input-component.__input.--half(
						v-model = "fields.phone.value"
						:placeholder = "fields.phone.placeholder"
						:error.sync = "fields.phone.error"
					)
					input-component.__input.--half(
						v-model = "fields.mail.value"
						:placeholder = "fields.mail.placeholder"
						:error.sync = "fields.mail.error"
					)
			.__paymethod
				h3.__subtitle Cпособ оплаты
				radio-component.__radio(
					v-model = "fields.paymethod.value"
					:list = "fields.paymethod.list"
					:name = "fields.paymethod.name"
				)
			.__delivery
				h3.__subtitle Cпособ получения
				button-component.__button(
					v-for = "button in fields.delivery.list"
					:key = "button.id"
					:view = "button.id === fields.delivery.value ? 'primary' : 'secondary'"
					@click = "changeDeliveryOption(button.id)"
				) {{button.name}}
				p.__description После оплаты Вам будет предоствлен персональный QR код- пропус для получения вашего товара
		.__pay
			.__pay-top
				button-component.__pay-button(
					:disabled = "!basket.length"
					text = "normal"
					size = "big"
					@click = "checkout"	
				) Оплатить
				p.__privacy Нажимая на кнопку, вы соглашаетесь с Условиями обработки перс. данных
			.__pay-main
				h3.__pay-subtitle Ваш заказ
				.__pay-wrapper
					p.__pay-text Товары ({{totalCount}})
					span {{sumProducts}} $
				.__pay-wrapper
					p.__pay-text Стоимость доставки
					span {{deliveryText}}
			.__pay-footer
				.__pay-wrapper
					h3.__pay-subtitle Общая стоимость
					b {{sumCheckout}} $
				p.__description *Расчет суммы является предварительным
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from '@/decorators'
import { FormField } from '@/types/components/blanks/Form'
import { BasketRemoveAction, BasketChangeCountAction, BasketClearBasketAction } from '@/store/modules/basket/actions'
import { BasketBasketGetter, BasketDeliveryTextGetter, BasketSumProductsGetter, BasketSumCheckoutGetter, BasketTotalCountGetter } from '@/store/modules/basket/getters'
import { validateFields, createFields, isValidFields } from '@/js/formFieldsService'

import Button from '@/components/UI/Button.vue'
import Link from '@/components/UI/Link.vue'
import BasketCard from '@/components/blanks/BasketCard.vue'
import Modal from '@/components/blanks/Modal.vue'
import Input from '@/components/UI/Input.vue'
import Radio from '@/components/UI/Radio.vue'

import api from "@/api"


@Component({
	components: {
		'button-component': Button,
		'basket-card-component': BasketCard,
		'link-component': Link,
		'input-component': Input,
		'radio-component': Radio,
		'modal-component': Modal
	}
})
export default class Order extends Vue{

	fieldsNames = ['name', 'phone', 'mail', 'userInformation', 'paymethod', 'delivery']
	loadingAnimation = {} as ReturnType<typeof setTimeout>
	redirectTimer = {} as ReturnType<typeof setTimeout>
	redirect: boolean = false
	isOrdered: boolean = false
	loading: boolean = true
	freeDelivery: number = 300
	fields = createFields(this.fieldsNames)

	checkout(){
		validateFields(this.fields)
		
		if (isValidFields(this.fields) && this.basket.length) {
			console.log();
			api.checkout(this.checkoutData)
			this.showModal()
		}
	}

	changeDeliveryOption(id: number) {
		this.fields.delivery.value = id
	}

	showModal(){
		this.isOrdered = true
		this.loadingAnimation = setTimeout(() => {
			this.loading = !this.loading
			this.clearBasket()
			this.clear()
		}, 2000)
		this.redirectTimer = setTimeout(() => {
			this.$router.push('/')
		}, 5000);
	}

	closeModal(){
			this.isOrdered = false
			this.loading = true
			this.redirect = false
			clearTimeout(this.redirectTimer)
	}

	clear() {
		this.fields = createFields(this.fieldsNames)
	}

	get checkoutData() {
		return Object.keys(this.fields).reduce((total,key) => {
			return {
				...total,
				[key]:this.fields[key].value
			}
		}, {
			products: this.basket
			})
	}

	get classes() {
		const classes = []
		if (!this.basket.length) {
			classes.push('is-error')
		}
		return classes
	}

	@Action('basketModule/remove') remove!: BasketRemoveAction
	@Action('basketModule/changeCount') changeCount!: BasketChangeCountAction
	@Action('basketModule/clearBasket') clearBasket!: BasketClearBasketAction

	@Getter('basketModule/basket') basket!: BasketBasketGetter
	@Getter('basketModule/deliveryText') deliveryText!: BasketDeliveryTextGetter
	@Getter('basketModule/sumProducts') sumProducts!: BasketSumProductsGetter
	@Getter('basketModule/sumCheckout') sumCheckout!: BasketSumCheckoutGetter
	@Getter('basketModule/totalCount') totalCount!: BasketTotalCountGetter

	beforeDestroy() {
		console.log(this.loadingAnimation, 'loading animation');
		clearTimeout(this.loadingAnimation)
		console.log(this.redirectTimer, 'redirect timer');
		clearTimeout(this.redirectTimer)
	}
}
</script>