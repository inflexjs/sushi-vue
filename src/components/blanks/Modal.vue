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
			p.__text Спасибо за обращение!
			button.__button(
				v-on:click = "$emit('click')"
			) x
</template>

<script>
export default {
	props: {
		loading: Boolean
	},
	data() {
		return {
		}
	},
	methods: {
	}
}
</script>