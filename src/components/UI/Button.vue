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

@Component
export default class Button extends Vue{
	@Prop({default: 'button'}) tag!: string
	@Prop({default: 'primary'}) view!: string
	@Prop({default: 'normal'}) text!: string
	@Prop({default: 'small'}) size!: string
	@Prop() icon!: string
	@Prop() href!: string
	@Prop() type!: string

	get classes(){
		const classes = [
			`button--view-${this.view}`,
			`button--text-${this.text}`,
			`button--size-${this.size}`,
		]
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