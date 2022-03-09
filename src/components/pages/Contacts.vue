<template lang='pug'> 
	section.b-contacts
		modal-component(
			v-if = "isOpen"
			:loading = "loading"
			@click = "showModal"
			image = "email.svg"
			message = "Мы вышлем вам ответное письмо на электронную почту."
			title = "Спасибо за обращение!"
		)
		.__left
			h2.__title Напиши нам
			p.__text Если у тебя есть  вопросы или ты просто не любишь разговаривать по телефону
			form-component(
				@send = "showModal"
			)
		.__right
			img.__image(
				src="@/assets/images/utility/shef.svg"
			)
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import Button from '@/components/UI/Button.vue'
import Form from '@/components/blanks/Form.vue'
import Modal from '@/components/blanks/Modal.vue'

@Component({
	components: {
		'form-component': Form,
		'button-component': Button,
		'modal-component': Modal
	}
})
export default class Contacts extends Vue{
	isOpen = false
	loading = true
	loadingAnimation = null

	showModal() {
		if (this.isOpen) {
			this.isOpen = false
			this.loading = true
		} else {
			this.isOpen = true
			this.loadingAnimation = setTimeout(() => {
				this.loading = !this.loading
			}, 1000)
		}
	}

	beforeDestroy() {
		clearTimeout(this.loadingAnimation)
	}
}
</script>