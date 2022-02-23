<template lang="pug">
	header.b-header
		.container.__container
			.logo.__logo
				img(
					src = "@/assets/images/utility/logo.svg"
				)
				h1 sushi.like
			nav.b-nav.__nav
				ul.__list
					li.__item(
						v-for = "route in routes"
					) 
						link-component.link.__link(
							:href = "route.path"
						) {{route.meta.title}}
</template>

<script>
import Link from '@/components/UI/Link.vue'
import { routes } from '@/router'

export default {
	data() {
		return {
			routes: routes,
			navigation: ['Главная', 'О нас','Cвязь']
		}
	},
	components: {
		'link-component': Link
	}
}
</script>