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

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import Link from '@/components/UI/Link.vue'

export interface INavProps {
	routes: string
}

@Component({
	components: {
		'link-component': Link
	}
})
export default class Nav extends Vue{
	@Prop({default: ''}) routes!: INavProps['routes']

	get filterRoutes() {
		return this.$router.getRoutes().filter(route => route?.meta?.title)
	}
}
</script>