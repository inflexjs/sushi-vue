<template lang="pug">
	main.b-main
		.container.__container
			slot
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Main extends Vue{
}
</script>