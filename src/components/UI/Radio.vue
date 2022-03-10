<template lang="pug">
	.b-radio
		.__list
			label.__item(
				v-for = "item in list"
			)
				input.__value(
					type="radio"
					:name="name"
					:value="value"
					v-on:input = "$emit('input', item.id)"
					:checked = "item.id === value"
				)
				.__name {{item.name}}
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import { RadioItem } from '@/types/components/UI/Radio'

export type IRadioProps = {
	list: RadioItem[]
	value: number
	name: string
}

@Component
export default class Radio extends Vue{
	@Prop({required: true}) list!: IRadioProps['list']
	@Prop({required: true}) value!: IRadioProps['value']
	@Prop({required: true}) name!: IRadioProps['name']
}
</script>