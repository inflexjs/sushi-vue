<template lang="pug">
	.b-tabs
		button-component.__button(
			v-for = "tab in list"
			:view = "tab.id === value ? 'primary' : 'secondary'"
			:key = "tab.id"
			size = 'small'
			text = 'upper'
			@click = "$emit('input', tab.id)"
		) {{tab.name}}
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import Button from '@/components/UI/Button.vue'
import { TabItem } from '@/types/components/blanks/Tabs'

export interface ITabsProps {
	list: TabItem[]
	value: TabItem['id']
}

@Component({
	components: {
		'button-component': Button
	}
})
export default class Tabs extends Vue{
	@Prop() list!: ITabsProps['list']
	@Prop() value!: ITabsProps['value']
}
</script>