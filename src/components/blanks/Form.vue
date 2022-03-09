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
import { Component, Vue, Prop } from 'vue-property-decorator';

import Input from '@/components/UI/Input.vue'
import Button from '@/components/UI/Button.vue'

export type FormField = {
	name?: string
	value: string | number,
	error?: boolean,
	placeholder?: string,
	regExp?: RegExp
	list?: {id: number, name: string}[]
}

@Component({
	components: {
		'input-component': Input,
		'button-component': Button
	}
})
export default class Form extends Vue{
	fields: Record<string, FormField> = {
		name: {
			value: '',
			error: false,
			placeholder: 'Имя',
			regExp: /[a-z0-9_-]{10,}$/
		},
		phone:{
			value: '',
			error: false,
			placeholder: 'Телефон',
			regExp: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
		},
		mail: {
			value: '',
			error: false,
			placeholder: 'Почта',
			regExp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		},
		subject: {
			value: '',
			error: false,
			placeholder: 'Тема',
			regExp: /[a-z0-9_-]{10,}$/
		},
		message: {
			value: '',
			error: false,
			placeholder: 'Сообщение',
			regExp: /[a-z0-9_-]{20,}$/
		},
	}
	userInfo = {}

	send() {
		this.validate()
		if (this.isValid){
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

	validate(){
		Object.keys(this.fields).forEach(field => {
			if (this.fields[field].regExp) {
				const isValid = this.fields[field].value.toString().match(this.fields[field].regExp!) && this.fields[field].value.toString().match(this.fields[field].regExp!)?.length
				this.fields[field].error = !isValid
			}
		})	
	}

	clear() {
		for (let key in this.fields) {
			this.fields[key].value = ""
		}
	}

	get isValid() {
		return !Object.keys(this.fields).some(field => this.fields[field].error)
	}
}
</script>