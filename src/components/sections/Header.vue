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
			nav-component.__nav
</template>

<script>
import {Component, Vue} from 'vue-property-decorator'

import Nav from '@/components/blanks/Nav.vue'
import Link from '@/components/UI/Link.vue'

@Component({
	components: {
		'nav-component': Nav,
		'link-component': Link
	}
})
export default class Header extends Vue{
}
</script>