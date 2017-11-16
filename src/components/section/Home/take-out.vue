<template>
	<section id="takeOut">
		<searchBar></searchBar>
		<swiperBar></swiperBar>
		<wrapper></wrapper>
		<special></special>
		<h3 class="title">推荐商家</h3>
		<shopList></shopList>
		<shopCart></shopCart>
		<goTop></goTop>
	</section>
</template>

<script>
	import searchBar from './takeOut/search-bar.vue'
	import swiperBar from './takeOut/swiper-bar.vue'
	import wrapper from './takeOut/wrapper.vue'
	import special from './takeOut/special-module.vue'
	import shopList from './takeOut/shop-list.vue'
	import shopCart from './takeOut/shopping-cart'
	import goTop from './takeOut/goTop'
	export default {
		name: 'takeOut',
		components: {
			searchBar,
			swiperBar,
			wrapper,
			special,
			shopList,
			shopCart,
			goTop
		}
	}
</script>

<style lang="stylus" scoped>
	.title
		font-size .35rem
		margin .5rem .2rem 0 .2rem
</style>
