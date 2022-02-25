<template lang='pug'> 
	section.b-contacts
		modal-component(
			v-if = "isOpen"
			:loading = "loading"
			@click = "showModal"
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

<script>
import Button from '@/components/UI/Button.vue'
import Form from '@/components/blanks/Form.vue'
import Modal from '@/components/blanks/Modal.vue'

export default {
	data() {
		return {
			isOpen: false,
			loading: true,
			loadingAnimation: null
		}
	},
	methods: {
		showModal() {
			if (this.isOpen) {
				this.isOpen = false
				this.loading = true
			} else {
				this.isOpen = true
				this.loadingAnimation = setTimeout(() => {
					this.loading = !this.loading
				}, 5000)
				console.log(this.loadingAnimation, "loading");
			}
		},
	},
	beforeDestroy() {
		console.log('destroy loading');
		clearTimeout(this.loadingAnimation)
	},
	components: {
		'form-component': Form,
		'button-component': Button,
		'modal-component': Modal
	}
}
</script>