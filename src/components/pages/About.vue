<template lang='pug'> 
	section.b-about
		.__left
			h2.__title О нас
			p.__text {{aboutText}}
			.__contact
				button-component.__order(
					tag = "router-link"
					text = "upper"
					size = "medium"
					href = "/"
				) Заказать
				span или
				link-component.__send(
					href = "/contacts"
				) Написать 🠖
		.__right
			img.__image(
				src="@/assets/images/utility/shef.svg"
			)
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import Button from '@/components/UI/Button.vue'
import Link from '@/components/UI/Link.vue'

import { routes } from '@/router'

@Component({
	components: {
		'button-component': Button,
		'link-component': Link
	}
})
export default class About extends Vue{
	routes = routes
	aboutText = 'Мы знаем о суши все, включая то, что обычно нравится людям, поэтому мы специально сократили меню, чтобы вам было проще сделать выбор. Все, что вы выберете - вам понравится. Еда должна быть не только вкусной, но и красивой. Поэтому мы уделяем большое внимание сервировке блюд, тому в каком виде она попадет на ваш стол.'
}
</script>