<template lang="pug">
	component.b-button(
		:is = "tag"
		:class="classes"
		v-on:click = "$emit('click')"
	)
		.__icon(
			v-if = "icon"
		)
		slot
</template>

<script>
	export default {
		props: {
			tag: {
				default: "button",
				type: String
			},
			view: {
				default: 'primary',
				type: String
			},
			text: {
				default: '',
				type: String
			},
			size: {
				default: 'small',
				type: String
			},
			icon: String,
		},
		data() {
			return {
			}
		},
		methods: {

		},
		computed: {
			classes(){
				const classes = [
					`button--view-${this.view}`,
					`button--text-${this.text}`,
					`button--size-${this.size}`,
				]
				return classes;
			},
		}
	}
</script>