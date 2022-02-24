<template lang="pug">
	.b-counter
		button.__button.--minus(
			v-on:click = "changeCount('minus')"
		) —
		input.__button.--input(
			ref="input"
			:value = "value"
			v-on:change = "onChange"
			v-on:input="onInput"
			v-on:keydown.enter="$emit('keyDown')"
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
			max: 10,
			min: 1
		}
	},
	methods: {
		changeCount(sign, e) {
			const newValue = sign === 'minus' ? this.value - 1 : this.value + 1
		
			this.emitValue(newValue)
		},
		onChange(e){
			this.emitValue(Number(e.target.value))
		},
		onInput(e){
				this.setInputRefValue(e.target.value.replace(/\D/g, ""))	
		},
		setInputRefValue(value){
				requestAnimationFrame(() => {
						this.$refs.input.value = value
				})
		
		},

		emitValue(newValue){
			let emitValue = newValue

			if (newValue > this.max) {
				emitValue = this.max
			} else if(newValue < this.min) {
				emitValue = this.min
			}

			this.$emit('input', emitValue)
			this.setInputRefValue(emitValue)
		}
	},
}
</script>