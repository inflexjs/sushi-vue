<template lang="pug">
	.b-tabs
		button-component.__button(
			v-for = "tab in list"
			:view = "tab.id === value ? 'primary' : 'secondary'"
			size = 'small'
			text = 'upper'
			@click = "$emit('input', tab.id)"
		) {{tab.name}}
</template>

<script>
import Button from '@/components/UI/Button.vue'

import { mapGetters } from "vuex";

export default {
	props: {
		list: Array,
		value: Number
	},
	computed: {
	},
	components: {
		'button-component': Button
	}
}
</script>