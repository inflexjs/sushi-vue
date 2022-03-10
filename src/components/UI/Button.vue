<template lang="pug">
	component.b-button(
		:is = "tag"
		:class="classes"
		v-bind = "options"
		v-on:click = "$emit('click')"
	)
		.__icon(
			v-if = "icon"
		)
		slot
</template>

<script lang='ts'>
import {Component, Vue, Prop} from 'vue-property-decorator'
import {ButtonView, ButtonTag, ButtonSize, ButtonType} from '@/types/components/UI/Button'

export interface IButtonProps {
	tag?: ButtonTag
	view?: ButtonView
	text?: string
	size?: ButtonSize
	icon?: string
	disabled?: boolean
	href?: string
	type?: ButtonType
}

@Component
export default class Button extends Vue{
	@Prop({default: 'button'}) tag!: IButtonProps['tag']
	@Prop({default: 'primary'}) view!: IButtonProps['view']
	@Prop({default: 'normal'}) text!: IButtonProps['text']
	@Prop({default: 'small'}) size!: IButtonProps['size']
	@Prop() icon!: IButtonProps['icon']
	@Prop() disabled!: IButtonProps['disabled']
	@Prop() href!: IButtonProps['href']
	@Prop() type!: IButtonProps['type']

	get classes(){
		const classes = [
			`button--view-${this.view}`,
			`button--text-${this.text}`,
			`button--size-${this.size}`,
		]
		if (this.disabled) {
			classes.push('is-disabled')
		}
		return classes;
	}

	get options() {
		return {
			...this.tag === 'a' && {
				href:this.href
			},
			...this.tag === 'router-link' && {
				to:this.href
			},
			type: this.type
		}
	}
}
</script>