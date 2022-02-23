<template lang="pug">
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

export default {
	props: {
		routes: ""
	},
	data() {
		return {
		}
	},
	components: {
		'link-component': Link
	}
}
</script>