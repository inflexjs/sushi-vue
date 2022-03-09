<template lang="pug">
	img.b-skeleton(
		src = "skeleton.svg"
	)
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SkeletonCard extends Vue{

}
</script>