<template lang="pug">
	section.b-order
		.__wrapper
			h2.__title Оформление заказа
			.__list
		.__pay
			.__pay-top
				button-component.__button(
					text = "normal"
					size = "medium"
				) Оплатить
				p.__privacy Нажимая на кнопку, вы соглашаетесь с Условиями обработки перс. данных
			.__pay-main
				h3.__subtitle Ваш заказ
				p.__text Товары (1)
					span 0 Р
				p__text Стоимость доставки
					span Бесплатно
			.__pay-footer
				h3.__subtitle Общая стоимость
					b 0 Р
				p.__description *Расчет суммы является предварительным
</template>

<script>
import Button from '@/components/UI/Button.vue'
import Link from '@/components/UI/Link.vue'

export default {
	data() {
		return {
		}
	},
	methods: {
	},
	components: {
		'button-component': Button,
		'link-component': Link
	}
}
</script>