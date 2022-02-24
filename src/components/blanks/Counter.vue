<template lang="pug">
	.b-counter
		button.__button.--minus(
			v-on:click = "changeCount('minus')"
		) —
		input.__button.--input(
			:value = "value"
			v-on:input = "changeCount('input', $event)"
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
		changeCount(sign, e) {
			let newValue = this.value
			if (sign === 'minus' && this.value > 1) {
				newValue = this.value - 1
			}
			if (sign === 'plus' && this.value < 10) {
				newValue = this.value + 1
			}
			if (sign === 'input' && this.value < 10) {
				newValue = Number(e.target.value)
			} else {
				newValue = 1
			}
			this.$emit('input',newValue)
		},
	},
}
</script>