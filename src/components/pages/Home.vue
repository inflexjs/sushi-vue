<template lang="pug">
	section.b-home
		.__products
			card-component
		.__basket
</template>

<script>
import Card from '@/components/blanks/Card.vue'

export default {
	data() {
		return {
		}
	},
	components: {
		'card-component': Card
	}
}
</script>