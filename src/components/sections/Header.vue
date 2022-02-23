<template lang="pug">
	header.b-header
		.container.__container
			.logo.__logo
				img(
					src = "@/assets/images/utility/logo.svg"
				)
				h1 sushi.like
			nav-component(
				:routes = "routes"
			)
</template>

<script>
import Nav from '@/components/blanks/Nav.vue'
import { routes } from '@/router'

export default {
	data() {
		return {
			routes: routes
		}
	},
	components: {
		'nav-component': Nav
	}
}
</script>