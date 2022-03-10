<template lang="pug">
	.b-form
		.__wrapper
			input-component.__input.--half(
				v-model = "fields.name.value"
				:placeholder = "fields.name.placeholder"
				:error.sync = "fields.name.error"
			)
			input-component.__input.--half(
				v-model = "fields.phone.value"
				:placeholder = "fields.phone.placeholder"
				:error.sync = "fields.phone.error"
			)
		input-component.__input(
			v-model = "fields.mail.value"
			:placeholder = "fields.mail.placeholder"
			:error.sync = "fields.mail.error"
		)
		input-component.__input(
			v-model = "fields.subject.value"
			:placeholder = "fields.subject.placeholder"
			:error.sync = "fields.subject.error"
		)
		input-component.__message(
			:placeholder = "fields.message.placeholder"
			v-model = "fields.message.value"
			:error.sync = "fields.message.error"
		)
		button-component.__button(
			text = "normal"
			size = "medium"
			type = "button"
			v-on:click = "send"
		) Отправить
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { validateFields, createFields, isValidFields } from '@/js/formFieldsService'

import Input from '@/components/UI/Input.vue'
import Button from '@/components/UI/Button.vue'

@Component({
	components: {
		'input-component': Input,
		'button-component': Button
	}
})
export default class Form extends Vue{
	fieldsNames = ['name', 'phone', 'mail', 'subject', 'message']
	fields = createFields(this.fieldsNames)
	userInfo = {}

	send() {
		validateFields(this.fields)
		if (isValidFields(this.fields)){
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
	}

	clear() {
		this.fields = createFields(this.fieldsNames)
	}
}
</script>