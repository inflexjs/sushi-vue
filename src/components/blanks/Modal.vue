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

export interface IModalProps {
	loading: boolean
	title: string
	message: string
	image: string
}

@Component
export default class Modal extends Vue{
	@Prop() loading!: IModalProps['loading']
	@Prop() title!: IModalProps['title']
	@Prop() message!: IModalProps['message']
	@Prop() image!: IModalProps['image']

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