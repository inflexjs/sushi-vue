<template lang="pug">
	form.b-form(
		method = "post"
	)
		input-component.__name(
			plaseholder = "hello"
		)
		input-component.__phone
		input-component.__mail
		input-component.__topic
		input-component.__message
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