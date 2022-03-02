<template lang="pug">
	nav.b-nav.header__nav
		ul.__list
			li.__item(
				v-for = "route in filterRoutes"
			) 
				link-component.link.__link(
					:href = "route.path"
				) {{route.meta.title}}
</template>

<script>
import Link from '@/components/UI/Link.vue'
// import routes from '@/router/index.js'

export default {
	props: {
		routes: ""
	},
	data() {
		return {
		}
	},
	methods: {

	},
	computed: {
		filterRoutes() {
			return this.$router.getRoutes().filter(route => route?.meta?.title)
		}
	},
	components: {
		'link-component': Link
	}
}
</script>