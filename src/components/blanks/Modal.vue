<template lang="pug">
	.b-modal(
		v-on:click = "$emit('click')"
	)
		.__loading(
			v-if = "loading"
		)
			span
		.__wrapper(
				v-else
				v-on:click.stop
			)
			.__image-wrapper
				img.__image(
					:src = "setImage"
				)
			h4.__title {{title}}
			p.__text {{message}}
			button.__button(
				v-on:click = "$emit('click')"
			) x
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

@Component
export default class Modal extends Vue{
	@Prop() loading!: boolean
	@Prop() title!: string
	@Prop() message!: string
	@Prop() image!: string

	mounted() {
		disablePageScroll()
	}
	beforeDestroy(){
		enablePageScroll()
	}

	get	setImage() {
		return `images/${this.image}`
	}
}
</script>