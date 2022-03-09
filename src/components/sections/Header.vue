<template lang="pug">
	header.b-header
		.container.__container
			link-component.logo.__logo(
				href = "/"
			)
				img(
					src = "@/assets/images/utility/logo.svg"
				)
				h1 example.shop
			nav-component(
				:routes = "routes"
			)
</template>

<script>
import {Component, Vue, Prop} from 'vue-property-decorator'

import Nav from '@/components/blanks/Nav.vue'
import Link from '@/components/UI/Link.vue'

import { routes } from '@/router'

@Component({
	components: {
		'nav-component': Nav,
		'link-component': Link
	}
})
export default class Header extends Vue{
	routes = routes
}
</script>