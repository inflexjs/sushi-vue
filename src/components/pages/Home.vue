<template lang="pug">
	section.b-home
		.__products
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
			card-component
		basket-component
</template>

<script>
import Card from '@/components/blanks/Card.vue'
import Basket from '@/components/blanks/Basket.vue'

export default {
	data() {
		return {
		}
	},
	components: {
		'card-component': Card,
		'basket-component': Basket
	}
}
</script>