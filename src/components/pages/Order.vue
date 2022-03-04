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
					:view = "button.id === fields.delivery.value ? 'primary' : 'secondary'"
					@click = "changeDeliveryOption(button.id)"
				) {{button.name}}
				p.__description После оплаты Вам будет предоствлен персональный QR код- пропус для получения вашего товара
		.__pay
			.__pay-top
				button-component.__pay-button(
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

<script>
import Button from '@/components/UI/Button.vue'
import Link from '@/components/UI/Link.vue'
import BasketCard from '@/components/blanks/BasketCard.vue'
import Modal from '@/components/blanks/Modal.vue'
import Input from '@/components/UI/Input.vue'
import Radio from '@/components/UI/Radio.vue'

import api from "@/api"
import { mapGetters, mapActions } from "vuex";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export default {
	data() {
		return {
			loadingAnimation: null,
			redirectTimer: null,
			redirect: false,
			isOrdered: false,
			loading: true,
			freeDelivery: 300,
			fields: this.createFields()
		}
	},
	created(){
		
	},
	beforeDestroy() {
		console.log(this.loadingAnimation, 'loading animation');
		clearTimeout(this.loadingAnimation)
		console.log(this.redirectTimer, 'redirect timer');
		clearTimeout(this.redirectTimer)
	},
	methods: {
		...mapActions({
			remove: "basketModule/remove",
			changeCount: "basketModule/changeCount",
			clearBasket: "basketModule/clearBasket"
		}),
		createFields() {
			return {
				name: {
					value: '',
					error: false,
					placeholder: 'Введите ФИО',
					regExp: /[a-zа-я0-9_-]{10,}$/
				},
				phone:{
					value: '',
					error: false,
					placeholder: 'Введите телефон',
					regExp: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
				},
				mail: {
					value: '',
					error: false,
					placeholder: 'Введите почту',
					regExp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				},
				userInformation: {
					name: 'userInformation',
					value: 1,
					list: [
						{
							id: 1,
							name: 'Физ. лицо'
						},
						{
							id: 2,
							name: 'Юр. лицо'
						}
					]
				},
				paymethod: {
					name: 'paymethod',
					value: 1,
					list: [
						{
							id: 1,
							name: 'Онлайн оплата'
						},
						{
							id: 2,
							name: 'Оплата наличными'
						},{
							id: 3,
							name: 'Apple pay'
						}
					]
				},
				delivery: {
					name: 'delivery',
					value: 1,
					list: [
						{
							id: 1,
							name: 'Доставка'
						},
						{
							id: 2,
							name: 'Самовывоз'
						}
					]
				}
			}
		},
		checkout(){
			this.validate()
			if (this.isValid && this.basket.length) {
				api.checkout(this.checkoutData)
				this.showModal()
			}
		},
		validate(){
			Object.keys(this.fields).forEach(field => {
				if (this.fields[field].regExp) {
					const isValid = this.fields[field].value.match(this.fields[field].regExp) && this.fields[field].value.match(this.fields[field].regExp).length
					this.fields[field].error = !isValid
				}
			})	
		},
		changeDeliveryOption(id) {
			this.fields.delivery.value = id
		},
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
		},
		closeModal(){
				this.isOrdered = false
				this.loading = true
				this.redirect = false
				clearTimeout(this.redirectTimer)
		},
		clear() {
			this.fields = this.createFields()
		},
	},
	computed: {
		...mapGetters({
			basket: "basketModule/basket",
			deliveryText: "basketModule/deliveryText",
			sumProducts: "basketModule/sumProducts",
			sumCheckout: "basketModule/sumCheckout",
			totalCount:"basketModule/totalCount"
		}),
		checkoutData() {
			return Object.keys(this.fields).reduce((total,key) => {
				return {
					...total,
					[key]:this.fields[key].value
				}
			}, {
				products: this.basket
				})
		},
		isValid() {
			return !Object.keys(this.fields).some(field => this.fields[field].error)
		},
		classes() {
			const classes = []
			if (!this.basket.length) {
				classes.push('is-error')
			}
		}
	},
	components: {
		'button-component': Button,
		'basket-card-component': BasketCard,
		'link-component': Link,
		'input-component': Input,
		'radio-component': Radio,
		'modal-component': Modal
	}
}
</script>