<template lang="pug">
	conponent.link(
		:is = "tag"
		v-bind = "options"
		v-on:click = "onClick"
	)
		slot
</template>

<script lang='ts'>
import {Component, Vue, Prop} from 'vue-property-decorator'
import { LinkTag } from '@/types/components/UI/Link'

export interface ILinkProps {
	tag?: LinkTag
	href?: string
}

@Component
export default class Link extends Vue{
	@Prop({default: 'router-link'}) tag!: ILinkProps['tag']
	@Prop() href!: ILinkProps['href']

	onClick() {
		if (this.tag === "button") {
			this.$emit('click')
		}
	}

	get options() {
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
</script>