<template lang="pug">
	.b-form
		.__wrapper
			input-component.__input.--half(
				placeholder = "Имя"
				v-model = "name.value"
			)
			input-component.__input.--half(
				placeholder = "Телефон"
				v-model = "phone"
			)
		input-component.__input(
			placeholder = "Почта"
			v-model = "mail"
		)
		input-component.__input(
			placeholder = "Тема"
			v-model = "subject"
		)
		textarea.__message(
			placeholder = "Сообщение"
			:value = "message"
			v-on:input = "onMessage"
		)
		button-component.__button(
			text = "normal"
			size = "medium"
			type = "button"
			v-on:click = "send"
		) Отправить
</template>

<script>
import Input from '@/components/UI/Input.vue'
import Button from '@/components/UI/Button.vue'

export default {
	data() {
		return {
			name: {
				value: '',
				error: false,
				placeholder: 'Имя'
			},
			phone: '',
			mail: '',
			subject: '',
			message: ''
		}
	},
	methods: {
		send() {
			if (this.validate()){
				const data = {
					name: this.name.toLowerCase(),
					phone: this.phone,
					mail: this.mail,
					subject: this.subject,
					message: this.message
				}
				console.log(data);
				this.clear()
				this.$emit('send')
			}
		},
		onMessage() {
			this.message = event.target.value
		},
		validate() {

			return true
		},
		clear() {
			this.name = '',
			this.phone = '',
			this.mail = '',
			this.subject = '',
			this.message = ''
		}
	},
	components: {
		'input-component': Input,
		'button-component': Button
	}
}
</script>