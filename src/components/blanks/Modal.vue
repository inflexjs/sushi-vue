<template lang="pug">
	.b-modal(
		v-on:click = "$emit('click')"
	)
		.__loading(
			v-if = "loading"
		)
			span
		.__wrapper(
				v-else
				v-on:click.stop
			)
			.__image-wrapper
				img.__image(
					:src = "setImage"
				)
			h4.__title {{title}}
			p.__text {{message}}
			button.__button(
				v-on:click = "$emit('click')"
			) x
</template>

<script>
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export default {
	props: {
		loading: Boolean,
		title: String,
		message: String,
		image: String
	},
	mounted() {
		disablePageScroll()
	},
	beforeDestroy(){
		enablePageScroll()
	},
	data() {
		return {
		}
	},
	methods: {
	},
	computed: {
		setImage() {
			return `images/${this.image}`
		}
	}
}
</script>