<template lang="pug">
	.b-counter
		button.__button.--minus(
			v-on:click = "changeCount('minus')"
		) —
		input.__button.--input(
			:value = "value"
		)
		button.__button.--plus(
			v-on:click = "changeCount('plus')"
		) +
</template>

<script>
export default {
	props: {
		value: Number
	},
	data() {
		return {
		
		}
	},
	methods: {
		changeCount(sign) {
			let newValue = this.value

			if (sign === 'minus' && this.value > 1) {
				newValue = this.value - 1
			}
			if (sign === 'plus' && this.value < 10) {
				newValue = this.value + 1
			}

			this.$emit('input',newValue)
		},

	},
}
</script>