<template lang="pug">
	.b-skeleton
		img.__image(
			src = "skeleton.svg"
		)
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SkeletonCard extends Vue{

}
</script>