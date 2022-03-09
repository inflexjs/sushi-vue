<template lang="pug">
	.b-skeleton.--tab
		img.__image(
			v-for = "_ in 4"
			src = "skeleton-tab.svg"
		)
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SkeletonTabs extends Vue{

}
</script>