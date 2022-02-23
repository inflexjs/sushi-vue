<template lang="pug">
	conponent.link(
		:is = "tag"
		v-bind = "options"
		v-on:click = "onClick"
	)
		slot
</template>

<script>
  export default {
		props: {
			tag: {
				default: "router-link",
				type: String
			},
			href: String
		},
    data() {
      return {
      }
    },
	methods: {
		onClick() {
			if (this.tag === "button") {
				this.$emit('click')
			}
		}
	},
	computed: {
		options() {
			return {
				...this.tag === 'a' && {
					href:this.href
				},
				...this.tag === 'router-link' && {
					to:this.href
				}
			}
		}
	}
  }
</script>