<template functional lang="pug">
	.b-skeleton(
		:key = "`skeleton-${Math.random()}`"
	)
		img.__image(
			src = "skeleton.svg"
		)
</template>