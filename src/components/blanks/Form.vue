<template lang="pug">
	form.b-form(
		method = "post"
	)
		.__wrapper
			input-component.__input.--half(
				placeholder = "Имя"
			)
			input-component.__input.--half(
				placeholder = "Телефон"
			)
		input-component.__input(
			placeholder = "Почта"
		)
		input-component.__input(
			placeholder = "Тема"
		)
		input-component.__input.--message(
			placeholder = "Сообщение"
		)
		button-component.__button(
			text = "normal"
			size = "medium"
		) Отправить
</template>

<script>
import Input from '@/components/UI/Input.vue'
import Button from '@/components/UI/Button.vue'

export default {
	data() {
		return {
			hello: 'nope'
		}
	},
	components: {
		'input-component': Input,
		'button-component': Button
	}
}
</script>