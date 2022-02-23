<template lang="pug">
	div#app
		header-component
		main-component
			transition(
				name = "fade"
				mode = "out-in"
			)
				router-view
</template>

<script>
import Header from '@/components/sections/Header.vue'
import Main from '@/components/Main.vue'

export default{
	data() {
		return {

		}
	},
	components: {
		'header-component': Header,
		'main-component': Main
	}
}
</script>

<style lang="scss">
	@import '@/assets/styles/main.scss';
</style>
