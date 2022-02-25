<template lang="pug">
	main.b-main(
		:class = "scrollMain ? 'main__hidden':'main__enter'"
	)
		.container.__container
			slot(
				@mouseover = "mouseover"
				@mouseleave = "mouseleave"
				:scrollMain = "scrollMain"
			)
</template>

<script>
export default {
	data() {
		return {
			scrollMain: false
		}
	},
	methods: {
		mouseover() {
			console.log('hi');
			this.scrollMain = false
		},
		mouseleave() {
			this.scrollMain = true
		}
	}
}
</script>