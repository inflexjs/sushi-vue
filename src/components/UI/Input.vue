<template lang="pug">
	input.b-input(
		:class="classes"
		:type = "inputType"
		:value = "value"
		v-on:input = "onInput"
		:placeholder = "placeholder"
	)
</template>

<script>
export default {
	props: {
		type: String,
		value: String,
		error: Boolean,
		placeholder: {
			default: '',
			type: String
		}
	},
	data() {
		return {
			showPassword: false,
		}
	},
	methods: {
		togglePassword() {
			this.showPassword = !this.showPassword
		},
		onInput(e) {
			this.$emit('input', e.target.value)
			this.$emit('update:error', false)
		}
	},
	computed: {
		inputType() {
			return this.showPassword ? 'text':this.type
		},
		classes() {
			const classes = []

			if (this.error) {
				classes.push('is-error')
			}

			return classes
		}

	}
}
</script>