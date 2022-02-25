<template lang="pug">
	.b-card
		img.__image(
			:src = "image ? image : 'none.jpg'"
		)
		p.__name {{title}}
		p.__info {{information}}
		.__options
			counter-component(
				v-model = "countModel"
				@keyDown = "$emit('add')"
			)
			span.__price {{price}} ₽
		button-component.__button.--full(
			v-if = "showButton"
			text = "normal"
			size = "small"
			@click = "$emit('add')"
			
		) В корзину
</template>

<script>
import Button from '@/components/UI/Button.vue'
import Counter from '@/components/blanks/Counter.vue'

export default {
	props: {
		title: String,
		information: String,
		count: Number,
		price: Number,
		image: {
			default: 'none.jpg',
			type: String
		},
		showButton: {
			default: true,
			type: Boolean
		}
	},
	data() {
		return {
		
		}
	},
	methods: {
	},
	computed: {
		countModel: {
			get: function() {
				return this.count
			},
			set: function(value) {
				this.$emit('changeCount', value)	
			}
		}
	},
	components: {
		'button-component': Button,
		'counter-component': Counter
	}
}
</script>