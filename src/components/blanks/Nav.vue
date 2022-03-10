<template lang="pug">
	nav.b-nav
		ul.__list
			li.__item(
				v-for = "route in filterRoutes"
			) 
				link-component.__link(
					:href = "route.path"
				) {{route.meta.title}}
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Link from '@/components/UI/Link.vue'

@Component({
	components: {
		'link-component': Link
	}
})
export default class Nav extends Vue{
	get filterRoutes() {
		return this.$router.getRoutes().filter(route => route?.meta?.title)
	}
}
</script>