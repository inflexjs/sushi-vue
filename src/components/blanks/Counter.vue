<template lang="pug">
	.b-counter
		button.__button.--minus(
			v-on:click = "changeCount('minus')"
		) —
		input.__button.--input(
			ref = "input"
			:value = "value"
			v-on:change = "onChange"
			v-on:input = "onInput"
			v-on:keydown.enter = "$emit('keyDown')"
		)
		button.__button.--plus(
			v-on:click = "changeCount('plus')"
		) +
</template>

<script lang='ts'>
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'

@Component
export default class Counter extends Vue{
	@Prop() readonly value!: number
	@Ref('input') readonly refInput!: HTMLInputElement
	max = 10
	min = 1

	changeCount(sign: 'minus' | 'plus') {
		const newValue = sign === 'minus' ? this.value - 1 : this.value + 1
	
		this.emitValue(newValue)
	}

	onChange(event: Event){
		this.emitValue(Number((event.target as HTMLInputElement).value))
	}

	onInput(event: Event){
			this.setInputRefValue((event.target as HTMLInputElement).value.replace(/\D/g, ""))	
	}

	setInputRefValue(value: string){
		requestAnimationFrame(() => {
			this.refInput.value = value
		})
	}
	
	emitValue(newValue: number){
		let emitValue = newValue

		if (newValue > this.max) {
			emitValue = this.max
		} else if(newValue < this.min) {
			emitValue = this.min
		}

		this.$emit('input', emitValue)
		this.setInputRefValue(emitValue.toString())
	}
}
</script>