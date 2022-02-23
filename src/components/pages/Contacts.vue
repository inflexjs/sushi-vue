<template lang='pug'> 
	section.b-contacts
		.__left
			h2.__title Напиши нам
			p.__text Если у тебя есть  вопросы или ты просто не любишь разговаривать по телефону
			form-component
		.__right
			img.__image(
				src="@/assets/images/utility/shef.svg"
			)
</template>

<script>
import Button from '@/components/UI/Button.vue'
import Form from '@/components/blanks/Form.vue'

export default {
	data() {
		return {
		}
	},
	components: {
		'form-component': Form,
		'button-component': Button
	}
}
</script>