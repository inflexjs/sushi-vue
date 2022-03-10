<template lang="pug">
	input.b-input(
		:class="classes"
		:type = "inputType"
		:value = "value"
		v-on:input = "onInput"
		:placeholder = "placeholder"
	)
</template>

<script lang="ts">
import {Component, Vue, Prop, PropSync, Emit} from 'vue-property-decorator'
import { InputType } from '@/types/components/UI/Input'

export interface IInputProps {
	value?: string
	errorSync?: boolean
	type?: InputType
	placeholder: string
}

@Component
export default class Input extends Vue{

	@Prop() type!: IInputProps['type']
	@Prop() value!: IInputProps['value']
	@PropSync('error') errorSync!: IInputProps['errorSync']
	@Prop({default: ''}) placeholder!: IInputProps['placeholder']

	showPassword = false

	@Emit('input')
	inputEmit(event: Event) {
		return (event.target as HTMLInputElement).value
	}

	togglePassword() {
		this.showPassword = !this.showPassword
	}

	onInput(event: Event) {
		this.inputEmit(event)
		this.errorSync = false
	}

	get inputType() {
		return this.showPassword ? 'text':this.type
	}

	get classes() {
		const classes = []

		if (this.errorSync) {
			classes.push('is-error')
		}

		return classes
	}
}
</script>