<template lang="pug">
	.b-form
		.__wrapper
			input-component.__input.--half(
				v-model = "fields.name.value"
				:placeholder = "fields.name.placeholder"
			)
			input-component.__input.--half(
				v-model = "fields.phone.value"
				:placeholder = "fields.phone.placeholder"
			)
		input-component.__input(
			v-model = "fields.mail.value"
			:placeholder = "fields.mail.placeholder"
		)
		input-component.__input(
			v-model = "fields.subject.value"
			:placeholder = "fields.subject.placeholder"
		)
		textarea.__message(
			:placeholder = "fields.message.placeholder"
			v-model = "fields.message.value"
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
			fields: {
				name: {
					value: '',
					error: false,
					placeholder: 'Имя'
				},
				phone:{
					value: '',
					error: false,
					placeholder: 'Телефон'
				},
				mail: {
					value: '',
					error: false,
					placeholder: 'Почта'
				},
				subject: {
					value: '',
					error: false,
					placeholder: 'Тема'
				},
				message: {
					value: '',
					error: false,
					placeholder: 'Сообщение'
				},
			},
			userInfo: {}
		}
	},
	methods: {
		send() {
			if (this.validate()){
				this.userInfo = Object.keys(this.fields).reduce((total, fieldName) => {
					return {
						...total,
						[fieldName]:this.fields[fieldName].value
					}
				}, {})
				console.log(this.userInfo);
				this.clear()
				this.$emit('send')
			}
		},
		validate() {

			return true
		},
		clear() {
			for (let key in this.fields) {
				this.fields[key].value = ""
			}
		}
	},
	components: {
		'input-component': Input,
		'button-component': Button
	}
}
</script>