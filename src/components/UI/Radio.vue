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

<script>
export default {
	props: {
		list: {
			required: true,
			type: Array
		},
		value: {
			requered: true,
			type: Number
		},
		name: {
			required: true,
			type: String
		}
	}
}
</script>