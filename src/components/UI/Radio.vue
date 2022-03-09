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
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component
export default class Radio extends Vue{
	@Prop({required: true}) list!: {id: number, name: string}[]
	@Prop({required: true}) value!: number
	@Prop({required: true}) name!: string
}
</script>