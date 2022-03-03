<template lang="pug">
	.b-basket-card
		img.__image(
			:src = "image"
		)
		.__main
			.__top
				p.__name {{title}}
				p.__info {{information}}
			.__footer
				counter-component(
					v-model = "countModel"
				)
				span.__price {{sum}} $
				button.__button(
					@click = "$emit('remove')"
				) x
</template>

<script>
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
	},
	data() {
		return {
		
		}
	},
	methods: {
	},

	computed: {
		sum() {
			return (this.price * this.count).toFixed(2)
		},
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
		'counter-component': Counter
	}
}
</script>