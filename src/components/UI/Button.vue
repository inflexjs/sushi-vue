<template lang="pug">
	component.b-button(
		:is = "tag"
		:class="classes"
		v-bind = "options"
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
				default: 'normal',
				type: String
			},
			size: {
				default: 'small',
				type: String
			},
			icon: String,
			href: String,
			type: String
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
			options() {
				return {
					...this.tag === 'a' && {
						href:this.href
					},
					...this.tag === 'router-link' && {
						to:this.href
					},
					type: this.type
				}
			}
		}
	}
</script>